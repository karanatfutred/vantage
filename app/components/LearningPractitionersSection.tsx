import Image from "next/image";

export default function CustomerTestimonials() {
  return (
    <section id="learning-practitioners" className="pt-10  bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-section-heading">
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Learning
            </span>
            , Led by Practitioners
          </h2>
          {/* <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Industry experts shaping the future of finance education
          </p> */}
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col gap-6">
          {/* First Row */}
          <div className="flex flex-col xl:flex-row gap-6">
            {/* Customer Story Card with Background Image */}
            <div
              className="p-8 rounded-2xl flex flex-col justify-between relative bg-cover bg-center bg-no-repeat h-80 xl:h-auto xl:flex-1"
              style={{
                backgroundImage: "url('/assets/industryPracticionor.jpg')",
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

              <div className="relative z-10">
                <span className="text-white text-xl font-medium">
                  50% of Learning
                </span>
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                <h4 className="text-white text-xl lg:text-2xl font-light">
                  Sessions led by global MDs, CEOs, and seasoned practitioners,
                  combining boardroom vision with the operational depth and
                  practical mastery built on years at the frontlines of
                  business.
                </h4>
              </div>
            </div>

            {/* Stats Card - Solid Color */}
            <div className="flex flex-col justify-between gap-16 xl:max-w-sm bg-[#dcf5e3] rounded-2xl p-8 min-h-80">
              <div>
                <span className="uppercase text-sm font-medium text-black">
                  .
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-7xl font-bold text-black">50%</h2>
                <h4 className="text-black text-2xl font-light">
                  Industry Practitioners
                </h4>
              </div>
            </div>
          </div>

          {/* Second Row - Reordered: Small card first, then large card */}
          <div className="flex flex-col xl:flex-row gap-6">
            {/* Stats Card - Solid Color */}
            <div className="flex flex-col justify-between gap-16 xl:max-w-sm bg-gray-200 rounded-2xl p-8 min-h-80">
              <div>
                <span className="uppercase text-sm font-medium text-white/60">
                  .
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-7xl font-bold text-black">50%</h2>
                <h4 className="text-black text-2xl font-light">
                  In-house & Visiting Academics
                </h4>
              </div>
            </div>

            {/* Customer Story Card with Background Image */}
            <div
              className="p-8 rounded-2xl flex flex-col justify-between relative bg-cover bg-center bg-no-repeat h-80 xl:h-auto xl:flex-1"
              style={{
                backgroundImage: "url('/assets/classroom.jpg')",
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

              <div className="relative z-10">
                <span className="text-white text-xl font-medium">
                  50% of Learning
                </span>
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                <h4 className="text-white text-xl lg:text-2xl font-light">
                  From top Indian and international business schools, bringing
                  world-class academic rigor, research depth, and structured
                  learning.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
