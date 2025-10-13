"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePayment } from "@/providers/PaymentProvider";
import { useToast } from "@/providers/ToastProvider";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { openCashfreePayment } from "../../utils/cashfreePayment";
import { CheckActiveOrdersResponse } from "@/types";

interface AuthenticatedCheckoutFormProps {
  programId: string;
  onSuccess?: (orderData: Record<string, unknown>) => void;
  onError?: (error: Record<string, unknown>) => void;
  className?: string;
}

export const AuthenticatedCheckoutForm: React.FC<
  AuthenticatedCheckoutFormProps
> = ({ programId, onSuccess, onError, className = "" }) => {
  const {
    createOrder,
    createPaymentSession,
    checkActiveOrders,
    verifyPayment,
  } = usePayment();
  const { showToast } = useToast();

  const [selectedCurrency] = useState("INR");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pricing, setPricing] = useState<Record<string, unknown> | null>(null);
  const [activeOrder, setActiveOrder] =
    useState<CheckActiveOrdersResponse | null>(null);
  const [isCheckingOrders, setIsCheckingOrders] = useState(true);

  const checkForActiveOrders = useCallback(async () => {
    setIsCheckingOrders(true);
    try {
      const result = await checkActiveOrders({
        programId,
        selectedCurrency,
      });
      setActiveOrder(result);

      if (result.hasActiveOrder) {
        showToast("You have an active order for this program", "info");
      }
    } catch (error: unknown) {
      console.error("Error checking active orders:", error);
      showToast("Failed to check existing orders", "error");
    } finally {
      setIsCheckingOrders(false);
    }
  }, [programId, selectedCurrency, checkActiveOrders, showToast]);

  useEffect(() => {
    checkForActiveOrders();
  }, [checkForActiveOrders]);

  const handleCreateNewOrder = async () => {
    if (!pricing) {
      showToast("Please wait for pricing to load", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      showToast("Creating order...", "info");
      const order = await createOrder({
        programId,
        selectedCurrency,
      });

      showToast("Preparing payment...", "info");
      const session = await createPaymentSession(order.orderId);

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
      console.error("Order creation error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to create order. Please try again.";
      showToast(errorMessage, "error");
      onError?.(error as Record<string, unknown>);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinuePayment = async () => {
    if (!activeOrder?.activeOrder) {
      showToast("No active order found", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      showToast("Preparing payment...", "info");
      const session = await createPaymentSession(
        activeOrder.activeOrder.orderId
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
      console.error("Payment session creation error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to prepare payment. Please try again.";
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
        showToast("Payment successful! Welcome to the program.", "success");
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
    } finally {
      checkForActiveOrders();
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
            "Payment was actually successful! Welcome to the program.",
            "success"
          );
          onSuccess?.(verificationResult.data);
          checkForActiveOrders();
          return;
        }
      } catch (verifyError) {
        console.error("Payment verification error:", verifyError);
      }
    }

    showToast("Payment failed. Please try again.", "error");
    onError?.(error);
  };

  const handlePricingUpdate = (pricingData: Record<string, unknown>) => {
    setPricing(pricingData);
  };

  if (isCheckingOrders) {
    return (
      <div className={`max-w-2xl mx-auto ${className}`}>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Checking for existing orders...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>

        {/* Active Order Check */}
        {activeOrder?.hasActiveOrder && activeOrder.activeOrder && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Active Order Found
            </h3>
            <div className="text-sm text-yellow-700 mb-4">
              <p>You have an existing order for this program:</p>
              <div className="mt-2 space-y-1">
                <p>
                  <strong>Order Number:</strong>{" "}
                  {activeOrder.activeOrder.orderNumber}
                </p>
                <p>
                  <strong>Amount:</strong>{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: activeOrder.activeOrder.orderCurrency,
                  }).format(activeOrder.activeOrder.orderAmount)}
                </p>
                <p>
                  <strong>Status:</strong> {activeOrder.activeOrder.status}
                </p>
                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(
                    activeOrder.activeOrder.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleContinuePayment}
                disabled={isSubmitting}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {isSubmitting ? "Processing..." : "Continue Payment"}
              </button>
              <button
                onClick={handleCreateNewOrder}
                disabled={isSubmitting}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 disabled:opacity-50 transition-colors"
              >
                Start New Order
              </button>
            </div>
          </div>
        )}

        {/* Pricing Calculator - Only show if no active order */}
        {!activeOrder?.hasActiveOrder && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Program Pricing
              </h3>
              <PricingCalculator
                programId={programId}
                onPricingUpdate={handlePricingUpdate}
              />
            </div>

            <div className="pt-4">
              <button
                onClick={handleCreateNewOrder}
                disabled={isSubmitting || !pricing}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Processing..." : "Create New Order"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
