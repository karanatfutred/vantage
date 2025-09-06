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
    <section className="pt-10  bg-white border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-section-heading">
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
          <p className="text-sm md:text-lg text-black max-w-4xl mx-auto leading-relaxed ">
            Key features that make our program exceptional
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 ">
          {highlights.map((highlight, index) => (
            <div key={index} className="relative">
              <div className="p-2 lg:p-6 text-black ">
                <h3 className="text-sm lg:text-lg font-semibold mb-2 lg:mb-4 font-section-heading">
                  {highlight.title}
                </h3>
                <p className="text-xs leading-relaxed ">
                  {highlight.description}
                </p>
              </div>
              {/* Right border line - only for first 3 columns on desktop */}
              {index < 3 && (
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-black opacity-70"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningHighlightsSection;
