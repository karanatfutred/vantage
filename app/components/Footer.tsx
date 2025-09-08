"use client";

import React from "react";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Home */}
          <div>
            <h3 className="text-lg font-bold mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#meet-founders"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Team"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#open-admissions"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Upcoming Cohorts"
                >
                  Upcoming Cohorts
                </a>
              </li>
              <li>
                <a
                  href="#learning-beyond-classroom"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Learning"
                >
                  Learning
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Fellowships */}
          <div>
            <h3 className="text-lg font-bold mb-4">Fellowship</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#global-banking-fellowship"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Global Banking & Finance Fellowship"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#pgp-strategic-finance"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Learning"
                >
                  Learning
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>mandip@thevantageinstitute.com</li>

              <li>
                <a
                  href="https://www.linkedin.com/company/vantage-institute-official/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={22} />
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
            © 2025 Vantage. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
