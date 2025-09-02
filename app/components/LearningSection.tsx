"use client";

import Image from "next/image";
import { useState } from "react";

export default function LearningSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Live Mandates",
      content:
        "Apply learning to real challenges from top global institutions, designing solutions with the potential for adoption.",
      image: "/assets/live-mandate.jpg",
    },
    {
      id: 1,
      title: "Industry Internships",
      content:
        "Domestic and international internships at leading institutions, consulting firms, and ventures in high-growth roles",
      image: "/assets/industry-internships.jpg",
    },
    {
      id: 2,
      title: "Launch a Business",
      content:
        "From concept to MVP to revenue, students build real businesses and pitch them to investors.",
      image: "/assets/launch-a-business.jpg",
    },
    {
      id: 3,
      title: "Startup Fund",
      content:
        "Promising student ventures receive up to $200,000 in investment, with mentorship and infrastructure support",
      image: "/assets/startup-fund.jpg",
    },
  ];

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

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <section className="pt-10 pb-5 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black font-section-heading mb-6">
            Learning{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Beyond
            </span>{" "}
            the Classroom
          </h2>
        </div>

        {/* Full Width Banner with Tabs */}
        <div className="w-full h-[600px] relative overflow-hidden rounded-lg">
          {/* Background Images with Opacity Transitions */}
          {tabs.map((tab, index) => (
            <div key={tab.id} className="absolute inset-0">
              <Image
                src={tab.image}
                alt={tab.title}
                fill
                className={`object-cover transition-all duration-700 ease-in-out ${
                  activeTab === tab.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
                priority={index === 0}
                sizes="100vw"
                quality={90}
                onError={(e) => {
                  console.error(`Error loading image: ${tab.image}`, e);
                }}
              />
            </div>
          ))}

          {/* Black Gradient Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65 z-10 transition-opacity duration-700" />

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20">
            {/* Tab Content with Smooth Transitions */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                key={activeTab}
                className="text-4xl text-white/90 max-w-4xl leading-relaxed text-center transition-all duration-700 ease-in-out transform"
                style={{
                  animation: "fadeInUp 0.7s ease-out",
                }}
              >
                {tabs[activeTab].content}
              </div>
            </div>

            {/* Tabs */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex gap-2 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-6 py-3 font-semibold transition-all duration-500 ease-in-out text-white border-b-2 ${
                      activeTab === tab.id
                        ? "text-white border-white transform scale-105"
                        : "text-white/60 border-white/30 hover:text-white/80 hover:border-white/50 hover:scale-105"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for smooth animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
