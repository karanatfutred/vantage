import Image from "next/image";

export default function CustomerTestimonials() {
  return (
    <div className="flex flex-col justify-center gap-10 md:gap-20 px-64">
      {/* Header */}
      <div className="mx-auto max-w-2xl flex items-center text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Learning, Led by Practitioners
        </h2>
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
                practical mastery built on years at the frontlines of business.
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
          <div className="flex flex-col justify-between gap-16 xl:max-w-sm bg-[#8ebbfa] rounded-2xl p-8 min-h-80">
            <div>
              <span className="uppercase text-sm font-medium text-white/60">
                .
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-7xl font-bold text-white">50%</h2>
              <h4 className="text-white text-2xl font-light">
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
  );
}
