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
                  aria-label="About Us"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Homepage */}
          <div>
            <h3 className="text-lg font-bold mb-4">Homepage</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#meet-founders"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Meet The Founders"
                >
                  Meet The Founders
                </a>
              </li>
              <li>
                <a
                  href="#open-admissions"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Open Admissions"
                >
                  Open Admissions
                </a>
              </li>
              <li>
                <a
                  href="#learning-beyond-classroom"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Learning Beyond The Classroom"
                >
                  Learning Beyond The Classroom
                </a>
              </li>
              <li>
                <a
                  href="#real-mandates"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Real Mandates At Vantage"
                >
                  Real Mandates At Vantage
                </a>
              </li>
              <li>
                <a
                  href="#learning-practitioners"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Learning, Led by Practitioners"
                >
                  Learning, Led by Practitioners
                </a>
              </li>
              <li>
                <a
                  href="#whats-at-stake"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="What's at Stake?"
                >
                  What's at Stake?
                </a>
              </li>
              <li>
                <a
                  href="#meet-mentors"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Meet Your Mentors"
                >
                  Meet Your Mentors
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Fellowships */}
          <div>
            <h3 className="text-lg font-bold mb-4">Fellowships</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#global-banking-fellowship"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Global Banking & Finance Fellowship"
                >
                  Global Banking & Finance Fellowship
                </a>
              </li>
              <li>
                <a
                  href="#pgp-strategic-finance"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="PGP Strategic Finance & Analytics"
                >
                  PGP Strategic Finance & Analytics
                </a>
              </li>
              <li>
                <a
                  href="#fellowship-curriculum"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Fellowship Curriculum"
                >
                  Fellowship Curriculum
                </a>
              </li>
              <li>
                <a
                  href="#learning-practitioners"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Learning Practitioners"
                >
                  Learning Practitioners
                </a>
              </li>
              <li>
                <a
                  href="#about-fellowship"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="About Fellowship Programme"
                >
                  About Fellowship Programme
                </a>
              </li>
              <li>
                <a
                  href="#chart"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Program Chart"
                >
                  Program Chart
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
