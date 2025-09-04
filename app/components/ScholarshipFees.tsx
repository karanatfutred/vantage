"use client";
import React from "react";
import Image from "next/image";

const ScholarshipFees = () => {
  const scholarshipInfo = {
    title: "Merit Scholarship Program",
    description:
      "Exceptional candidates can receive up to 50% tuition reduction based on academic excellence and professional achievements.",
    eligibility: [
      "Minimum 3.5 GPA or equivalent",
      "2+ years professional experience",
      "Strong leadership potential",
      "Community involvement",
    ],
    deadline: "Applications due by March 15th",
  };

  const feeStructure = [
    {
      category: "Full Program Fee",
      amount: "$12,500",
      description: "Complete 2-week intensive program",
    },
    {
      category: "Early Bird Discount",
      amount: "$10,500",
      description: "Register 3 months in advance",
    },
    {
      category: "Alumni Referral",
      amount: "$11,000",
      description: "Referred by program alumni",
    },
    {
      category: "Group Enrollment",
      amount: "$9,500",
      description: "Per person (minimum 3 participants)",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="px-4 mx-auto max-w-[1272px]">
        {/* Three Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Scholarship Info (Black Background) */}
          <div className="bg-black rounded-2xl p-8 text-white">
            <div className="mb-6">
              <div className="text-sm uppercase tracking-wider text-[#A5D2B0] mb-3">
                Financial Aid
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {scholarshipInfo.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {scholarshipInfo.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#A5D2B0]">
                Eligibility Criteria
              </h4>
              <ul className="space-y-2">
                {scholarshipInfo.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-[#A5D2B0] mt-1">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-[#A5D2B0] font-medium">
                {scholarshipInfo.deadline}
              </p>
            </div>
          </div>

          {/* Card 2: Main Heading - White Background */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-section-heading">
              <span
                className="italic"
                style={{
                  fontFamily: '"Chronicle Display Black", serif',
                  color: "#568c65",
                }}
              >
                Scholarship{" "}
              </span>
              & Fees
            </h2>
            <p className="text-lg text-gray-600">
              Making world-class finance education accessible
            </p>
          </div>

          {/* Card 3: Fees Structure */}
          <div className="bg-black rounded-2xl p-6 flex flex-col justify-center">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-[#A5D2B0] mb-2">
                Investment
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Program Fee
              </h3>

              <div className="bg-[#568c65] rounded-lg p-4 mb-4">
                <div className="text-3xl font-bold text-white mb-1">
                  $12,500
                </div>
                <p className="text-sm text-gray-200">
                  Complete 2-week intensive program
                </p>
              </div>

              <p className="text-xs text-gray-400">
                Includes materials, certification & alumni access
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-[#f8f9fa] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Transform Your Finance Career?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't let financial constraints hold you back. Explore our
            scholarship opportunities and flexible payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#568c65] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4a7556] transition-colors">
              Apply for Scholarship
            </button>
            <button className="bg-white text-[#568c65] border-2 border-[#568c65] px-8 py-3 rounded-lg font-semibold hover:bg-[#568c65] hover:text-white transition-colors">
              View Full Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipFees;
