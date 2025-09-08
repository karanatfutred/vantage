"use client";
import React from "react";

const AdmissionScholarshipFees = () => {
  const steps = [
    {
      step: "Step 01",
      title: "Apply Submit your application",
      description:
        "Complete your online application form with all required documents and personal information.",
    },
    {
      step: "Step 02",
      title: "Interview Interaction with the founding team to assess fit",
      description:
        "Our admissions team will review your application and conduct a comprehensive assessment.",
    },
    {
      step: "Step 03",
      title: "Join Us Receive your decision and secure your Fellowship spot",
      description:
        "Receive your admission decision and begin your journey with us upon acceptance.",
    },
  ];

  const scholarshipInfo = {
    title: "Merit Scholarship Program",
    description:
      "Up to 100% tuition support for outstanding candidates and those from underrepresented backgrounds.",
    deadline: "Applications due by September 25th",
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
                color: "#a5d2b0",
              }}
            >
              Scholarship
            </span>{" "}
            & Fees
          </h2>
        </div>

        {/* Two Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {/* Card 1: Admission Process */}
          <div className="lg:p-8">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className=" pl-4">
                  <h4 className="font-bold text-xl text-[#568c65] mb-1">
                    <span
                      className="italic p-2"
                      style={{
                        fontFamily: '"Chronicle Display Black", serif',
                        color: "#a5d2b0",
                      }}
                    >
                      {step.step}
                    </span>
                  </h4>
                  <div className=" text-white rounded-lg p-2 text-2xl">
                    <h2 className="font-light mb-2">{step.title}</h2>
                    {/* <p className="text-sm">{step.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Merged Scholarship Program & Program Fees */}
          <div className=" rounded-2xl p-6">
            {/* Scholarship Card */}
            <div className="mb-2">
              <div className="bg-white text-black rounded-2xl pt-4 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {scholarshipInfo.title}
                </h3>
                <p className=" text-lg px-3 mb-4">
                  {scholarshipInfo.description}
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-medium">
                    {scholarshipInfo.deadline}
                  </p>
                </div>
                <div className="text-2xl text-gray-900 pb-4 mb-4">
                  <span className="font-bold">INR 14,999</span> (All inclusive)
                </div>
              </div>
            </div>

            {/* Program Fee Card */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionScholarshipFees;
