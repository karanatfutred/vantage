"use client";

import React from "react";

export default function ScholarshipsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="bg-[#083254] px-8 py-4 inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Scholarships & Social Responsibility
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-20">
          {/* Top Section - 1 in 5 Statistic in Image Style */}
          <div className="flex justify-start">
            <div className="bg-[#0a2342] px-16 py-12 rounded-lg shadow-2xl max-w-5xl">
              <div className="text-left">
                <div
                  className="text-7xl md:text-8xl font-bold text-white mb-8"
                  style={{ fontFamily: "serif" }}
                >
                  1 in 5
                </div>
                <div
                  className="text-2xl md:text-3xl text-white leading-relaxed"
                  style={{ fontFamily: "serif" }}
                >
                  <div>seats across all programmes is offered as a</div>
                  <div className="mt-3">
                    100% scholarship to exceptional candidates
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Four Scholarship Types in Image Style */}
          <div className="rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {/* Academic Merit Scholarships */}
              <div className="relative">
                <div className="p-6 text-black">
                  <h3 className="text-lg font-semibold mb-4 text-black">
                    Academic Merit Scholarships
                  </h3>
                  <p className="text-base leading-relaxed text-black">
                    Awarded to students with outstanding academic records
                  </p>
                </div>
                {/* Right border line */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300 opacity-50"></div>
              </div>

              {/* Need-Based Access Scholarships */}
              <div className="relative">
                <div className="p-6 text-black">
                  <h3 className="text-lg font-semibold mb-4 text-black">
                    Need-Based Access Scholarships
                  </h3>
                  <p className="text-base leading-relaxed text-black">
                    Need-conscious support ensures that financial constraints
                    don't limit admission
                  </p>
                </div>
                {/* Right border line */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300 opacity-50"></div>
              </div>

              {/* Achievement Scholarships */}
              <div className="relative">
                <div className="p-6 text-black">
                  <h3 className="text-lg font-semibold mb-4 text-black">
                    Achievement Scholarships
                  </h3>
                  <p className="text-base leading-relaxed text-black">
                    Presented to professionals demonstrating exceptional impact
                    in their field
                  </p>
                </div>
                {/* Right border line */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300 opacity-50"></div>
              </div>

              {/* Women in Leadership */}
              <div className="relative">
                <div className="p-6 text-black">
                  <h3 className="text-lg font-semibold mb-4 text-black">
                    Women in Leadership
                  </h3>
                  <p className="text-base leading-relaxed text-black">
                    Targeted scholarships to foster gender diversity and support
                    women poised to lead in business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
