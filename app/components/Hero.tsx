export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 text-gray-900">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              The Finance School
            </h1>

            {/* Program Offerings */}
            <div className="text-lg md:text-xl text-blue-600 mb-12 font-medium">
              <span className="inline-block">Investment Banking</span>
              <span className="mx-4 text-gray-400">|</span>
              <span className="inline-block">
                Private Equity & Venture Capital
              </span>
              <span className="mx-4 text-gray-400">|</span>
              <span className="inline-block">Capital Markets</span>
              <span className="mx-4 text-gray-400">|</span>
              <span className="inline-block">
                Wealth, Asset & Risk Management
              </span>
              <span className="mx-4 text-gray-400">|</span>
              <span className="inline-block">Fintech & Digital Finance</span>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200 text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-video bg-white rounded-lg border-2 border-gray-200 overflow-hidden shadow-lg">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">Video Content</p>
                  <p className="text-blue-600 text-xs">Coming Soon</p>
                </div>
              </div>

              {/* Optional: Add a subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background accent - moved to bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
    </section>
  );
}
