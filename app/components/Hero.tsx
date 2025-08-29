"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textSets = [
    "Investment Banking | Private Equity & Venture Capital | Capital Markets",
    "Wealth, Asset & Risk Management | Fintech & Digital Finance",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSets.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 text-gray-900">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-4xl">
            {/* Main heading */}
            <h1 className="mb-8 leading-tight">
              <div className="text-6xl md:text-8xl font-bold text-[#083254] drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500 hover:scale-105">
                The{" "}
                <span className="font-extrabold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Finance
                </span>
              </div>
              <div className="text-6xl md:text-8xl font-bold text-[#083254] drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500 hover:scale-105">
                School
              </div>
            </h1>

            {/* Program Offerings - Animated Text Switcher */}
            <div className="text-base md:text-lg text-gray-600 mb-6 font-medium h-12 overflow-hidden">
              <div className="relative">
                {textSets.map((text, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      currentTextIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {text.split("|").map((item, itemIndex) => (
                      <span key={itemIndex} className="inline-block">
                        {item.trim()}
                        {itemIndex < text.split("|").length - 1 && (
                          <span className="mx-4 text-gray-400"></span>
                        )}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <a
                href="#programs"
                className="inline-block px-8 py-4 bg-[#083254] text-white font-semibold rounded-xl shadow-lg hover:bg-[#06203f] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg cursor-pointer border-0"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-video bg-white rounded-lg border-2 border-gray-200 overflow-hidden shadow-lg">
              {/* Video Player */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              >
                <source src="/assets/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Background accent - moved to bottom */}
      {/* made chnages here to check git push/pull */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
    </section>
  );
}
