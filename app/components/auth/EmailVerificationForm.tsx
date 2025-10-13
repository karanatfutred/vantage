"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const EmailVerificationForm: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // TODO: Implement actual email verification API call
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/auth/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp: verificationCode,
          }),
        }
      );

      if (response.ok) {
        setIsVerified(true);
        setTimeout(() => {
          router.push(
            `/signin?email=${encodeURIComponent(
              email || ""
            )}&callbackUrl=${encodeURIComponent(callbackUrl)}`
          );
        }, 1200);
      } else {
        const data = await response.json();
        setError(data.message || "Invalid verification code");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/auth/resend-verification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        alert("Verification code sent successfully!");
      } else {
        alert("Failed to resend verification code");
      }
    } catch {
      alert("An error occurred while resending the code");
    }
  };

  if (isVerified) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Email Verified!
          </h2>
          <p className="text-gray-600">
            Your email has been successfully verified. Redirecting to sign in...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600">
          We&apos;ve sent a verification code to{" "}
          <span className="font-medium text-gray-900">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="verificationCode"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Verification Code
          </label>
          <input
            id="verificationCode"
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-center text-lg tracking-widest"
            placeholder="Enter 6-digit code"
            maxLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>
      </form>

      <div className="mt-6 text-center space-y-4">
        <p className="text-sm text-gray-600">
          Didn&apos;t receive the code?{" "}
          <button
            onClick={handleResendCode}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Resend code
          </button>
        </p>

        <Link
          href="/signin"
          className="block text-sm text-gray-600 hover:text-gray-900"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default EmailVerificationForm;
