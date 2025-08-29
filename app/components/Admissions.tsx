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

        {/* Course Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Left Content */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Global Banking & Finance Fellowship
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Taught by the leaders who shaped trillion-dollar finance
                </p>
              </div>

              {/* Additional Description with Company Logos */}
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  Delivered by distinguished CEOs, MDs, and senior executives
                  from leading financial institutions:
                </p>
                <div className="flex items-center space-x-4 mb-8">
                  <Image
                    src="/assets/centrum-wealth.jpg"
                    alt="Centrum Wealth"
                    width={80}
                    height={40}
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/assets/lloyds.jpg"
                    alt="Lloyds"
                    width={80}
                    height={40}
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/assets/blue-ashva-capital.png"
                    alt="Blue Ashva Capital"
                    width={80}
                    height={40}
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/assets/barclays.png"
                    alt="Barclays"
                    width={80}
                    height={40}
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* Tags and Button Group */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Fintech
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Venture Capital
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Wealth & Private Banking
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Credit & Risk
                  </span>
                </div>
                <a
                  href="#apply"
                  className="inline-block bg-[#083254] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#06203f] transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Sidebar - Course Details */}
            <div className="lg:w-80 bg-gray-50 p-6 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      06th Oct 25
                    </div>
                    <div className="text-sm text-gray-500">Starts On</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      02 Weeks
                    </div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      Online Live
                    </div>
                    <div className="text-sm text-gray-500">Format</div>
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
