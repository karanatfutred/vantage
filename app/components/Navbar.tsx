"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
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
                className="text-[#083254] px-6 py-3 text-base font-medium transition-all duration-200 hover:text-[#06203f] hover:underline decoration-2 underline-offset-4"
              >
                About Us
              </Link>
              <Link
                href="/fellowships"
                className="text-[#083254] px-6 py-3 text-base font-medium transition-all duration-200 hover:text-[#06203f] hover:underline decoration-2 underline-offset-4"
              >
                Fellowships
              </Link>
              <Link
                href="#"
                className="text-[#083254] px-6 py-3 text-base font-medium transition-all duration-200 hover:text-[#06203f] hover:underline decoration-2 underline-offset-4"
                onClick={(e) => e.preventDefault()}
              >
                PGP ( Coming Soon )
              </Link>
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-yellow-700 transition-colors duration-200">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[#083254] hover:text-[#06203f] p-2">
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
