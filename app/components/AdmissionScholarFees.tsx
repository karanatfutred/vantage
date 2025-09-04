"use client";
import React from "react";

const AdmissionScholarshipFees = () => {
  const steps = [
    {
      step: "Step 01",
      title: "Application Submission",
      description:
        "Complete your online application form with all required documents and personal information.",
    },
    {
      step: "Step 02",
      title: "Review & Assessment",
      description:
        "Our admissions team will review your application and conduct a comprehensive assessment.",
    },
    {
      step: "Step 03",
      title: "Final Decision",
      description:
        "Receive your admission decision and begin your journey with us upon acceptance.",
    },
  ];

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

  return (
    <section className="bg-black">
      <div className="px-4 lg:pt-[50px] mx-auto max-w-[1272px]">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white font-section-heading">
            Admission,{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Scholarship
            </span>{" "}
            & Fees
          </h2>
          <p className="text-lg text-white mt-4">
            Making world-class finance education accessible
          </p>
        </div>

        {/* Two Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Admission Process */}
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="text-sm text-[#568c65] uppercase tracking-wider mb-2">
                Process
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Admission Process
              </h3>
              <p className="text-white text-sm">
                A streamlined three-step process designed to identify and
                welcome the most promising candidates.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className=" pl-4">
                  <h4 className="font-bold text-lg text-[#568c65] mb-1">
                    <span
                      className="italic p-2"
                      style={{
                        fontFamily: '"Chronicle Display Black", serif',
                        color: "#fff",
                      }}
                    >
                      {step.step}
                    </span>
                  </h4>
                  <div className=" text-white rounded-lg p-2">
                    <h5 className="font-semibold mb-2">
                      {step.title}
                    </h5>
                    <p className="text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Merged Scholarship Program & Program Fees */}
          <div className="bg-white rounded-2xl p-6">
            {/* Scholarship Section */}
            <div className="text-center mb-8">
              <div className="text-sm text-[#568c65] uppercase tracking-wider mb-2">
                Financial Aid
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                {scholarshipInfo.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {scholarshipInfo.description}
              </p>
            </div>

            <div className="mb-8">
              {/* <h4 className="text-lg font-semibold mb-3 text-[#568c65]">
                Eligibility Criteria
              </h4>
              <ul className="space-y-2 mb-6">
                {scholarshipInfo.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-[#A5D2B0] mt-1">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul> */}

              <div className="bg-[#A5D2B0] rounded-lg p-3 text-center mb-8">
                <p className="text-sm font-medium text-black">
                  {scholarshipInfo.deadline}
                </p>
              </div>
            </div>

            {/* Program Fees Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="text-center mb-6">
                <div className="text-sm text-[#568c65] uppercase tracking-wider mb-2">
                  Investment
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Program Fee
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-[#568c65] rounded-lg p-6 mb-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    $12,500
                  </div>
                  <p className="text-sm text-gray-200">
                    Complete 2-week intensive program
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionScholarshipFees;