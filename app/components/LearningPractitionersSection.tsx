"use client";

export default function LearningPractitionersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="bg-[#083254] px-8 py-4 inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Learning, Led by Practitioners
            </h2>
          </div>
        </div>

        {/* Learning Split Visualization */}
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Progress Bar */}
          <div className="mb-12">
            {/* Progress Bar */}
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              {/* Industry Practitioners - Left Half */}
              <div className="absolute left-0 top-0 h-full w-1/2 bg-gray-400 rounded-l-full"></div>

              {/* In-house Academics - Right Half */}
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gray-400 rounded-r-full"></div>

              {/* Center Divider */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white transform -translate-x-1/2"></div>
            </div>

            {/* Labels */}
            <div className="flex justify-between mt-3 text-sm font-medium text-gray-600">
              <span>50% Industry Practitioners</span>
              <span>50% In-house & Visiting Academics</span>
            </div>
          </div>

          {/* Two Column Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Industry Practitioners Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Industry Practitioners
                    </h3>
                    <p className="text-gray-600 text-sm">50% of Learning</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Sessions led by global MDs, CEOs, entrepreneurs, and seasoned
                  practitioners, combining boardroom vision with the operational
                  depth and practical mastery built on years at the frontlines
                  of business.
                </p>
              </div>
            </div>

            {/* In-house and Visiting Academics Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      In-house & Visiting Academics
                    </h3>
                    <p className="text-gray-600 text-sm">50% of Learning</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  From top Indian and international business schools, bringing
                  world-class academic rigor, research depth, and structured
                  learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
