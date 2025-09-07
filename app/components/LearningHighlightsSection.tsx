'use client';
const LearningHighlightsSection = () => {
  const highlights = [
    {
      title: "Venture Capital & Startups",
      description:
        "Learn how investors back and scale breakthrough companies through proven venture playbooks.",
    },
    {
      title: "Fintech & Innovation",
      description:
        "Explore digital banking, payments, and the technologies transforming global finance.",
    },
    {
      title: "Global Banking & Wealth",
      description:
        "Master private banking, lending, markets, and core investment banking fundamentals.",
    },
    {
      title: "Career Acceleration",
      description:
        "Prepare for competitive finance roles with CV reviews, LinkedIn optimisation, recruiter-led mock interviews, and a strong peer network.",
    },
  ];

  return (
    <section className="pt-10 bg-white border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-2 lg:px-8">
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
          <p className="text-sm md:text-lg text-black max-w-4xl mx-auto leading-relaxed">
            Key features that make our program exceptional
          </p>
        </div>

        {/* Mobile: Horizontal Scrollable Cards */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 px-2 scrollbar-hide">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-gray-50 rounded-lg border border-gray-200 p-2 lg:p-4"
              >
                <h3 className=" text-md lg:text-lg font-semibold mb-3 text-black font-section-heading">
                  {highlight.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout (unchanged) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="relative">
              <div className="p-2 lg:p-6 text-black">
                <h3 className="text-sm lg:text-lg font-semibold mb-2 lg:mb-4 font-section-heading">
                  {highlight.title}
                </h3>
                <p className="text-xs leading-relaxed">
                  {highlight.description}
                </p>
              </div>
              {/* Right border line - only for first 3 columns on desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-black opacity-70"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default LearningHighlightsSection;