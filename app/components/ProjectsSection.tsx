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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 line-through">
            Projects
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            <span className="bg-[#083254] text-white px-3 py-1 rounded">
              Real Mandates
            </span>
            <span className="ml-2">at Vantage</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl">
            From idea to execution, students transform challenges into solutions
            adopted by the world's top organizations
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="flex gap-6 w-full">
          {projectCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex-1"
            >
              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#083254] mb-4 uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
