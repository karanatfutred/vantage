"use client";

import Image from "next/image";
import { useState, useRef } from "react";

// Add Trajan Pro Regular font
const trajanPro = {
  fontFamily: "Trajan Pro Regular, serif",
  src: 'url(/fonts/Trajan Pro Regular.ttf) format("truetype")',
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnGrid, setIsOnGrid] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;

    const rect = gridRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
    setIsOnGrid(true);
  };

  const handleMouseLeave = () => {
    setIsOnGrid(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsOnGrid(true);
  };

  // Calculate transform values based on mouse position - ALL IMAGES MOVE EQUALLY
  const getTransformValue = (index: number) => {
    if (!isOnGrid) return "translateX(0px)";

    const gridWidth = gridRef.current?.offsetWidth || 0;
    const centerX = gridWidth / 2;
    const mouseX = mousePosition.x;

    // Calculate how far from center the mouse is (normalized -1 to 1)
    const normalizedDistance = (mouseX - centerX) / centerX;

    // Base movement amount - all images move equally
    const baseMovement = 200;

    // All images move equally - no different multipliers
    const movement = -normalizedDistance * baseMovement;

    return `translateX(${movement}px)`;
  };

  return (
    <section
      id="hero"
      className="relative min-h-[20vh] flex flex-col items-center justify-center bg-black text-center pt-24 sm:pt-32 overflow-hidden pb-8"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1
          className="font-light w-full text-8xl sm:text-[155px] text-white"
          style={{
            fontFamily: "Sofia Pro, sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: "1.05", // Tighter line spacing
          }}
        >
          The
          <span
            className="italic font-normal text-[#a5d2b1]"
            style={{
              fontFamily: "Instrument Serif, serif",
              letterSpacing: "-0.03em",
            }}
          >
            {" "}
            Finance School
          </span>{" "}
        </h1>

        {/* Description */}
        <p className="text-base mt-3 sm:mt-0 md:text-lg lg:text-[35px] text-white mb-10 font-light max-w-4xl mx-auto">
          Taught by the leaders who shaped trillion-dollar finance
        </p>

        {/* Program Offerings */}
        <div className="mb-8">
          <p
            className="text-center text-base md:text-lg font-light"
            style={{ color: "#ffffff" }}
          >
            <span>Investment Banking </span>
            <span className="text-white" aria-hidden="true">
              |
            </span>
            <span> Private Equity & Venture Capital </span>
            <span className="text-white" aria-hidden="true">
              |
            </span>
            <span> Capital Markets </span>
            <span className="text-white" aria-hidden="true">
              |
            </span>
            <span> Wealth, Asset & Risk Management </span>
            <span className="text-white" aria-hidden="true">
              |
            </span>
            <span> Fintech & Digital Finance</span>
          </p>
        </div>

        {/* Only visible in mobile */}
        <div className="sm:hidden">
          <button className="bg-[#a5d2b1] text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-600 transition-colors duration-200">
            Apply Now
          </button>
        </div>

        {/* Image Grid - 3 Different Sizes with Equal Mouse Tracking */}
        <div
          ref={gridRef}
          className="hidden sm:flex justify-center   pb-10 mt-16 cursor-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <div className="flex gap-6 items-center">
            {/* Pattern: Small | Medium | Small | Large | Small | Medium | Small (7 images, large truly centered) */}

            {/* 1. Small Image */}
            <div
              className="w-56 h-40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ transform: getTransformValue(0) }}
            >
              <Image
                src="/assets/hero-image-1.jpg"
                alt="Finance Program 1"
                width={224}
                height={160}
                className="w-full h-full object-cover transition-transform duration-300"
                priority
                quality={90}
              />
            </div>

            {/* 2. Medium Image */}
            <div
              className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ transform: getTransformValue(1) }}
            >
              <Image
                src="/assets/hero-image-2.jpg"
                alt="Finance Program 2"
                width={256}
                height={256}
                className="w-full h-full object-cover transition-transform duration-300"
                quality={90}
              />
            </div>

            {/* 3. Small Image */}
            <div
              className="w-56 h-40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ transform: getTransformValue(2) }}
            >
              <Image
                src="/assets/hero-image-3.jpg"
                alt="Finance Program 3"
                width={224}
                height={160}
                className="w-full h-full object-cover transition-transform duration-300"
                quality={90}
              />
            </div>

            {/* 4. Large Image (Center) */}
            <div
              className="w-80 h-72 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ transform: getTransformValue(3) }}
            >
              <Image
                src="/assets/hero-image-4.jpg"
                alt="Finance Program 4 - Center"
                width={320}
                height={288}
                className="w-full h-full object-cover transition-transform duration-300"
                quality={90}
              />
            </div>

            {/* 5. Small Image */}
            <div
              className="w-56 h-40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ transform: getTransformValue(4) }}
            >
              <Image
                src="/assets/hero-image-5.jpg"
                alt="Finance Program 5"
                width={224}
                height={160}
                className="w-full h-full object-cover transition-transform duration-300"
                quality={90}
              />
            </div>

            {/* 6. Medium Image */}
            <div
              className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ transform: getTransformValue(5) }}
            >
              <Image
                src="/assets/hero-image-6.jpg"
                alt="Finance Program 6"
                width={256}
                height={256}
                className="w-full h-full object-cover transition-transform duration-300"
                quality={90}
              />
            </div>

            {/* 7. Small Image */}
            <div
              className="w-56 h-40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ transform: getTransformValue(6) }}
            >
              <Image
                src="/assets/hero-image-7.jpg"
                alt="Finance Program 7"
                width={224}
                height={160}
                className="w-full h-full object-cover transition-transform duration-300"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
