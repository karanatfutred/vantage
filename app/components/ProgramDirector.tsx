const ProgramDirector = () => {
  return (
    <section className="pt-10  bg-black border-b border-gray-600">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-50">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white font-section-heading">
            About the{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Programme Director
            </span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Center image */}
          <div className="flex-shrink-0 mx-4">
            <img
              src="assets/syed.png"
              alt="Programme Director"
              className="w-100 h-100 object-cover rounded-lg shadow-2xl"
            />
          </div>
          {/* Right column text */}
          <div className="flex-1 text-lg sm:text-xl text-white leading-relaxed">
            <p className="mb-6">
              Under his guidance, participants gain direct access to the decision-making
              frameworks used by global financial institutions. The program's curriculum
              reflects real-world scenarios from boardroom negotiations to multi-billion
              dollar transactions.
            </p>
            <p className="mb-6">
              Syed's network of industry leaders serves as guest faculty, ensuring
              participants learn from active practitioners who shape the global financial
              landscape. This unique approach transforms theoretical knowledge into
              actionable expertise that drives career advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDirector;