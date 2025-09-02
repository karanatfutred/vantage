"use client";

import Image from "next/image";
import { useState, useRef } from "react";

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
    <section className="relative min-h-[30vh] flex flex-col items-center justify-center bg-black text-center pt-24 overflow-hidden pb-8">
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
            className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg hover:drop-shadow-xl transition-all duration-500 hover:scale-105 font-chronicle"
            style={{
              fontFamily:
                '"Chronicle Display Semibold", "Times New Roman", serif',
            }}
          >
            The <span className="font-extrabold text-white">Finance</span>{" "}
            <span className="text-white">School</span>
          </div>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-3 font-light max-w-4xl mx-auto">
          Taught by the leaders who shaped trillion-dollar finance
        </p>

        {/* Program Offerings */}
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

        {/* Image Grid - 3 Different Sizes with Equal Mouse Tracking */}
        <div
          ref={gridRef}
          className="flex justify-center pb-10 mt-24 cursor-none"
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
