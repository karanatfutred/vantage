"use client";

export default function ProjectsSection() {
  const projectCards = [
    {
      title: "BRIEF",
      description:
        "Engage with a live challenge sourced directly from a leading company or institution.",
    },
    {
      title: "CONCEPT",
      description:
        "Apply classroom learning to research, ideate, and shape innovative approaches",
    },
    {
      title: "BUILD",
      description:
        "Translate ideas into action, testing, refining, and executing solutions with expert mentorship",
    },
    {
      title: "DELIVERY",
      description:
        "Present actionable outcomes to company leaders, with the potential for real adoption.",
    },
  ];

  return (
    <section className="pt-10 pb-5 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black font-section-heading mb-6">
            <span className="line-through">Projects</span>
            <span
              className="italic ml-2"
              style={{
                fontFamily: '"Chronicle Display Semibold", serif',
                color: "#568c65",
              }}
            >
              Real Mandates
            </span>
            <span className="ml-4">at Vantage</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            From idea to execution, students transform challenges into solutions
            adopted by the world's top organizations
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {projectCards.map((card, index) => (
            <div key={index} className="relative">
              <div className="p-6 text-black">
                <h3 className="text-lg font-semibold mb-4 text-black font-section-heading">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-black">
                  {card.description}
                </p>
              </div>
              {/* Right border line */}
              {index < projectCards.length - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300 opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
