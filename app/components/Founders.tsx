import React from "react";

const Founders = () => {
  const testimonials = [
    {
      id: 1,
      image: "/assets/manish.png",
      content:
        "Ex-Chairman, ATMC Group | Ex-Founder & CEO (Employability.life)",
      name: "Dr. Manish Malhotra",
      logo: "/assets/atmc.png",
      logo2: "/assets/employability.png",
      logo3: "/assets/rmit-university.svg",
    },
    {
      id: 2,
      image: "/assets/syed.png",
      content: "Former CEO (Lamaa) | Former MD & CEO, Barclays (UK & Americas)",
      name: "Syed Raza",
      logo: "/assets/lamaa.png",
      logo2: "/assets/barclays.png",
      logo3: "/assets/business-school.png",
    },
  ];

  return (
    <div className="w-full">
      {/* White Header Section */}
      <div className="bg-white h-12 w-full"></div>

      {/* Main Content Section */}
      <div className="bg-white w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Founders Title */}
          <div>
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-black font-section-heading">
                Meet the{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: '"Chronicle Display Black", serif',
                    color: "#568c65",
                  }}
                >
                  Founders
                </span>
              </h2>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="px-4 sm:px-8 py-8 sm:py-12"
              >
                {/* Row Layout Container - Both cards have same layout: image left, text right */}
                <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
                  {/* Image Section - White background */}
                  <div className="flex-shrink-0 ">
                    <img
                      src={testimonial.image}
                      alt="Profile"
                      className="w-32 h-32 sm:w-40 sm:h-40 lg:w-70 lg:h-70 object-contain"
                    />
                  </div>
                  
                  {/* Content Section - Both cards left-aligned */}
                  <div className="flex-1 text-left">
                    {/* Founder Name Button */}
                    <div className="text-black text-sm sm:text-base lg:text-xl  py-2 font-semibold tracking-wide border-none leading-relaxed mb-4">
                      {testimonial.name}
                    </div>
                    
                    {/* Content Text */}
                    <p className="text-black text-sm sm:text-sm leading-relaxed mb-6">
                      {testimonial.content}
                    </p>
                    
                    {/* Company Logos - Both cards left-aligned */}
                    <div className="flex flex-col gap-3 mt-4 items-start">
                      {testimonial.logo && (
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.logo}
                            alt="Company logo"
                            className="h-6 sm:h-8 lg:h-8 w-auto object-contain transition-opacity duration-200"
                          />
                        </div>
                      )}
                      {testimonial.logo2 && (
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.logo2}
                            alt="Company logo"
                            className="h-6 sm:h-8 lg:h-8 w-auto object-contain transition-opacity duration-200"
                          />
                        </div>
                      )}
                      {testimonial.logo3 && (
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.logo3}
                            alt="Company logo"
                            className="h-6 sm:h-8 lg:h-8 w-auto object-contain transition-opacity duration-200"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
