const OverviewSection = () => {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-black font-section-heading">
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

        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
          Designed and delivered by global finance CXOs, The Global Fellowship
          In High Finance is India's most selective program in modern finance.
          Over two weeks, you move beyond theory into the boardrooms of CXOs,
          learning how fintech, venture capital, wealth & private banking,
          credit, and risk operate at the highest level.
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;
