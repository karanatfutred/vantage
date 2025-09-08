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
import { BarProps } from "recharts";

// Updated data with your provided values and difference calculations
const compensationData = [
  {
    year: "Year 1",
    standardFinance: 800000,
    highFinance: 2000000,
    difference: 1200000,
  },
  {
    year: "Year 2",
    standardFinance: 1500000,
    highFinance: 2500000,
    difference: 1000000,
  },
  {
    year: "Year 3",
    standardFinance: 1100000,
    highFinance: 3300000,
    difference: 1200000,
  },
  {
    year: "Year 4",
    standardFinance: 2500000,
    highFinance: 4000000,
    difference: 1500000,
  },
  {
    year: "Year 5",
    standardFinance: 2700000,
    highFinance: 4500000,
    difference: 1800000,
  },
];

type FinanceBar = BarProps & {
  payload?: {
    year: string;
    standardFinance: number;
    highFinance: number;
    difference: number;
  };
};

// Updated formatter function to handle ReactNode types
const formatLakhs = (value: React.ReactNode): React.ReactNode => {
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

  // Find the maximum value for Y-axis domain
  const maxValue = Math.max(
    ...compensationData.map((item) =>
      Math.max(item.standardFinance, item.highFinance)
    )
  );
  const yAxisMax = Math.ceil(maxValue * 1.1);

  // Custom component to render difference lines
  const CustomizedDifference = (props: FinanceBar) => {
    const { payload, x = 0, width = 0 } = props;
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

    const centerX = Number(x) + Number(width) / 2;
    const lineX = centerX + Number(width) * 0.6;
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
    <section
      id="whats-at-stake"
      className="pt-10  bg-white border-b border-gray-200"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-section-heading">
            The
            <span
              className="italic ml-2"
              style={{
                fontFamily: '"Chronicle Display Semibold", serif',
                color: "#568c65",
              }}
            >
              ₹1 Crore
            </span>{" "}
            Opportunity Gap in Just 5 Years
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            High Finance vs. Regular Finance Roles
          </p>
        </div>

        {/* Chart Container */}
        <div className="max-w-7xl h-96 mx-auto mb-6 overflow-x-auto ">
          <div className="w-7xl h-96">
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

                <Bar
                  id="difference-bar"
                  dataKey="difference"
                  fill="transparent"
                  shape={<CustomizedDifference />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend and Footer */}
        <div className="mx-auto max-w-7xl space-y-4">
          {/* Legends */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 ">
              <div className="text-sm text-gray-700">
                <p>
                  <span
                    className="inline-block w-3 h-3 rounded mr-2"
                    style={{ backgroundColor: "#000000" }}
                  ></span>
                  Standard Finance pay estimates are based on post-MBA
                  compensation at top banks and financial institutions, assuming
                  roles such as Financial Analyst and Relationship Manager, etc,
                  with a standard progression to Senior Manager within 4–5
                  years, using data from Glassdoor, AmbitionBox, and similar
                  sources. pay
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-700">
                <p>
                  <span className="inline-block w-3 h-3 bg-[#639b72] rounded mr-2"></span>
                  High Finance pay estimates are based on post-MBA compensation
                  at top investment banks (such as JP Morgan and Goldman Sachs)
                  and leading VC funds, assuming a standard progression from
                  Associate to VP within 3–5 years, using data from Glassdoor,
                  AmbitionBox, and similar sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceCompensationChart;
