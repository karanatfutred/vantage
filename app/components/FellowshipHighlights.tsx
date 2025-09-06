import React from "react";

const CourseInfoComponent = () => {
  const courseData = {
    startDate: "06th Oct 2025",
    duration: "02 Weeks",
    schedule: "8-10 hrs/week | Daily live sessions + Online Material",
    eligibility:
      "Final-year undergraduates, postgraduates, and early-career professionals",
    price: "INR 14,999",
  };

  const statsData = [
    {
      number: "06th Oct 2025",
      label: "Starts On",
    },
    {
      number: "02 Weeks",
      label: "Duration",
    },
    {
      number: "Final-year students, postgraduates, & young professionals",
      label: "Eligibility",
    },
    {
      number: "14,999",
      label: "Price",
    }
  ];

  return (
    <section className="bg-white">
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 ">
        {/* Statistics Section */}
        <div className="flex flex-row text-left py-8">
          {statsData.map((stat, index) => (
            <div key={index} className="relative px-3 lg:px-10">
              {/* Heading/Label on top */}
              <p
                className="text-gray-600 font-semibold text-sm lg:text-2xl italic"
                style={{
                  fontFamily: "Instrument Serif, serif",
                }}
              >
                {stat.label}
              </p>
              {/* Value below - Added consistent mt-2 for uniform gap */}
              <h2 className="mt-2 lg:mt-4 font-normal text-gray-800 text-xs lg:text-xl ">
                <span>{stat.number}</span>
              </h2>
              {/* Divider line */}
              {index < statsData.length - 1 && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseInfoComponent;