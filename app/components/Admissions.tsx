"use client";

import Image from "next/image";

// Add Sofia Pro Light font
const sofiaProLight = {
  fontFamily: "Sofia Pro Light, sans-serif",
  src: 'url(/fonts/Sofia Pro Light Az.otf) format("opentype")',
};

export default function Admissions() {
  return (
    <section
      id="open-admissions"
      className="pt-10 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-section-heading">
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Open
            </span>{" "}
            Admissions
          </h2>
        </div>

        {/* Program Cards - Side by Side */}
        <div
          className="mt-8"
          style={{
            backgroundColor: "#000000",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            padding: "2rem 0",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top White Section with Course Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1 sm:p-2 lg:p-4">
              <div className="flex">
                {/* Global Banking & Finance Fellowship */}
                {/* <div> */}
                <div className="h-48 flex flex-col flex-1 sm:flex-row gap-4 sm:gap-6">
                  {/* Image */}
                  <div className="w-full sm:w-1/3 bg-white flex-shrink-0 relative overflow-hidden rounded-lg">
                    <Image
                      src="/assets/global-banking-finance-fellowship.jpg"
                      alt="Global Banking & Finance Fellowship"
                      quality={100}
                      className="absolute inset-0 w-full h-full object-cover"
                      fill
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Global Banking & Finance Fellowship
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className="inline-flex items-center px-2 py-1 text-gray-600 text-xs font-normal rounded-full whitespace-nowrap leading-none border border-gray-600"
                        style={{
                          fontFamily: "Sofia Pro Light, sans-serif",
                        }}
                      >
                        Online Live
                      </span>
                      <span
                        className="inline-flex items-center px-2 py-1 text-gray-900 text-xs font-normal rounded-full whitespace-nowrap leading-none bg-gray-100"
                        style={{
                          fontFamily: "Sofia Pro Light, sans-serif",
                        }}
                      >
                        2 Weeks
                      </span>
                    </div>

                    <p className="text-[13px] text-gray-600 leading-relaxed">
                      Delivered by MDs and CEOs from Barclays, Lloyds Bank,
                      top-tier venture capital and wealth management firms, and
                      elite investment banking recruiters.
                    </p>

                    {/* Responsive Starts On Section and Learn More Button */}
                    <div className="mt-auto">
                      {/* Mobile: Stacked Layout */}
                      <div className="flex flex-col sm:hidden gap-2">
                        <div className="bg-green-100 text-green-800 px-3 py-2 rounded border border-green-200">
                          <span className="text-xs font-medium">
                            Starts On - 06th Oct 2025
                          </span>
                        </div>
                        <div className="bg-gray-900 text-white px-3 py-2 rounded">
                          <button className="inline-flex items-center gap-2 text-xs font-medium w-full justify-center">
                            <span>LEARN MORE</span>
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Desktop: Side by side with overlap */}
                      <div className="hidden sm:flex items-center">
                        <div className="bg-green-100 text-green-800 px-4 py-1 border border-green-200 flex-1 max-w-xs">
                          <span className="text-xs lg:text-sm font-medium whitespace-nowrap">
                            Starts On - 06th Oct 2025
                          </span>
                        </div>
                        <div className="bg-gray-900 text-white px-3 lg:px-4 py-1 -ml-2 relative z-10">
                          <button className="inline-flex items-center gap-2 text-xs font-medium">
                            <span>LEARN MORE</span>
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}

                <div className="w-[1px] bg-gray-300 mx-5"></div>

                {/* PGP Strategic Finance & Analytics */}
                {/* <div className="lg:border-gray-300"> */}
                <div className="h-48 flex flex-col flex-1 sm:flex-row gap-4 sm:gap-6">
                  {/* Image */}
                  <div className="w-full sm:w-1/3 bg-white flex-shrink-0 relative overflow-hidden rounded-lg">
                    <Image
                      src="/assets/pgp-strategic-finance- analytics.jpg"
                      alt="PGP Strategic Finance & Analytics"
                      quality={100}
                      className="absolute inset-0 w-full h-full object-cover"
                      fill
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      PGP in Banking & Finance Innovation
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className="inline-flex items-center px-2 py-1 text-gray-600 text-xs font-normal rounded-full whitespace-nowrap leading-none border border-gray-600"
                        style={{
                          fontFamily: "Sofia Pro Light, sans-serif",
                        }}
                      >
                        On Campus
                      </span>
                      <span
                        className="inline-flex items-center px-2 py-1 text-gray-900 text-xs font-normal rounded-full whitespace-nowrap leading-none bg-gray-100"
                        style={{
                          fontFamily: "Sofia Pro Light, sans-serif",
                        }}
                      >
                        15 Months
                      </span>
                    </div>

                    <p className="text-[13px] text-gray-600 mb-4 leading-relaxed">
                      A gateway to global finance’s upper echelons, the
                      programme equips students with the mastery, credentials, &
                      networks to lead in banking, markets, and fintech.
                    </p>

                    {/* Responsive Starts On Section and Learn More Button */}
                    <div className="mt-auto">
                      {/* Mobile: Stacked Layout */}
                      <div className="flex flex-col sm:hidden gap-2">
                        <div className="bg-green-100 text-green-800 px-3 py-2 rounded border border-green-200">
                          <span className="text-xs font-medium">
                            Starts On - 15th Nov 2025
                          </span>
                        </div>
                        <div className="bg-gray-900 text-white px-3 py-2 rounded">
                          <button className="inline-flex items-center gap-2 text-xs font-medium w-full justify-center">
                            <span>LEARN MORE</span>
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Desktop: Side by side with overlap */}
                      <div className="hidden sm:flex items-center">
                        <div className="bg-green-100 text-green-800 px-4 py-1 border border-green-200 flex-1 max-w-xs">
                          <span className="text-xs lg:text-sm font-medium whitespace-nowrap">
                            Starts On - 15th Nov 2025
                          </span>
                        </div>
                        <div className="bg-gray-900 text-white px-3 lg:px-4 py-1 -ml-2 relative z-10">
                          <button className="inline-flex items-center gap-2 text-xs font-medium">
                            <span>LEARN MORE</span>
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
