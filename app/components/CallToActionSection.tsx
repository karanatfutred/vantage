const CallToActionSection = () => {
  return (
    <section className="bg-white py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-section-heading">
            Ready to Transform Your{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Finance Career?
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join India's most selective program in modern finance and learn from the leaders who shaped trillion-dollar industries.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-black text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors font-section-heading shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
