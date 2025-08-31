"use client";

import Image from "next/image";

export default function Admissions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="bg-[#083254] px-8 py-4 inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Admissions Open
            </h2>
          </div>
        </div>

        {/* Program Card - Similar to Image Layout */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Group Photo */}
            <div className="lg:w-1/2 relative">
              <div className="w-full h-64 lg:h-full">
                <Image
                  src="/assets/hero-image-4.jpg"
                  alt="Students in Finance Program"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>

            {/* Right Side - Program Details */}
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
              {/* Program Details - All at Top */}
              <div className="mb-2">
                {/* Badges Row */}
                <div className="flex gap-2 mb-1">
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-lg">
                    Format - Online Live
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-lg">
                    Duration - 2 Weeks
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-lg">
                    Starts On - 06th Oct 2025
                  </span>
                </div>
              </div>

              {/* Program Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Global Banking & Finance Fellowship
              </h3>

              {/* Program Description */}
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Taught by the leaders who shaped trillion-dollar finance.
                Delivered by distinguished CEOs, MDs, and senior executives from
                leading financial institutions.
              </p>

              {/* Company Logos */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/centrum-wealth.jpg"
                    alt="Centrum Wealth"
                    width={50}
                    height={25}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="/assets/lloyds.jpg"
                    alt="Lloyds"
                    width={50}
                    height={25}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="/assets/blue-ashva-capital.png"
                    alt="Blue Ashva Capital"
                    width={50}
                    height={25}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="/assets/barclays.png"
                    alt="Barclays"
                    width={50}
                    height={25}
                    className="h-6 w-auto"
                  />
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex justify-end">
                <div className="w-fit inline-flex items-center gap-2 text-white font-semibold text-base cursor-pointer group hover:scale-105 transition-transform duration-200 bg-black px-5 py-2 rounded-lg">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
