import React from "react";

const HighFinance = () => {
  const stats = [
    {
      value: "26.5",
      unit: "LPA",
      label: "Average CTC",
    },
    {
      value: "2.5",
      unit: "x",
      label: "Average CTC Jump",
    },
    {
      value: "16.5",
      unit: "LPA",
      label: "CTC Salary Range",
    },
    {
      value: "100",
      unit: "%",
      label: "Students Placed in Startups",
    },
  ];

  const highFinanceCards = [
    {
      title: "Roles",
      description:
        "Master the art of financial decision-making with real-world case studies from global institutions.",
    },
    {
      title: "Companies",
      description:
        "Master the art of financial decision-making with real-world case studies from global institutions.",
    },
    {
      title: "Batch",
      description:
        "Master the art of financial decision-making with real-world case studies from global institutions.",
    },
    {
      title: "Team",
      description:
        "Master the art of financial decision-making with real-world case studies from global institutions.",
    },
  ];

  return (
    <section
      id="meet-founders"
      className="pt-10 bg-black border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founders Title */}
        <div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-section-heading">
              High{" "}
              <span
                className="italic"
                style={{
                  fontFamily: '"Chronicle Display Black", serif',
                  color: "#568c65",
                }}
              >
                Finance
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div
        className="mt-8 w-full border-b border-gray-800 py-7"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {stats.map((s, i) => (
              <div key={i} className="relative isolate flex items-start gap-3">
                {/* Decorative dotted circle behind the number */}

                <div className="relative">
                  <div className="leading-none text-[64px] font-semibold tracking-tight text-white sm:text-[72px]">
                    <span className="tabular-nums">{s.value}</span>
                    {s.unit ? (
                      <span className="align-top pl-2 text-2xl font-medium text-white sm:text-3xl">
                        {s.unit}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-3 text-lg font-medium text-white">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-gray-600">
        <div className="flex justify-center items-center min-h-[400px] overflow-x-auto">
          <div className="flex items-center space-x-8 w-full max-w-7xl">
            {/* Cards */}

            {highFinanceCards.map((card, index) => (
              <div
                key={index}
                className="flex-1 basis-1/4 min-w-[250px] h-64 rounded-lg shadow-2xl border border-gray-700"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-3 font-section-heading">
                      <span
                        className="text-white text-4xl "
                        style={{
                          fontFamily: '"Chronicle Display Black", serif',
                        }}
                      >
                        {card.title}
                      </span>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighFinance;
