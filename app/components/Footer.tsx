"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About us</h3>
            <ul className="space-y-2">
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

          {/* Column 2: Academics */}
          <div>
            <h3 className="text-lg font-bold mb-4">Academics</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Postgraduate Programme"
                >
                  Postgraduate Programme
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Undergraduate Programme"
                >
                  Undergraduate Programme
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Executive Programme"
                >
                  Executive Programme
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Innovation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Innovation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Student Entrepreneurship"
                >
                  Student Entrepreneurship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Faculty Research"
                >
                  Faculty Research
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Other Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="For Companies"
                >
                  For Companies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Jobs"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Become A Master"
                >
                  Become A Master
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Events"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  tabIndex={0}
                  aria-label="Policies and Resources"
                >
                  Policies and Resources
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
