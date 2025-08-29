"use client";

import Image from "next/image";
import { useRef } from "react";

export default function MentorsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Add CSS to hide scrollbar
  if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = `
      .mentors-scroll::-webkit-scrollbar {
        display: none;
      }
      .mentors-scroll {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
  }

  const mentors = [
    {
      name: "Adam Ergin",
      title: "Head of Risk, Quant & Governance, 7FiftyTwo",
      description: "Former recruiter for global banks and investment firms",
      image: "/assets/adam-ergin.jpg",
    },
    {
      name: "Rakesh Kripalani",
      title: "Director, Banking & Credit, Barclays, India",
      description: "Deep insight into lending, credit decision-making",
      image: "/assets/rakesh-kripalani.png",
    },
    {
      name: "Satya Bansal",
      title: "Founder & CEO, Blue Ashva Capital",
      description: "Former CEO of Barclays Private Bank (India)",
      image: "/assets/satya-bansal.png",
    },
    {
      name: "Sandeep Das",
      title: "MD & CEO, Centrum Wealth",
      description: "Ex-Barclays, ANZ, Standard Chartered",
      image: "/assets/sandeep-das.png",
    },
    {
      name: "Lisa Francis",
      title: "Managing Director, Lloyds Bank, UK",
      description: "Former CEO, Barclays Private Bank",
      image: "/assets/lisa-francis.png",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet your Mentors
          </h2>
        </div>

        {/* Navigation and Mentors Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-[#083254] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-[#083254] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-8 px-16 mentors-scroll"
          >
            {mentors.map((mentor, index) => (
              <div key={index} className="flex-shrink-0 w-68">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Mentor Image */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100">
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Mentor Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {mentor.name}
                    </h3>
                    <p className="text-[#083254] font-semibold text-sm mb-3">
                      {mentor.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {mentor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
