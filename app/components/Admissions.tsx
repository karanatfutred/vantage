"use client";

import Image from "next/image";

export default function Admissions() {
  return (
    <section className="pt-10 pb-5 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-section-heading">
            Admissions{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Open
            </span>
          </h2>
        </div>

        {/* Program Cards - Side by Side */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* First Card - Global Banking & Finance Fellowship */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full lg:w-[500px] p-4 lg:p-5">
            <div className="flex gap-6">
              {/* Image on Left */}
              <div className="w-2/5 bg-white flex-shrink-0 relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/global-banking-finance-fellowship.jpg"
                  alt="Global Banking & Finance Fellowship"
                  quality={100}
                  className="absolute inset-0 w-full h-full object-cover"
                  fill
                />
              </div>
              {/* Content on Right */}
              <div className="w-3/5">
                {/* Program Details - Badges at Top */}
                <div className="flex flex-nowrap gap-1 mb-1">
                  <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-black text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                    Format - Online Live
                  </span>
                  <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-black text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                    Duration - 2 Weeks
                  </span>
                </div>

                {/* Course Content Group */}
                <div className="mt-2">
                  {/* Program Title */}
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight font-section-heading">
                    Global Banking & Finance Fellowship
                  </h3>

                  {/* Program Description */}
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    Delivered by distinguished CEOs, MDs, and senior executives
                    from
                  </p>
                </div>

                {/* Starts On Badge and Learn More Button - Redesigned */}
                <div className="flex items-center relative mt-6 -mr-10">
                  {/* Green Announcement Section */}
                  <div className="bg-green-100 text-green-800 px-4 py-1 rounded-none flex-1 border border-green-200">
                    <span className="text-[13px] font-medium whitespace-nowrap">
                      Starts On - 06th Oct 2025*
                    </span>
                  </div>

                  {/* Dark Learn More Button with Overlap */}
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

          {/* Second Card - PGP Strategic Finance & Analytics */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full lg:w-[500px] p-4 lg:p-5">
            <div className="flex gap-5">
              {/* Image on Left */}
              <div className="w-2/5 bg-white flex-shrink-0 relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/pgp-strategic-finance- analytics.jpg"
                  alt="PGP Strategic Finance & Analytics"
                  quality={100}
                  className="absolute inset-0 w-full h-full object-cover"
                  fill
                />
              </div>
              {/* Content on Right */}
              <div className="w-3/5">
                {/* Program Details - Badges at Top */}
                <div className="flex flex-nowrap gap-1 mb-1">
                  <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-black text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                    Format - Online Live
                  </span>
                  <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-black text-xs font-normal rounded-sm whitespace-nowrap leading-none">
                    Duration - 3 Weeks
                  </span>
                </div>

                {/* Course Content Group */}
                <div className="mt-2">
                  {/* Program Title */}
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight font-section-heading">
                    PGP Strategic Finance & Analytics
                  </h3>

                  {/* Program Description */}
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    Advanced program in strategic finance, analytics, and
                    leadership
                  </p>
                </div>

                {/* Starts On Badge and Learn More Button - Redesigned */}
                <div className="flex items-center relative mt-6 -mr-10">
                  {/* Green Announcement Section */}
                  <div className="bg-green-100 text-green-800 px-4 py-1 rounded-none flex-1 border border-green-200">
                    <span className="text-[13px] font-medium whitespace-nowrap">
                      Starts On - 06th Oct 2025*
                    </span>
                  </div>

                  {/* Dark Learn More Button with Overlap */}
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
        </div>
      </div>
    </section>
  );
}
