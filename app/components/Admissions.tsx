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
          {/* <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Your pjourney to financial excellence starts here
          </p> */}
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
            {/* Top White Section with Global Banking & Finance Fellowship Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Column - Course Details */}
                <div>
                  <div className="flex gap-6 h-40">
                    {/* Image on Left */}
                    <div className="w-1/3 h-40 bg-white flex-shrink-0 relative overflow-hidden rounded-lg">
                      <Image
                        src="/assets/global-banking-finance-fellowship.jpg"
                        alt="Global Banking & Finance Fellowship"
                        quality={100}
                        className="absolute inset-0 w-full h-full object-cover"
                        fill
                      />
                    </div>

                    {/* Content on Right */}
                    <div className="flex-1 flex flex-col">
                      {/* Badges */}
                      <div className="flex gap-2 mb-3">
                        <span
                          className="inline-flex items-center px-2 py-1 text-white text-xs font-normal rounded-sm whitespace-nowrap leading-none"
                          style={{
                            fontFamily: "Sofia Pro Light, sans-serif",
                            backgroundColor: "#0A2338",
                          }}
                        >
                          Online Live
                        </span>
                        <span
                          className="inline-flex items-center px-2 py-1 text-gray-800 text-xs font-normal rounded-sm whitespace-nowrap leading-none"
                          style={{
                            fontFamily: "Sofia Pro Light, sans-serif",
                            backgroundColor: "#F5F5F5",
                          }}
                        >
                          2 Weeks
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-gray-900 mb-2">
                        Global Banking & Finance Fellowship
                      </h2>

                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Delivered by distinguished CEOs, MDs, and senior
                        executives from leading financial institutions
                      </p>

                      {/* Starts On Section and Learn More Button */}
                      <div className="flex items-center relative mt-auto -mr-4">
                        <div className="bg-green-100 text-green-800 px-4 py-1 rounded-none w-48 border border-green-200">
                          <span className="text-[13px] font-medium whitespace-nowrap">
                            Starts On - 06th Oct 2025*
                          </span>
                        </div>

                        <div className="bg-gray-900 text-white px-4 py-[1px] rounded-none flex-shrink-0 -ml-2 relative z-10">
                          <button className="inline-flex items-center gap-2 text-[11px] font-medium">
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

                {/* Divider Line with PGP Course */}
                <div className="hidden md:block border-l border-gray-300 pl-3">
                  <div className="flex gap-6 h-40">
                    {/* Image on Left */}
                    <div className="w-1/3 h-40 bg-white flex-shrink-0 relative overflow-hidden rounded-lg">
                      <Image
                        src="/assets/pgp-strategic-finance- analytics.jpg"
                        alt="PGP Strategic Finance & Analytics"
                        quality={100}
                        className="absolute inset-0 w-full h-full object-cover"
                        fill
                      />
                    </div>

                    {/* Content on Right */}
                    <div className="flex-1 flex flex-col">
                      {/* Badges */}
                      <div className="flex gap-2 mb-3">
                        <span
                          className="inline-flex items-center px-2 py-1 text-white text-xs font-normal rounded-sm whitespace-nowrap leading-none"
                          style={{
                            fontFamily: "Sofia Pro Light, sans-serif",
                            backgroundColor: "#0A2338",
                          }}
                        >
                          Online Live
                        </span>
                        <span
                          className="inline-flex items-center px-2 py-1 text-gray-800 text-xs font-normal rounded-sm whitespace-nowrap leading-none"
                          style={{
                            fontFamily: "Sofia Pro Light, sans-serif",
                            backgroundColor: "#F5F5F5",
                          }}
                        >
                          6 Months
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-gray-900 mb-2">
                        PGP Strategic Finance & Analytics
                      </h2>

                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Advanced program in strategic finance, analytics, and
                        leadership for finance professionals
                      </p>

                      {/* Starts On Section and Learn More Button */}
                      <div className="flex items-center relative mt-auto -mr-4">
                        <div className="bg-green-100 text-green-800 px-4 py-1 rounded-none w-48 border border-green-200">
                          <span className="text-[13px] font-medium whitespace-nowrap">
                            Starts On - 15th Nov 2025*
                          </span>
                        </div>

                        <div className="bg-gray-900 text-white px-4 py-[1px] rounded-none flex-shrink-0 -ml-2 relative z-10">
                          <button className="inline-flex items-center gap-2 text-[11px] font-medium">
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
              </div>
            </div>

            {/* Course Cards - Side by Side */}
            {/* <div className="mb-8 flex flex-col md:flex-row gap-6 justify-center">
              {/* Global Banking & Finance Fellowship */}
            {/* <div className="w-full md:w-[280px]">
                <div className="bg-white rounded-sm shadow-lg border border-gray-200 p-3 relative overflow-hidden h-[320px] flex flex-col">
                  {/* Image */}
            {/* <div className="w-full h-32 bg-white flex-shrink-0 relative overflow-hidden rounded-sm mb-3">
                    <Image
                      src="/assets/global-banking-finance-fellowship.jpg"
                      alt="Global Banking & Finance Fellowship"
                      quality={100}
                      className="absolute inset-0 w-full h-full object-cover"
                      fill
                    />
                  </div>

                  {/* Badges */}
            {/* <div className="flex gap-2 mb-2">
                    <span className="inline-flex items-center px-2 py-1 bg-black text-white text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                      Online Live
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-gray-200 text-gray-800 text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                      2 Weeks
                    </span>
                  </div>

                  {/* Course Name */}
            {/* <h3
                    className="font-bold text-gray-800 mb-2 leading-tight font-section-heading"
                    style={{ fontSize: "1rem" }}
                  >
                    Global Banking & Finance Fellowship
                  </h3>

                  {/* Starts On Section */}
            {/* <div className="mb-3 flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#02a14c" }}
                    ></div>
                    <p className="text-sm font-normal text-gray-600">
                      Starts Oct 6, 2025
                    </p>
                  </div>

                  {/* Learn More Button */}
            {/* <div className="flex justify-end mt-auto">
                    <div className="bg-gray-900 text-white px-4 py-[1px] rounded-sm">
                      <button className="inline-flex items-center gap-2 text-[11px] font-medium">
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

              {/* Post Graduate Programme */}
            {/* <div className="w-full md:w-[280px]">
                <div className="bg-white rounded-sm shadow-lg border border-gray-200 p-3 relative overflow-hidden h-[320px] flex flex-col">
                  {/* Image */}
            {/* <div className="w-full h-32 bg-white flex-shrink-0 relative overflow-hidden rounded-sm mb-3">
                    <Image
                      src="/assets/pgp-strategic-finance- analytics.jpg"
                      alt="PGP Strategic Finance & Analytics"
                      quality={100}
                      className="absolute inset-0 w-full h-full object-cover"
                      fill
                    />
                  </div>

                  {/* Badges */}
            {/* <div className="flex gap-2 mb-2">
                    <span className="inline-flex items-center px-2 py-1 bg-black text-white text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                      Online Live
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-gray-200 text-gray-800 text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                      6 Months
                    </span>
                  </div>

                  {/* Course Name */}
            {/* <h3
                    className="font-bold text-gray-800 mb-2 leading-tight font-section-heading"
                    style={{ fontSize: "1rem" }}
                  >
                    PGP Strategic Finance & Analytics
                  </h3>

                  {/* Starts On Section */}
            {/* <div className="mb-3 flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#02a14c" }}
                    ></div>
                    <p className="text-sm font-normal text-gray-600">
                      Starts Nov 15, 2025
                    </p>
                  </div>

                  {/* Learn More Button */}
            {/* <div className="flex justify-end mt-auto">
                    <div className="bg-gray-900 text-white px-4 py-[1px] rounded-sm">
                      <button className="inline-flex items-center gap-2 text-[11px] font-medium">
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
            </div> */}

            {/* <div className="flex flex-col lg:flex-row gap-12">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full lg:w-[500px] p-4 lg:p-5">
                <div className="flex gap-6">
                  <div className="w-2/5 bg-white flex-shrink-0 relative overflow-hidden rounded-lg">
                    <Image
                      src="/assets/global-banking-finance-fellowship.jpg"
                      alt="Global Banking & Finance Fellowship"
                      quality={100}
                      className="absolute inset-0 w-full h-full object-cover"
                      fill
                    />
                  </div>
                  <div className="w-3/5">
                    <div className="flex flex-nowrap gap-1 mb-1">
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-black text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                        Format - Online Live
                      </span>
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-black text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                        Duration - 2 Weeks
                      </span>
                    </div>

                    <div className="mt-2">
                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight font-section-heading">
                        Global Banking & Finance Fellowship
                      </h3>

                      <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                        Delivered by distinguished CEOs, MDs, and senior
                        executives from
                      </p>
                    </div>

                    <div className="flex items-center relative mt-6 -mr-10">
                      <div className="bg-green-100 text-green-800 px-4 py-1 rounded-none flex-1 border border-green-200">
                        <span className="text-[13px] font-medium whitespace-nowrap">
                          Starts On - 06th Oct 2025*
                        </span>
                      </div>

                      <div className="bg-gray-900 text-white px-4 py-[1px] rounded-none flex-shrink-0 -ml-4 relative z-10">
                        <button className="inline-flex items-center gap-2 text-[11px] font-medium">
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

              <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full lg:w-[500px] p-4 lg:p-5">
                <div className="flex gap-5">
                  <div className="w-2/5 bg-white flex-shrink-0 relative overflow-hidden rounded-lg">
                    <Image
                      src="/assets/pgp-strategic-finance- analytics.jpg"
                      alt="PGP Strategic Finance & Analytics"
                      quality={100}
                      className="absolute inset-0 w-full h-full object-cover"
                      fill
                    />
                  </div>
                  <div className="w-3/5">
                    <div className="flex flex-nowrap gap-1 mb-1">
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-black text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                        Format - Online Live
                      </span>
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-black text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                        Duration - 3 Weeks
                      </span>
                    </div>

                    <div className="mt-2">
                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight font-section-heading">
                        PGP Strategic Finance & Analytics
                      </h3>

                      <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                        Advanced program in strategic finance, analytics, and
                        leadership
                      </p>
                    </div>

                    <div className="flex items-center relative mt-6 -mr-10">
                      <div className="bg-green-100 text-green-800 px-4 py-1 rounded-none flex-1 border border-green-200">
                        <span className="text-[13px] font-medium whitespace-nowrap">
                          Starts On - 06th Oct 2025*
                        </span>
                      </div>

                      <div className="bg-gray-900 text-white px-4 py-[1px] rounded-none flex-shrink-0 -ml-4 relative z-10">
                        <button className="inline-flex items-center gap-2 text-[11px] font-medium">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
