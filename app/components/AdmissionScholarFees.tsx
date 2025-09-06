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
    <section className="bg-black border-b broder-gray-800 ">
      <div className="px-4 pt-8 lg:pt-[50px] mx-auto max-w-[1272px] ">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-section-heading">
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
          <p className="lg:text-lg text-white mt-4">
            Making world-class finance education accessible
          </p>
        </div>

        {/* Two Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {/* Card 1: Admission Process */}
          <div className="lg:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Admission Process
              </h3>
              <p className="text-white text-sm px-1">
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
                    <h5 className="font-semibold mb-2">{step.title}</h5>
                    <p className="text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Merged Scholarship Program & Program Fees */}
          <div className="bg-black rounded-2xl p-6">
            {/* Scholarship Card */}
            <div className="mb-6">
              <div className="bg-white text-black rounded-2xl p-6 text-center">
                <div className="text-sm uppercase tracking-wider mb-2">
                  Financial Aid
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {scholarshipInfo.title}
                </h3>
                <p className=" text-sm mb-4">{scholarshipInfo.description}</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium">
                    {scholarshipInfo.deadline}
                  </p>
                </div>
              </div>
            </div>

            {/* Program Fee Card */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-6 text-center">
                <div className="text-sm text-[#568c65] uppercase tracking-wider mb-2">
                  Investment
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Program Fee
                </h3>
                <div className="bg-[#568c65] rounded-lg p-6">
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
