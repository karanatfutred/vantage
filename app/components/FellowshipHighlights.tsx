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
      label: "StartsOn",
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
    },
  ];

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Section */}
        <div className="flex flex-col md:flex-row justify-center items-center text-left pt-5 space-y-8">
          {statsData.map((stat, index) => (
            <div key={index} className="relative px-16">
              <p
                className="mt-2 text-gray-600 font-semibold text-2xl italic"
                style={{
                  fontFamily: "Instrument Serif, serif",
                }}
              >
                {stat.label}
              </p>
              <h2 className="mt-4 font-normal text-gray-800 text-xl font-section-heading">
                <span>{stat.number}</span>
              </h2>
              {index < statsData.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseInfoComponent;
