"use client";

import React from "react";
import { PricingState, CurrencyOption } from "@/types";

interface CourseDetailsCardProps {
  programId: string;
  pricing: PricingState | null;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  isLoading: boolean;
  availableCurrencies?: CurrencyOption[];
  isLoadingCurrencies?: boolean;
  className?: string;
}

export const CourseDetailsCard: React.FC<CourseDetailsCardProps> = ({
  programId,
  pricing,
  selectedCurrency,
  onCurrencyChange,
  isLoading,
  availableCurrencies = [],
  isLoadingCurrencies = false,
  className = "",
}) => {
  // Use only backend currencies - no fallback
  const currencyOptions = availableCurrencies;

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={`bg-white shadow-lg border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Global Banking & Finance Fellowship
        </h2>
        <p className="text-gray-600 text-sm">
          2-week intensive program • Online Live
        </p>
      </div>

      {/* Course Details */}
      <div className="p-6 space-y-4">
        {/* Pricing Section */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Pricing</h3>
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-600">Currency:</label>
              <select
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                disabled={
                  isLoading ||
                  isLoadingCurrencies ||
                  currencyOptions.length === 0
                }
                className="px-3 py-1 border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
              >
                {isLoadingCurrencies ? (
                  <option value={selectedCurrency}>
                    Loading currencies...
                  </option>
                ) : currencyOptions.length === 0 ? (
                  <option value={selectedCurrency}>
                    No currencies available
                  </option>
                ) : (
                  currencyOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.flag} {option.code}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
            </div>
          ) : pricing ? (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tuition Fee</span>
                <span className="font-medium">
                  {formatCurrency(pricing.pricing.tuition, selectedCurrency)}
                </span>
              </div>

              {pricing.fx && (
                <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                  <div className="flex justify-between">
                    <span>Exchange Rate</span>
                    <span>
                      1 {pricing.fx.fromCurrency} = {pricing.fx.rate.toFixed(4)}{" "}
                      {pricing.fx.toCurrency}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Last updated:{" "}
                    {new Date(pricing.fx.conversionDate).toLocaleDateString()}
                  </div>
                </div>
              )}

              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-blue-600">
                    {formatCurrency(
                      pricing.pricing.totalAmount,
                      selectedCurrency
                    )}
                  </span>
                </div>
                {pricing.pricing.taxesIncluded && (
                  <p className="text-xs text-gray-500 mt-1">*Taxes included</p>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-4">
              <p>Unable to load pricing information</p>
            </div>
          )}
        </div>

        {/* Security Badge */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Secure payment powered by Cashfree</span>
          </div>
        </div>
      </div>
    </div>
  );
};
