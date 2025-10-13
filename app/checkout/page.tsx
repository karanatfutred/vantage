"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GuestCheckoutForm } from "@/components/checkout/GuestCheckoutForm";
import { AuthenticatedCheckoutForm } from "@/components/checkout/AuthenticatedCheckoutForm";
import { useAuth } from "@/providers/AuthProvider";
import NavbarCheckout from "../components/NavbarCheckout";

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const { isAuthenticated, isLoading } = useAuth();
  const [programId, setProgramId] = useState<string | null>(null);
  const [isLoadingProgram, setIsLoadingProgram] = useState(false);

  useEffect(() => {
    const programSlugParam = searchParams.get("programId"); // This is actually the slug
    if (programSlugParam) {
      fetchProgramData(programSlugParam);
    } else {
      // Redirect to programs page if no programId
      window.location.href = "/fellowships";
    }
  }, [searchParams]);

  const fetchProgramData = async (slug: string) => {
    setIsLoadingProgram(true);
    try {
      const response = await fetch(`/api/courses/${slug}`);
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data?.program) {
          setProgramId(data.data.program.programId); // Use the real programId
        } else {
          console.error("Failed to fetch program data:", data);
          window.location.href = "/fellowships";
        }
      } else {
        console.error("Failed to fetch program data");
        window.location.href = "/fellowships";
      }
    } catch (error) {
      console.error("Error fetching program data:", error);
      window.location.href = "/fellowships";
    } finally {
      setIsLoadingProgram(false);
    }
  };

  if (isLoading || isLoadingProgram || !programId) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">
              {isLoadingProgram
                ? "Loading program details..."
                : "Loading checkout..."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleCheckoutSuccess = (orderData: Record<string, unknown>) => {
    // Redirect to success page or show success message
    const orderId = (orderData?.orderId as string) || "";
    window.location.href = `/my-orders?success=true&orderId=${orderId}`;
  };

  const handleCheckoutError = (error: Record<string, unknown>) => {
    console.error("Checkout error:", error);
    // Error handling is done in the individual forms
  };

  return (
    <>
      <NavbarCheckout />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Complete Your Enrollment
            </h1>
            <p className="text-gray-600">
              {isAuthenticated
                ? "Complete your payment to enroll in this program."
                : "Create a guest account or sign in to complete your enrollment."}
            </p>
          </div>

          {isAuthenticated ? (
            <AuthenticatedCheckoutForm
              programId={programId}
              onSuccess={handleCheckoutSuccess}
              onError={handleCheckoutError}
            />
          ) : (
            <GuestCheckoutForm
              programId={programId}
              onSuccess={handleCheckoutSuccess}
              onError={handleCheckoutError}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
