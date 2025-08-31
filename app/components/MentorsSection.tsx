'use client';
import React, { useRef, useEffect } from 'react';

export default function MentorsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const mentors = [
    {
      name: "Adam Ergin",
      title: "Head of Risk, Quant & Governance",
      company: "7FiftyTwo",
      description: "Former recruiter for global banks and investment firms with deep expertise in risk management and quantitative analysis."
    },
    {
      name: "Rakesh Kripalani",
      title: "Director, Banking & Credit",
      company: "Barclays India",
      description: "Deep insight into lending, credit decision-making, and regulatory compliance across emerging markets."
    },
    {
      name: "Satya Bansal",
      title: "Founder & CEO",
      company: "Blue Ashva Capital",
      description: "Former CEO of Barclays Private Bank (India) with extensive experience in wealth management and private banking."
    },
    {
      name: "Sandeep Das",
      title: "MD & CEO",
      company: "Centrum Wealth",
      description: "Ex-Barclays, ANZ, Standard Chartered executive with global banking and wealth management experience."
    },
    {
      name: "Lisa Francis",
      title: "Managing Director",
      company: "Lloyds Bank UK",
      description: "Former CEO, Barclays Private Bank with expertise in international banking and client relationship management."
    }
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="bg-[#083254] px-8 py-4 inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Meet Your Mentors
            </h2>
          </div>
        </div>

        {/* Auto-scrolling Mentor Cards */}
        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
          >
            {mentors.concat(mentors).map((mentor, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <div className="rounded-xl pt-12 border border-gray-300 shadow-md h-[480px] bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#202020_100%)] flex flex-col">
                  {/* Profile Image with Radial Gradient */}
                  <div className="flex justify-center">
                    <div className="w-full  rounded-t-xl relative overflow-hidden">
                      <img 
                        src="assets/manish.png" 
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Mentor Info */}
                  <div className="flex flex-col justify-between h-full p-4 bg-[#202020] bg-opacity-60 rounded-b-xl">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {mentor.name}
                    </h3>
                    <p className="text-white font-semibold text-sm mb-3">
                      {mentor.title}
                    </p>
                  </div>
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
