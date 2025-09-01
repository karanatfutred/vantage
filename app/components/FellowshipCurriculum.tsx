"use client";
import React, { useState } from "react";

const CurriculumSection = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState<string | null>(null);

  const curriculumData = [
    {
      week: 1,
      title: "Industry Foundations",
      subtitle:
        "Unpacking Modern Banking: Boardroom Perspectives on Credit, Deals, and Risk",
      startDate: "6th Oct",
      endDate: "10th Oct",
      days: [
        {
          day: "Monday",
          date: "6th Oct",
          title: "Banking Unboxed",
          description: "Modern banking models and how banks make money",
          icon: "🏦",
          details:
            "Deep dive into contemporary banking structures, revenue streams, and business model innovations.",
        },
        {
          day: "Tuesday",
          date: "7th Oct",
          title: "Credit In Action",
          description: "Lending and credit decision-making in practice",
          icon: "💳",
          details:
            "Hands-on exploration of credit assessment, risk evaluation, and lending strategies.",
        },
        {
          day: "Wednesday",
          date: "8th Oct",
          title: "Green Capital",
          description: "ESG & Climate-aligned investing",
          icon: "🌱",
          details:
            "Understanding sustainable finance, ESG frameworks, and climate-conscious investment approaches.",
        },
        {
          day: "Thursday",
          date: "9th Oct",
          title: "Advising the Accomplished",
          description: "Private banking and wealth management",
          icon: "💼",
          details:
            "Mastering high-net-worth client management and sophisticated wealth strategies.",
        },
        {
          day: "Friday",
          date: "10th Oct",
          title: "Fire Side Chat",
          description:
            "Listen to the stories of leaders sharing their career journeys in banking & finance",
          icon: "🔥",
          details:
            "Interactive sessions with industry veterans sharing real-world insights and career wisdom.",
        },
      ],
    },
    {
      week: 2,
      title: "Growth Areas & Career Execution",
      subtitle:
        "Finance Rewired: From digital disruption to green investing and private banking mastery",
      startDate: "13th Oct",
      endDate: "17th Oct",
      days: [
        {
          day: "Monday",
          date: "13th Oct",
          title: "Finance Rewired",
          description: "Fintech, AI, and digital banking trends",
          icon: "⚡",
          details:
            "Exploring cutting-edge fintech innovations, AI applications, and the future of digital banking.",
        },
        {
          day: "Tuesday",
          date: "14th Oct",
          title: "Client Management Art",
          description: "Relationship management in finance",
          icon: "🤝",
          details:
            "Advanced techniques for building and maintaining high-value client relationships.",
        },
        {
          day: "Wednesday",
          date: "15th Oct",
          title: "Guardrails Of Finance",
          description: "Risk frameworks and regulatory compliance",
          icon: "🛡️",
          details:
            "Comprehensive overview of financial regulations, compliance frameworks, and risk management.",
        },
        {
          day: "Thursday",
          date: "16th Oct",
          title: "Ready to Launch",
          description: "CV, LinkedIn, and interview masterclass",
          icon: "🚀",
          details:
            "Professional development workshop covering personal branding, networking, and interview preparation.",
        },
        {
          day: "Friday",
          date: "17th Oct",
          title: "Pitch & Propel",
          description:
            "Capstone briefing & career opportunities in high finance",
          icon: "🎯",
          details:
            "Final presentation to finance leadership - your prospective employer of tomorrow. Showcase your learning and secure your next career move.",
        },
      ],
    },
  ];

  const toggleWeek = (weekNum: number) => {
    setExpandedWeek(expandedWeek === weekNum ? null : weekNum);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-section-heading">
            Programme{" "}
            <span className="text-[#083254] relative">
              Curriculum
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#083254]"></div>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Two intensive weeks designed to transform your understanding of
            modern finance, delivered by global CXOs and industry leaders.
          </p>
        </div>

        {/* Curriculum Weeks */}
        <div className="space-y-6">
          {curriculumData.map((week) => (
            <div
              key={week.week}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              {/* Week Header */}
              <div
                className="p-6 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleWeek(week.week)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#083254] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Week {week.week}
                      </span>
                      <span className="text-sm text-gray-500">
                        {week.startDate} - {week.endDate}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-section-heading">
                      {week.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {week.subtitle}
                    </p>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transform transition-transform duration-200 ${
                        expandedWeek === week.week ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-600"
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
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  expandedWeek === week.week
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="border-t border-gray-200 bg-gray-50">
                  {/* Schedule Table */}
                  <div className="p-6 md:p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6 font-section-heading">
                      Weekly Schedule
                    </h4>

                    {/* Desktop Table View */}
                    <div className="hidden md:block">
                      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Day
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Session
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Topic
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {week.days.map((day, index) => (
                              <tr
                                key={`${week.week}-${day.day}`}
                                className="hover:bg-gray-50 transition-colors duration-150"
                                onMouseEnter={() =>
                                  setActiveDay(`${week.week}-${day.day}`)
                                }
                                onMouseLeave={() => setActiveDay(null)}
                              >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {day.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                  {day.day}
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center">
                                    <span className="text-2xl mr-3">
                                      {day.icon}
                                    </span>
                                    <div>
                                      <div className="text-sm font-medium text-gray-900">
                                        {day.title}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        {day.description}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div
                                    className={`text-xs text-gray-500 transition-all duration-200 ${
                                      activeDay === `${week.week}-${day.day}`
                                        ? "opacity-100"
                                        : "opacity-70"
                                    }`}
                                  >
                                    {day.details}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-4">
                      {week.days.map((day, index) => (
                        <div
                          key={`${week.week}-${day.day}`}
                          className="bg-white border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{day.icon}</span>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {day.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {day.day}, {day.date}
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {day.description}
                          </p>
                          <p className="text-xs text-gray-500">{day.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
