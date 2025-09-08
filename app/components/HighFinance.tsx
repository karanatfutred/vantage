import React from "react";

const HighFinance = () => {
  const highFinanceCards = [
    {
      title: "Step into the most competitive roles in global finance",
      description:
        "Break into investment banking, venture capital, wealth management, and leadership tracks at the world’s top institutions. These are the roles that define careers — fast-tracked, high-responsibility, and designed to put you at the center of global markets.",
    },
    {
      title: "Learn directly from the boardrooms of global finance",
      description:
        "Your classes are led by MDs, CEOs, and senior practitioners who have steered Barclays, Lloyds, Goldman Sachs, and leading VC firms. They don’t just teach you finance — they bring the strategies and decisions that have moved markets.",
    },
    {
      title: "Earn the world’s most recognized finance credentials",
      description:
        "Every course is mapped to certifications like CFA, FRM, and Fintech credentials, ensuring your learning carries global credibility. These aren’t just add-ons — they’re the same benchmarks top recruiters look for when hiring future leaders.",
    },
    {
      title: "Stay ahead of the curve with frontier topics",
      description:
        "Go beyond traditional finance and master areas reshaping the industry: AI in finance, digital assets, ESG investing, and global regulatory shifts. These are the conversations shaping boardrooms today — and the opportunities you’ll be prepared to lead tomorrow.",
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
              India’s{" "}
              <span
                className="italic"
                style={{
                  fontFamily: '"Chronicle Display Black", serif',
                  color: "#568c65",
                }}
              >
                First Finance-Focused
              </span>{" "}
              Institute
            </h2>
          </div>
        </div>
      </div>

      {/* <div
        className="mt-8 w-full border-b border-gray-800 py-7"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {stats.map((s, i) => (
              <div key={i} className="relative isolate flex items-start gap-3">
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
      </div> */}

      <div className="border-b border-gray-600">
        <div className="flex justify-center items-stretch min-h-[400px] overflow-x-auto py-8 pl-4">
          <div className="flex items-stretch space-x-4 w-full max-w-7xl">
            {/* Cards */}
            {highFinanceCards.map((card, index) => (
              <div
                key={index}
                className="flex-1 basis-1/4 min-w-[300px] rounded-lg shadow-2xl border border-gray-700 flex"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-3 font-section-heading">
                      <span
                        className="text-white text-2xl"
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
