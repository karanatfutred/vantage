"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-primary/30 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center bg-gray-700">
              <Image
                src="/assets/logo.png"
                alt="Vantage Logo"
                width={180}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/about"
                className="text-white px-6 py-2 text-base font-light transition-all duration-200 hover:text-accent hover:underline decoration-2 underline-offset-4"
              >
                About Us
              </Link>
              <Link
                href="/fellowships"
                className="text-white px-6 py-2 text-base font-light transition-all duration-200 hover:text-accent hover:underline decoration-2 underline-offset-4"
              >
                Fellowships
              </Link>
              <Link
                href="#"
                className="text-white px-6 py-2 text-base font-light transition-all duration-200 hover:text-accent hover:underline decoration-2 underline-offset-4"
                onClick={(e) => e.preventDefault()}
              >
                PGP{" "}
                <span className="text-[#a5d2b1] font-semibold">
                  ( Coming Soon )
                </span>
              </Link>
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="hidden md:block">
            <button className="bg-[#a5d2b1] text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-600 transition-colors duration-200">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-accent p-2">
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
    </nav>
  );
}
