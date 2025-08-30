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
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[30vh] flex flex-col items-center justify-center bg-black text-center pt-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full opacity-20 blur-3xl"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main heading */}
        <h1 className="mb-8 leading-tight">
          <div
            className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg hover:drop-shadow-xl transition-all duration-500 hover:scale-105"
            style={{ fontFamily: "Trajan Pro Regular, serif" }}
          >
            The <span className="font-extrabold text-white">Finance</span>{" "}
            <span className="text-white">School</span>
          </div>
        </h1>

        {/* New Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-3 font-light max-w-4xl mx-auto">
          Taught by the leaders who shaped trillion-dollar finance
        </p>

        {/* Program Offerings - Single Text */}
        <div className="mb-16">
          <p
            className="text-center text-base md:text-lg font-light"
            style={{ color: "#5A8DEE" }}
          >
            Investment Banking | Private Equity & Venture Capital | Capital
            Markets | Wealth, Asset & Risk Management | Fintech & Digital
            Finance
          </p>
        </div>

        {/* CTA Button */}
        {/* <div className="mt-8 mb-5">
          <a
            href="#programs"
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg cursor-pointer border border-white/30 overflow-hidden hover:bg-gray-50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
        </div> */}

        {/* Image Grid - 3 Different Sizes */}
        <div className="flex justify-center pb-10 mt-24">
          <div className="flex gap-6 items-center">
            {/* Pattern: Small | Medium | Small | Large | Small | Medium | Small (7 images, large truly centered) */}

            {/* 1. Small Image */}
            <div className="w-56 h-40 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group">
              <img
                src="/assets/hero-image-1.jpg"
                alt="Finance Program 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 2. Medium Image */}
            <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group">
              <img
                src="/assets/hero-image-2.jpg"
                alt="Finance Program 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 3. Small Image */}
            <div className="w-56 h-40 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group">
              <img
                src="/assets/hero-image-3.jpg"
                alt="Finance Program 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 4. Large Image (Center) */}
            <div className="w-80 h-72 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group">
              <img
                src="/assets/hero-image-4.jpg"
                alt="Finance Program 4 - Center"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 5. Small Image */}
            <div className="w-56 h-40 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group">
              <img
                src="/assets/hero-image-5.jpg"
                alt="Finance Program 5"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 6. Medium Image */}
            <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group">
              <img
                src="/assets/hero-image-6.jpg"
                alt="Finance Program 6"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 7. Small Image */}
            <div className="w-56 h-40 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group">
              <img
                src="/assets/hero-image-7.jpg"
                alt="Finance Program 7"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
