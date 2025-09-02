"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About Vantage */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Vantage</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Our Story"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Meet the Founders"
                >
                  Meet the Founders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Careers"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Global Banking & Finance Fellowship"
                >
                  Global Banking & Finance Fellowship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="PGP Strategic Finance & Analytics"
                >
                  PGP Strategic Finance & Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Executive Education"
                >
                  Executive Education
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Learning & Innovation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Learning & Innovation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Real Mandates"
                >
                  Real Mandates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Student Achievements"
                >
                  Student Achievements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Industry Partnerships"
                >
                  Industry Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources & Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Scholarships"
                >
                  Scholarships
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Admissions"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Contact Us"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="text-gray-400 text-sm">
            © 2024 Vantage. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
