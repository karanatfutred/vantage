import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pt-64 px-32 bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Hero Text Section */}
        <div className="relative flex flex-col text-center items-center gap-4 px-8">
          <h1
            className="font-light w-full text-[128px] text-white"
            style={{
              fontFamily: "Sofia Pro, sans-serif",
              letterSpacing: "-0.03em",
              lineHeight: "1.05", // Tighter line spacing
            }}
          >
            Global Banking & Finance
            <span
              className="italic font-normal text-[#a5d2b1]"
              style={{
                fontFamily: "Instrument Serif, serif",
                letterSpacing: "-0.03em",
              }}
            >
              {" "}
              Fellowship
            </span>
          </h1>
          <div className="max-w-6xl mx-auto my-6 text-3xl text-white px-5">
            Fintech | Venture Capital | Wealth & Private Banking | Credit & Risk
          </div>

          {/* CTA Button */}
          <div className="flex flex-row items-center justify-center gap-8 mt-8 pb-10">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-12 py-4 text-xl font-medium text-black bg-[#a5d2b1] rounded-2xl"
              style={{
                fontFamily: "Sofia Pro, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              Apply Now
            </Link>
            <p className="max-w-2xl text-2xl text-white/80 m-0">
              Taught by the leaders who shaped trillion-dollar finance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
