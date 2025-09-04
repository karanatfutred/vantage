const BuiltFor = () => {
  return (
    <section className="pt-10 bg-black border-b border-gray-600">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-section-heading">
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
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="flex items-center space-x-8 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="flex-1">
              <div className="w-full h-64 rounded-lg shadow-2xl border border-gray-700 transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
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
            {/* Card 2 */}
            <div className="flex-1">
              <div className="w-full h-64 rounded-lg shadow-2xl border border-gray-600 transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
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
            {/* Card 3 */}
            <div className="flex-1">
              <div className="w-full h-64 rounded-lg shadow-2xl border border-gray-700 transition-all duration-1000 ease-in-out hover:bg-white hover:border-gray-300 group">
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
        <div className="text-center pb-4">
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Each program is designed with direct input from industry leaders,
            ensuring participants gain practical knowledge that drives real
            career advancement in today's competitive financial landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;