"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data based on the description
const compensationData = [
  {
    year: "Year 1",
    standardFinance: 90000,
    highFinance: 175000,
  },
  {
    year: "Year 2",
    standardFinance: 100000,
    highFinance: 200000,
  },
  {
    year: "Year 3",
    standardFinance: 110000,
    highFinance: 250000,
  },
  {
    year: "Year 4",
    standardFinance: 120000,
    highFinance: 300000,
  },
  {
    year: "Year 5",
    standardFinance: 130000,
    highFinance: 375000,
  },
];

const FinanceCompensationChart: React.FC = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Calculate total difference over 5 years
  const totalStandardFinance = compensationData.reduce(
    (sum, item) => sum + item.standardFinance,
    0
  );
  const totalHighFinance = compensationData.reduce(
    (sum, item) => sum + item.highFinance,
    0
  );
  const totalDifference = totalHighFinance - totalStandardFinance;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-black font-section-heading mb-6">
          <span className="ml-2">What's at </span>
          <span
            className="italic ml-2"
            style={{
              fontFamily: '"Chronicle Display Semibold", serif',
              color: "#568c65",
            }}
          >
            Stake?
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          High Finance Vs. Standard Finance | Massive pay gap over 5 years
        </p>
      </div>

      {/* Chart Container */}
      <div className="w-full h-96 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={compensationData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <YAxis
              tickFormatter={formatCurrency}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
              domain={[0, 400000]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="standardFinance"
              fill="#189eda"
              radius={[4, 4, 0, 0]}
              name="Standard Finance"
            />
            <Bar
              dataKey="highFinance"
              fill="#0a425c"
              radius={[4, 4, 0, 0]}
              name="High Finance"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend and Footer */}
      <div className="space-y-4">
        {/* Legends */}
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "#189eda" }}
            >
              1
            </div>
            <div className="text-sm text-gray-700">
              <p>
                Standard Finance Compensation assumed to be top end of the range
                in HCOL locations starting at <strong>$90,000</strong> with
                annual <strong>$10,000</strong> increases in pay
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "#0a425c" }}
            >
              2
            </div>
            <div className="text-sm text-gray-700">
              <p>
                High Finance Avg Pay based on average high finance roles from
                2022–2025 (data from <strong>79,000+</strong> submissions to the
                WSO Company Database)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Title */}
        <div className="text-center pt-4">
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(totalDifference)}+ in lost income in just 5 years
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinanceCompensationChart;
