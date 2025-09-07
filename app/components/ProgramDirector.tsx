const ProgramDirector = () => {
  return (
    <section className="pt-10 lg:pt-0 bg-black border-b border-gray-600">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-50">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-section-heading">
            Programme{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Director
            </span>
          </h2>
        </div> */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pb-4">
          {/* Center image */}
          <div className="flex-shrink-0 mx-4">
            <img
              src="assets/syed-full.jpeg"
              alt="Programme Director"
              className="w-200 object-cover rounded-lg shadow-2xl"
            />
          </div>
          {/* Right column text */}
          <div className="lg:w-200  bg-white flex-1 lg:text-2xl text-sm text-black leading-relaxed text-justify rounded-lg p-6 lg:ml-[-150px] lg:mt-[250] mt-[-50]">
            <h2 className="mb-6 text-mg lg:text-4xl">
              Syed Raza Former C-level Managing Director, Barclays | Co-founder
              & Lead Instructor, Vantage
            </h2>
            <p className="">
              Syed Raza commanded a $1 trillion balance sheet at Barclays and
              earned recognition among the Financial Times Top 100 Banking
              Executives. He architected the Early Career Programme that became
              the industry blueprint for elite talent development. Now at
              Vantage, he channels this institutional expertise to cultivate
              students early on into the next generation of global finance
              leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDirector;
