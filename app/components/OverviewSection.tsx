const OverviewSection = () => {
  return (
    <section className="pt-10  bg-black border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-section-heading">
            Step Into the{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Fellowship
            </span>
          </h2>
        </div>

        <p className="text-sm lg:text-lg text-white leading-relaxed text-center mb-12">
          Led by MDs and CEOs from top investment banks, wealth firms, and VC
          funds, this fellowship gives a select cohort a closed-door view of how
          leaders think and strategize in ESG, fintech, credit, private banking,
          and risk, while building the networks and edge to break into the most
          competitive roles in finance
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
