'use client';
const BuiltFor = () => {
  return (
    <section className="lg:pt-10 bg-white border-b border-gray-600">
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
          {/* Mobile: Horizontal Scroll Container */}
          <div className="lg:hidden w-full">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 px-4 pb-4 min-w-max">
                {/* Card 1 - Mobile */}
                <div className="flex-shrink-0 w-80 bg-black rounded-2xl">
                  <div className="w-full h-40 shadow-lg transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-black mb-3 font-section-heading">
                          <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                            Undergraduates
                          </span>
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                          Master the art of financial decision-making with
                          real-world case studies from global institutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card 2 - Mobile */}
                <div className="flex-shrink-0 w-80 bg-black rounded-2xl">
                  <div className="w-full h-40 shadow-lg transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-3 font-section-heading">
                          <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                            Postgraduates
                          </span>
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                          Develop advanced analytical skills through hands-on
                          experience with complex investment portfolios.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 - Mobile */}
                <div className="flex-shrink-0 w-80 bg-black rounded-2xl">
                  <div className="w-full h-40 shadow-lg transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-3 font-section-heading">
                          <span className="text-black bg-white rounded-sm px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-1000">
                            Young Professionals
                          </span>
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                          Learn sophisticated risk assessment techniques from
                          industry veterans and decision-makers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator dots for mobile */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
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
                        Undergraduates
                      </span>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                      Master the art of financial decision-making with
                      real-world case studies from global institutions.
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
                        Postgraduates
                      </span>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                      Develop advanced analytical skills through hands-on
                      experience with complex investment portfolios.
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
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black transition-all duration-300">
                      Learn sophisticated risk assessment techniques from
                      industry veterans and decision-makers.
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