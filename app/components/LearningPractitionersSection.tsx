"use client";

export default function LearningPractitionersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learning,{" "}
            <span className="text-[#083254]">Led by Practitioners</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Industry Practitioners Card */}
          <div className="group relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-[#083254]">
              {/* Percentage Badge */}
              <div className="absolute -top-4 -right-4 bg-[#083254] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                50%
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#083254]"
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

              {/* Content */}
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Industry Practitioners
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sessions led by global MDs, CEOs, entrepreneurs, and seasoned
                practitioners, combining boardroom vision with the operational
                depth and practical mastery built on years at the frontlines of
                business.
              </p>

              {/* Decorative Elements */}
              <div className="mt-6 flex space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* In-house and Visiting Academics Card */}
          <div className="group relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-[#083254]">
              {/* Percentage Badge */}
              <div className="absolute -top-4 -right-4 bg-[#083254] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                50%
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#083254]"
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

              {/* Content */}
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                In-house and Visiting Academics
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                From top Indian and international business schools, bringing
                world-class academic rigor, research depth, and structured
                learning.
              </p>

              {/* Decorative Elements */}
              <div className="mt-6 flex space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 text-gray-400">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
