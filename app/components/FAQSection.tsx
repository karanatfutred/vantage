"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is The Finance School's approach to learning?",
      answer:
        "We focus on practical, real-world learning through live mandates, industry internships, and hands-on projects. Our curriculum is designed by practitioners who have shaped trillion-dollar finance, ensuring you learn directly from industry leaders.",
    },
    {
      question: "How long are the programs and what is the format?",
      answer:
        "Our programs typically run for 2-4 weeks in an online live format. This intensive approach allows you to gain comprehensive knowledge while maintaining flexibility for your professional commitments.",
    },
    {
      question:
        "What makes The Finance School different from other finance education providers?",
      answer:
        "We offer real mandates from top global institutions, provide up to $200,000 in startup funding for promising ventures, and connect you directly with CEOs, MDs, and senior executives from leading financial institutions. Our learning goes beyond theory to deliver actual outcomes.",
    },
    {
      question: "Are there scholarship opportunities available?",
      answer:
        "Yes! 1 in 5 seats across all programs is offered as a 100% scholarship to exceptional candidates. We offer Academic Merit Scholarships, Need-Based Access Scholarships, Achievement Scholarships, and Women in Leadership scholarships to ensure accessibility.",
    },
    {
      question:
        "What career opportunities can I expect after completing a program?",
      answer:
        "Our programs prepare you for roles in investment banking, private equity, venture capital, wealth management, fintech, and more. We provide industry internships and connect you with our extensive network of practitioners and alumni.",
    },
    {
      question: "Do you offer support for starting my own business?",
      answer:
        "Absolutely! Our 'Launch a Business' program takes you from concept to MVP to revenue. Promising student ventures can receive up to $200,000 in investment with mentorship and infrastructure support.",
    },
    {
      question: "What is the admission process like?",
      answer:
        "We look for exceptional candidates with strong academic records, professional achievements, or demonstrated impact in their field. The process includes an application review and may include an interview to assess fit and potential.",
    },
    {
      question: "Can I interact directly with industry practitioners?",
      answer:
        "Yes! Our programs are led by practitioners who make up 50% of our faculty. You'll learn directly from CEOs, MDs, and senior executives who have shaped the finance industry, providing you with real-world insights and connections.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about The Finance School
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#083254] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
