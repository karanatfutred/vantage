"use client";

import Image from "next/image";

export default function LearningSection() {
  const cards = [
    {
      title: "Live Mandates",
      description:
        "Apply learning to real challenges from top global institutions, designing solutions with the potential for adoption.",
      decorationImage: "/assets/live-mandate.jpg",
    },
    {
      title: "Industry Internships",
      description:
        "Domestic and international internships at leading institutions, consulting firms, and ventures in high-growth roles",
      decorationImage: "/assets/industry-internships.jpg",
    },
    {
      title: "Launch a Business",
      description:
        "From concept to MVP to revenue, students build real businesses and pitch them to investors.",
      decorationImage: "/assets/launch-a-business.jpg",
    },
    {
      title: "Startup Fund",
      description:
        "Promising student ventures receive up to $200,000 in investment, with mentorship and infrastructure support",
      decorationImage: "/assets/startup-fund.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learning Beyond the Classroom
          </h2>
          <p className="text-lg text-gray-600">
            Built to deliver real outcomes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex-1"
            >
              {/* Decoration Image - Full Upper Section */}
              <div className="w-full h-48 relative overflow-hidden">
                <Image
                  src={card.decorationImage}
                  alt={card.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
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
