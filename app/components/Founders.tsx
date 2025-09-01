import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "/assets/manish.png",
      content:
        "Ex-Chairman, ATMC Group | Ex-Founder & CEO (Employability.life)",
      buttonText: "Dr Manish Malhotra (Cofounder)",
      logo: "/assets/atmc.png",
      logo2: "/assets/employability.png",
      logo3: "/assets/rmit-university.svg",
    },
    {
      id: 2,
      image: "/assets/syed.png",
      content: "Former CEO (Lamaa) | Former MD & CEO, Barclays (UK & Americas)",
      buttonText: "Syed Raza (Cofounder)",
      logo: "/assets/barclays.png",
      logo2: "/assets/business-school.png",
      logo3: "/assets/lamaa.png",
    },
  ];

  return (
    <div className="w-full">
      {/* White Header Section */}
      <div className="bg-white h-20 w-full"></div>
      
      {/* Main Content Section */}
      <div className="bg-white w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Founders Title */}
        <div>
          <div className="bg-[#083254] px-8 py-4 inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Meet the Founders
            </h2>
          </div>
        </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white text-center px-4 sm:px-8 py-8 sm:py-12 flex flex-col items-center"
              >
                {/* Circular Profile Image */}
                <div className="mb-8">
                  <img
                    src={testimonial.image}
                    alt="Profile"
                    className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                  />
                </div>

                {/* Founder Name Button */}
                <button className="text-black text-lg sm:text-xl lg:text-2xl px-4 sm:px-8 py-3 font-semibold tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-200 border-none mb-6">
                  {testimonial.buttonText}
                </button>

                {/* Content Text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto px-2">
                  {testimonial.content}
                </p>

                {/* Company Logos - Single Row with Consistent Height */}
                <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-4 w-full">
                  {testimonial.logo && (
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.logo}
                        alt="Company logo"
                        className="h-10 sm:h-12 lg:h-8 w-auto object-contain transition-opacity duration-200"
                      />
                    </div>
                  )}
                  {testimonial.logo2 && (
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.logo2}
                        alt="Company logo"
                        className="h-10 sm:h-12 lg:h-8 w-auto object-contain  transition-opacity duration-200"
                      />
                    </div>
                  )}
                  {testimonial.logo3 && (
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.logo3}
                        alt="Company logo"
                        className="h-10 sm:h-12 lg:h-8 w-auto object-contain  transition-opacity duration-200"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;