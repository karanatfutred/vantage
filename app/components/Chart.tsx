"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// Updated data with your provided values and difference calculations
const compensationData = [
  {
    year: "Year 1",
    standardFinance: 1000000,
    highFinance: 2300000,
    difference: 1300000,
  },
  {
    year: "Year 2",
    standardFinance: 1200000,
    highFinance: 3000000,
    difference: 2300000,
  },
  {
    year: "Year 3",
    standardFinance: 1600000,
    highFinance: 4000000,
    difference: 2600000,
  },
  {
    year: "Year 4",
    standardFinance: 1800000,
    highFinance: 4500000,
    difference: 2600000,
  },
  {
    year: "Year 5",
    standardFinance: 2200000,
    highFinance: 5500000,
    difference: 2800000,
  },
];

// Updated formatter function to handle ReactNode types
const formatLakhs = (value: any): string => {
  if (typeof value === "number") {
    return `${Math.round(value / 100000)}L`;
  }
  return "";
};

const FinanceCompensationChart: React.FC = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
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

  // Find the maximum value for Y-axis domain
  const maxValue = Math.max(
    ...compensationData.map((item) =>
      Math.max(item.standardFinance, item.highFinance)
    )
  );
  const yAxisMax = Math.ceil(maxValue * 1.1);

  // Custom component to render difference lines
  const CustomizedDifference = (props: any) => {
    const { payload, x, y, width, height } = props;
    if (!payload) return null;

    const standardFinance = payload.standardFinance;
    const highFinance = payload.highFinance;
    const difference = highFinance - standardFinance;

    // Calculate positions for the bars
    const chartHeight = 320; // Approximate chart height
    const standardHeight = (standardFinance / yAxisMax) * chartHeight;
    const highFinanceHeight = (highFinance / yAxisMax) * chartHeight;

    const standardTop = chartHeight - standardHeight + 20; // +20 for margin
    const highFinanceTop = chartHeight - highFinanceHeight + 20;

    const centerX = x + width / 2;
    const lineX = centerX + width * 0.6; // Position line to the right of bars

    return (
      <g>
        {/* Vertical dashed line */}
        <line
          x1={lineX}
          y1={standardTop}
          x2={lineX}
          y2={highFinanceTop}
          stroke="#ff6b35"
          strokeWidth={2}
          strokeDasharray="4,4"
        />

        {/* Top horizontal tick */}
        <line
          x1={lineX - 5}
          y1={highFinanceTop}
          x2={lineX + 5}
          y2={highFinanceTop}
          stroke="#ff6b35"
          strokeWidth={2}
        />

        {/* Bottom horizontal tick */}
        <line
          x1={lineX - 5}
          y1={standardTop}
          x2={lineX + 5}
          y2={standardTop}
          stroke="#ff6b35"
          strokeWidth={2}
        />

        {/* Difference label */}
        <text
          x={lineX + 8}
          y={(standardTop + highFinanceTop) / 2 + 4}
          fill="#ff6b35"
          fontSize="12"
          fontWeight="600"
          textAnchor="start"
        >
          +{Math.round(difference / 100000)}L
        </text>
      </g>
    );
  };

  return (
    <section id="whats-at-stake" className="pt-10  bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-section-heading">
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

          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
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
                right: 100,
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
                domain={[0, yAxisMax]}
              />

              <Bar
                dataKey="highFinance"
                fill="#639b72"
                radius={[4, 4, 0, 0]}
                name="High Finance"
              >
                <LabelList
                  dataKey="highFinance"
                  position="insideTop"
                  formatter={formatLakhs}
                  style={{ fill: "#fff", fontWeight: 600, fontSize: 14 }}
                />
              </Bar>
              <Bar
                dataKey="standardFinance"
                fill="#000000"
                radius={[4, 4, 0, 0]}
                name="Standard Finance"
              >
                <LabelList
                  dataKey="standardFinance"
                  position="insideTop"
                  formatter={formatLakhs}
                  style={{
                    fill: "#fff",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                />
              </Bar>

              {/* Add invisible bar to render custom difference lines */}
              <Bar
                id="difference-bar"
                dataKey="difference"
                fill="transparent"
                shape={<CustomizedDifference />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend and Footer */}
        <div className="space-y-4">
          {/* Legends */}
          <div className="space-y-3">
            <div className="flex items-end space-x-3 ">
              <div
                className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: "#000000" }}
              >
                1
              </div>
              <div className="text-sm text-gray-700">
                <p>
                  <span
                    className="inline-block w-3 h-3 rounded mr-2"
                    style={{ backgroundColor: "#000000" }}
                  ></span>
                  Standard Finance Compensation assumed to be top end of the
                  range in HCOL locations starting at{" "}
                  <strong>₹10,00,000</strong> with varying annual increases in
                  pay
                </p>
              </div>
            </div>

            <div className="flex items-end space-x-3">
              <div
                className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: "#639b72" }}
              >
                2
              </div>
              <div className="text-sm text-gray-700">
                <p>
                  <span className="inline-block w-3 h-3 bg-[#639b72] rounded mr-2"></span>
                  High Finance Avg Pay based on average high finance roles from
                  2022–2025 (data from <strong>79,000+</strong> submissions to
                  the WSO Company Database)
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
    </section>
  );
};

export default FinanceCompensationChart;
