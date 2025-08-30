import Image from "next/image";

export default function Founders() {
  return (
    <section className="py-20 bg-white">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16">
            <div className="bg-[#083254] px-8 py-4 inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Founders
              </h2>
            </div>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Founder 1 - Syed Raza */}
            <div className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/syed.png"
                    alt="Syed Raza"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Syed Raza
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>
                  <p className="text-gray-700 mb-4">
                    Former Managing Director at Barclays Investment Bank, with
                    over 20 years of experience in investment banking and
                    capital markets.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/assets/barclays.png"
                      alt="Barclays"
                      width={80}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <Image
                      src="/assets/lamaa.png"
                      alt="Lamaa"
                      width={80}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <Image
                      src="/assets/business-school.png"
                      alt="Saïd Business School"
                      width={80}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2 - Dr. Manish Malhotra */}
            <div className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/manish.png"
                    alt="Dr. Manish Malhotra"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Dr. Manish Malhotra
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Co-Founder & Chief Academic Officer
                  </p>
                  <p className="text-gray-700 mb-4">
                    Former Dean of Business at RMIT University, with expertise
                    in financial education and corporate training programs.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/assets/emplyability.png"
                      alt="Employability.life"
                      width={80}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <Image
                      src="/assets/rmit-university.svg"
                      alt="RMIT University"
                      width={80}
                      height={40}
                      className="h-8 w-auto"
                    />
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
