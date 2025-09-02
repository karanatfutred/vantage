const LearningHighlightsSection = () => {
  const highlights = [
    {
      title: "Venture Capital & Startups",
      description:
        "Scaling breakthrough companies through proven investment playbooks.",
    },
    {
      title: "Fintech & Innovation",
      description:
        "Unpacking digital banking, payments, and technology-driven disruption in finance.",
    },
    {
      title: "Global Banking & Wealth",
      description:
        "Mastering private banking, lending, markets, and investment banking fundamentals.",
    },
    {
      title: "Career Acceleration",
      description:
        "CV crafting, LinkedIn optimisation, and mock interviews with global recruiters.",
    },
  ];

  return (
    <section className="pt-10 pb-5 bg-black border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white font-section-heading">
            Learning{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Highlights
            </span>
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {highlights.map((highlight, index) => (
            <div key={index} className="relative">
              <div className="p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 text-white font-section-heading">
                  {highlight.title}
                </h3>
                <p className="text-base leading-relaxed text-white">
                  {highlight.description}
                </p>
              </div>
              {/* Right border line - only for first 3 columns on desktop */}
              {index < 3 && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningHighlightsSection;
