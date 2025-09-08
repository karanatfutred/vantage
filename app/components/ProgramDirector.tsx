const ProgramDirector = () => {
  return (
    <section className="pt-10 lg:pt-10 bg-black border-b border-gray-600">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-50">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pb-4">
          {/* Center image */}
          <div className="flex flex-col mx-4">
            <img
              src="assets/syed-full.jpeg"
              alt="Programme Director"
              className="w-200 object-cover rounded-lg shadow-2xl"
            />
            <div>
              <h2 className="mb-6 w-150 bg-black text-mg lg:text-2xl mt-[-20] p-4 border-2 rounded-2xl">
                Syed Raza Former C-level Managing Director, Barclays |
                Co-founder & Lead Instructor, Vantage
              </h2>
            </div>
          </div>
          {/* Right column text */}
          <div className="lg:w-200  bg-black border-2 flex-1 lg:text-xl text-sm text-white leading-relaxed text-justify rounded-lg p-6 lg:ml-[-150px] lg:mt-[250] mt-[-50]">
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
