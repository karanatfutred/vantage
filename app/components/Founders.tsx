import Image from "next/image";

export default function Founders() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-0">
          {/* Founder 1 - Syed Raza - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Text Content */}
            <div className="flex items-center justify-center p-8 lg:p-12 bg-gray-50">
              <div className="text-center space-y-6 max-w-md">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#083254] font-montserrat">
                  SYED RAZA
                </h1>
                <p className="text-sm font-semibold text-[#083254] mb-4">
                  Founder & CEO
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Experienced leader from investment banking bringing decades of industry expertise to deliver world-class financial training. Former professional at Barclays and graduate of Saïd Business School, Oxford.
                </p>
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <Image
                    src="/assets/barclays.png"
                    alt="Barclays"
                    width={60}
                    height={30}
                    className="h-6 w-auto opacity-70"
                  />
                  <Image
                    src="/assets/business-school.png"
                    alt="Saïd Business School"
                    width={60}
                    height={30}
                    className="h-6 w-auto opacity-70"
                  />
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative min-h-[400px] bg-gray-200">
              <Image
                src="/assets/syed.png"
                alt="Syed Raza"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Founder 2 - Dr. Manish Malhotra - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Image */}
            <div className="relative min-h-[400px] bg-gray-200 lg:order-first order-last">
              <Image
                src="/assets/manish.png"
                alt="Dr. Manish Malhotra"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex items-center justify-center p-8 lg:p-12 bg-gray-50 lg:order-last order-first">
              <div className="text-center space-y-6 max-w-md">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#083254] font-montserrat">
                  DR. MANISH MALHOTRA
                </h1>
                <p className="text-sm font-semibold text-[#083254] mb-4">
                  Co-Founder & Chief Academic Officer
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Academic excellence meets practical application. Bringing educational expertise from RMIT University and entrepreneurial experience to create comprehensive learning experiences that bridge theory and practice.
                </p>
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <Image
                    src="/assets/rmit-university.svg"
                    alt="RMIT University"
                    width={60}
                    height={30}
                    className="h-6 w-auto opacity-70"
                  />
                  <Image
                    src="/assets/emplyability.png"
                    alt="Employability.life"
                    width={60}
                    height={30}
                    className="h-6 w-auto opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}