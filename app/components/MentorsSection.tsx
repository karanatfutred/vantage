"use client";
import React, { useRef, useEffect } from "react";

export default function MentorsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const mentors = [
    { image: "assets/mentors/adam.jpeg" },
    { image: "assets/mentors/rakesh.jpeg" },
    { image: "assets/mentors/satya.jpeg" },
    { image: "assets/mentors/sandeep.jpeg" },
    { image: "assets/mentors/lisa.jpeg" },
    { image: "assets/mentors/syed.jpeg" }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = 256; // w-64 = 256px
    const gap = 24; // gap-6 = 24px
    const totalWidth = (cardWidth + gap) * mentors.length;
    let scrollPosition = 0;

    const autoScroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, [mentors.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black font-section-heading">
            Meet Your{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Mentors
            </span>
          </h2>
        </div>

        {/* Auto-scrolling Mentor Cards */}
        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
          >
            {mentors.concat(mentors).map((mentor, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <div className="rounded-4xl border border-gray-300 shadow-md overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={`Mentor ${index}`}
                    className="w-90% h-90% object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}