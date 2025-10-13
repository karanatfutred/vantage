"use client";

import React, { useState } from "react";
import { usePayment } from "@/providers/PaymentProvider";
import { useToast } from "@/providers/ToastProvider";
import { usePricing } from "@/hooks/usePricing";
import { openCashfreePayment } from "../../utils/cashfreePayment";
import { CourseDetailsCard } from "./CourseDetailsCard";

interface GuestCheckoutFormProps {
  programId: string;
  onSuccess?: (orderData: Record<string, unknown>) => void;
  onError?: (error: Record<string, unknown>) => void;
  className?: string;
}

export const GuestCheckoutForm: React.FC<GuestCheckoutFormProps> = ({
  programId,
  onSuccess,
  onError,
  className = "",
}) => {
  const {
    createGuestUser,
    createGuestOrder,
    createGuestPaymentSession,
    verifyPayment,
  } = usePayment();
  const { showToast } = useToast();

  // Use the pricing hook
  const {
    pricing,
    selectedCurrency,
    isLoading: isPricingLoading,
    setSelectedCurrency,
    hasPricing,
    availableCurrencies,
    isLoadingCurrencies,
  } = usePricing({
    programId,
    initialCurrency: "INR",
    debounceDelay: 500,
    autoUpdate: true,
  });

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors: string[] = [];

    if (!formData.email.trim()) {
      errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    if (!formData.name.trim()) {
      errors.push("Name is required");
    }

    if (!formData.phone.trim()) {
      errors.push("Phone number is required");
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      errors.push("Please enter a valid phone number");
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      showToast(errors.join(", "), "error");
      return;
    }

    if (!hasPricing || !pricing) {
      showToast("Please wait for pricing to load", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      showToast("Creating guest account...", "info");
      const guestUser = await createGuestUser({
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
      });

      if (!guestUser) {
        // User was redirected to login
        return;
      }

      showToast("Creating order...", "info");
      const order = await createGuestOrder({
        programId,
        selectedCurrency,
        guestUserId: guestUser.userId,
      });

      showToast("Preparing payment...", "info");
      const session = await createGuestPaymentSession(
        order.orderId,
        formData.email
      );

      await openCashfreePayment({
        paymentSession: session,
        onSuccess: handlePaymentSuccess,
        onFailure: (error: Record<string, unknown>) =>
          handlePaymentFailure(error),
        onClose: () => {
          // Payment closed
        },
      });

      showToast("Payment ready! Please complete your payment.", "success");
    } catch (error: unknown) {
      console.error("Checkout error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Checkout failed. Please try again.";
      showToast(errorMessage, "error");
      onError?.(error as Record<string, unknown>);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = async (paymentData: Record<string, unknown>) => {
    try {
      showToast("Verifying payment...", "info");

      // Verify payment with backend
      const verificationResult = await verifyPayment(
        paymentData.orderId as string
      );

      if (
        verificationResult.success &&
        verificationResult.data?.paymentStatus === "SUCCESS"
      ) {
        showToast(
          "Payment successful! Redirecting to email verification...",
          "success"
        );

        // Redirect to email verification page with email parameter
        const verifyEmailUrl = `/verify-email?email=${encodeURIComponent(
          formData.email
        )}&callbackUrl=${encodeURIComponent("/my-orders")}`;
        window.location.href = verifyEmailUrl;

        onSuccess?.(verificationResult.data);
      } else {
        showToast(
          "Payment verification failed. Please contact support.",
          "error"
        );
        onError?.(verificationResult as unknown as Record<string, unknown>);
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      showToast(
        "Payment verification failed. Please contact support.",
        "error"
      );
      onError?.(error as Record<string, unknown>);
    }
  };

  const handlePaymentFailure = async (error: Record<string, unknown>) => {
    console.error("Payment failed:", error);

    // If we have an orderId, verify payment status anyway
    if (error.orderId) {
      try {
        showToast("Verifying payment status...", "info");
        const verificationResult = await verifyPayment(error.orderId as string);

        if (
          verificationResult.success &&
          verificationResult.data?.paymentStatus === "SUCCESS"
        ) {
          showToast(
            "Payment was actually successful! Redirecting to email verification...",
            "success"
          );

          // Redirect to email verification page with email parameter
          const verifyEmailUrl = `/verify-email?email=${encodeURIComponent(
            formData.email
          )}&callbackUrl=${encodeURIComponent("/my-orders")}`;
          window.location.href = verifyEmailUrl;

          onSuccess?.(verificationResult.data);
          return;
        }
      } catch (verifyError) {
        console.error("Payment verification error:", verifyError);
      }
    }

    showToast("Payment failed. Please try again.", "error");
    onError?.(error);
  };

  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Course Details */}
        <div className="order-2 lg:order-1">
          <CourseDetailsCard
            programId={programId}
            pricing={pricing}
            selectedCurrency={selectedCurrency}
            onCurrencyChange={setSelectedCurrency}
            isLoading={isPricingLoading}
            availableCurrencies={availableCurrencies}
            isLoadingCurrencies={isLoadingCurrencies}
          />
        </div>

        {/* Right Side - Checkout Form */}
        <div className="order-1 lg:order-2">
          <div className="bg-white shadow-lg border border-gray-200 p-6 lg:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Complete Your Enrollment
              </h2>
              <p className="text-gray-600">
                Enter your details to proceed with payment
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              {/* Account Options */}
              <div className="border-t border-gray-200 pt-4">
                <div className="bg-blue-50 p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Account Information
                  </h4>
                  <p className="text-sm text-blue-700 mb-3">
                    We&apos;ll create a guest account for you and send login
                    credentials to your email address.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600">
                      Already have an account?
                    </span>
                    <button
                      type="button"
                      onClick={() => (window.location.href = "/signin")}
                      className="text-sm text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      Sign in instead
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !hasPricing || isPricingLoading}
                  className="w-full bg-blue-600 text-white py-4 px-6 font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Proceed to Payment"
                  )}
                </button>
              </div>

              {/* Security Notice */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  🔒 Your payment is secured by Cashfree. We never store your
                  payment details.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
