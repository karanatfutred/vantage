"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CertificateSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of certificate images
  const certificateImages = [
    "/assets/certificate.png",
    "/assets/classroom.jpg",
    "/assets/hero-image-1.jpg",
    "/assets/hero-image-2.jpg",
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === certificateImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [certificateImages.length]);

  return (
    <section className="bg-black">
      <div className="px-4 py-[40px] lg:pb-[60px] mx-auto max-w-[1272px] ">
        <div className="rounded-3xl shadow-lg py-[24px] pl-[40px] pr-[-30] grid lg:grid-cols-[32.188rem_1fr] lg:gap-x-[7.375rem] gap-y-6  bg-gray-100">
          {/* Content Section */}
          <div className="flex flex-col justify-between lg:justify-start items-center text-center lg:text-left lg:items-start ">
            <div className="text-[1.625rem] leading-[120%] md:text-2xl font-bold text-black font-section-heading">
              <p className="text-5xl ">
                Stand out with the{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: '"Chronicle Display Black", serif',
                    color: "#568c65",
                  }}
                >
                  Augment
                </span>{" "}
                LinkedIn Certificate
              </p>
            </div>
            <div className="text-lg text-black mt-2.5 lg:mt-5">
              <p>
                Earn a certificate upon completion and display your business
                credentials on your resume and LinkedIn.
              </p>
            </div>
            <div className="mt-4 lg:mt-[30px] text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#A5D2B0] text-black px-8 py-3 rounded-lg font-medium transition-colors hover:bg-[#93c4a0] min-w-[195px] lg:min-w-[260px] justify-center"
              >
                Enroll Now
                <div className="fill-current">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                  >
                    <path
                      d="m8.225 3.168 4.165 4.165H1.333v1.333H12.39l-4.165 4.166.943.942L14.943 8 9.168 2.225l-.943.943Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Carousel Image Section */}
          <div className=" overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {certificateImages.map((imageSrc, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <Image
                    alt={`LinkedIn Certificate Preview ${index + 1}`}
                    src={imageSrc}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
