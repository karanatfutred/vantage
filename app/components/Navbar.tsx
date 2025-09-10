"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-primary/30 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/vantage-logo-light.png"
                alt="Vantage Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Navigation Items (Desktop) */}
          <div className="hidden md:block">
            <div
              className="ml-10 flex items-baseline space-x-8"
              style={{
                fontFamily: '"Sofia Pro Light", serif',
              }}
            >
              <Link
                href="/#meet-founders"
                className="text-white px-6 py-2 text-base font-light transition-all duration-200 hover:text-accent hover:underline decoration-2 underline-offset-4"
                // onClick={(e) => e.preventDefault()}
              >
                Team
              </Link>
              <Link
                href="/#learning-practitioners"
                className="text-white px-6 py-2 text-base font-light transition-all duration-200 hover:text-accent hover:underline decoration-2 underline-offset-4"
                // onClick={(e) => e.preventDefault()}
              >
                Learning
              </Link>
              <Link
                href="/fellowships"
                className="text-white px-6 py-2 text-base font-light transition-all duration-200 hover:text-accent hover:underline decoration-2 underline-offset-4"
              >
                B&F Fellowship
              </Link>

              <Link
                href="#"
                className="text-white px-6 py-2 text-base font-light transition-all duration-200 hover:text-accent hover:underline decoration-2 underline-offset-4"
                onClick={(e) => e.preventDefault()}
              >
                PG Programme{" "}
                <span
                  className="text-[#a5d2b1] font-semibold"
                  style={{
                    fontFamily: '"Chronicle Display Black", serif',
                    fontStyle: "italic",
                    fontSize: "14px",
                  }}
                >
                  (Coming Soon)
                </span>
              </Link>
            </div>
          </div>

          {/* Apply Now Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-[#a5d2b1] text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-600 transition-colors duration-200">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-accent p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="h-80 fixed inset-0 z-50 bg-black flex flex-col items-center justify-start pt-5 md:hidden transition-all">
          <div className="w-full flex justify-between items-center border-b border-primary/30 z-50 shadow-lg pb-4 px-[24px]">
            <button className="bg-[#a5d2b1] text-black px-4 py-1 rounded-sm text-sm font-semibold hover:bg-yellow-600 transition-colors duration-200">
              Apply Now
            </button>

            <button
              className=" text-white hover:text-accent"
              onClick={() => setMobileOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <Link
            href="/#meet-founders"
            className="text-white text-lg font-light hover:text-accent py-2"
            onClick={() => setMobileOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/#learning-practitioners"
            className="text-white text-lg font-light hover:text-accent py-2"
            onClick={() => setMobileOpen(false)}
          >
            Learning
          </Link>

          <Link
            href="/fellowships"
            className="text-white text-lg font-light hover:text-accent py-2"
            onClick={() => setMobileOpen(false)}
          >
            B&F Fellowship
          </Link>

          <Link href="#" className="text-white text-lg font-light py-2">
            PG Programme{" "}
            <p
              className="text-[#a5d2b1] font-semibold"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                fontStyle: "italic",
                fontSize: "14px",
              }}
            >
              (Coming Soon)
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
}
