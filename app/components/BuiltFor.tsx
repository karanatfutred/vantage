"use client";
const BuiltFor = () => {
  return (
    <section className="bg-white border-b border-gray-600">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-50">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-section-heading">
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Built
            </span>{" "}
            For
          </h2>
        </div>

        {/* Three Cards Container */}
        <div className="flex justify-center items-center py-10">
          {/* Mobile: Horizontal Scroll Container with peek */}
          <div className="lg:hidden w-full">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 pl-4 pr-12 pb-4 min-w-max">
                {/* Card 1 - Mobile */}
                <div className="flex-shrink-0 w-72 bg-black rounded-2xl">
                  <div className="w-full h-40 shadow-lg transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-black mb-3 font-section-heading">
                          <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                            Undergraduate and Recent Graduates
                          </span>
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                          Ambitious students looking to understand how global
                          finance operates, gain exposure to industry leaders,
                          and make informed choices about which finance vertical
                          to pursue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Mobile */}
                <div className="flex-shrink-0 w-72 bg-black rounded-2xl">
                  <div className="w-full h-40 shadow-lg transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-3 font-section-heading">
                          <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                            Postgraduate Students
                          </span>
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                          Advanced learners ready to transform academic
                          expertise into real-world perspective through direct
                          engagement with CXOs from leading financial
                          institutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Mobile */}
                <div className="flex-shrink-0 w-72 bg-black rounded-2xl">
                  <div className="w-full h-40 shadow-lg transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-3 font-section-heading">
                          <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                            Young Professionals
                          </span>
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                          Early-career talent eager to move beyond entry-level
                          work, broaden their strategic outlook, and accelerate
                          into high-impact roles by learning directly from
                          industry executives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator dots for mobile */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden lg:flex items-center space-x-8 w-full max-w-7xl">
            {/* Card 1 - Desktop */}
            <div className="flex-1 bg-black rounded-2xl">
              <div className="w-full h-64 shadow-2xl transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-3 font-section-heading">
                      <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                        Undergraduate and Recent Graduates
                      </span>
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-black transition-all duration-300">
                      Ambitious students looking to understand how global
                      finance operates, gain exposure to industry leaders, and
                      make informed choices about which finance vertical to
                      pursue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Desktop */}
            <div className="flex-1 bg-black rounded-2xl">
              <div className="w-full h-64 shadow-2xl transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-3 font-section-heading">
                      <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                        Postgraduate Students
                      </span>
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-black transition-all duration-300">
                      Advanced learners ready to transform academic expertise
                      into real-world perspective through direct engagement with
                      CXOs from leading financial institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Desktop */}
            <div className="flex-1 bg-black rounded-2xl">
              <div className="w-full h-64 shadow-2xl transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-3 font-section-heading">
                      <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                        Young Professionals
                      </span>
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-black transition-all duration-300">
                      Early-career talent eager to move beyond entry-level work,
                      broaden their strategic outlook, and accelerate into
                      high-impact roles by learning directly from industry
                      executives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BuiltFor;
