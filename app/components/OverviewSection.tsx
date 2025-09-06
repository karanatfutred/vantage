const OverviewSection = () => {
  return (
    <section className="pt-10  bg-black border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-section-heading">
            About the{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Programme
            </span>
          </h2>
        </div>

        <p className="text-sm lg:text-lg text-white leading-relaxed text-center mb-12">
          Designed and delivered by global finance CXOs, The Global Fellowship
          In High Finance is India's most selective program in modern finance.
          Over two weeks, you move beyond theory into the boardrooms of CXOs,
          learning how fintech, venture capital, wealth & private banking,
          credit, and risk operate at the highest level.
        </p>

        {/* Video Container */}
        <div className="relative w-full max-w-2xl mx-auto mb-4 ">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/fellowship-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
