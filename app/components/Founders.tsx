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
      <div className="bg-white h-8 w-full"></div>

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

          {/* Duplicate Founders Section */}
          <div className="mt-12 mb-16">
            {/* Testimonials Grid - Duplicate */}
            <div className="flex flex-col gap-8 lg:gap-12">
              {/* Dr. Manish Malhotra Card */}
              {testimonials
                .filter((testimonial) => testimonial.id !== 2)
                .map((testimonial) => (
                  <div
                    key={`duplicate-${testimonial.id}`}
                    className="px-4 sm:px-8 py-2 sm:py-4 flex-1"
                  >
                    {/* Row Layout Container - Content on left, image on right */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                      {/* Content Section - Left side */}
                      <div className="text-left order-1 sm:order-1">
                        {/* Founder Name Button */}
                        <div className="text-black text-xl sm:text-2xl lg:text-3xl  py-2 font-semibold tracking-wide border-none leading-tight">
                          Dr. Manish{" "}
                          <span
                            style={{
                              fontFamily: '"Chronicle Display Black", serif',
                              color: "#568C65",
                              fontStyle: "italic",
                            }}
                          >
                            Malhotra
                          </span>
                        </div>

                        {/* Content Text */}
                        <p className="text-gray-600 text-xs sm:text-xs leading-relaxed mb-4">
                          {testimonial.content}
                        </p>

                        {/* Additional Description */}
                        <p
                          className="text-xs sm:text-sm leading-normal mb-6 max-w-sm tracking-wide italic"
                          style={{
                            fontFamily: '"Sofia Pro Bold Az", sans-serif',
                            color: "#1a1a1a",
                          }}
                        >
                          Reimagining education for an{" "}
                          <span
                            style={{
                              fontFamily: '"Sofia Pro Bold Az", sans-serif',
                              color: "#568C65",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            AI-Powered
                          </span>
                          , skills-first world.
                        </p>

                        {/* Company Logos - Below description */}
                        <div className="flex flex-row gap-3 items-start">
                          {testimonial.logo && (
                            <div className="flex-shrink-0">
                              <img
                                src={testimonial.logo}
                                alt="Company logo"
                                className="h-4 sm:h-5 lg:h-6 w-auto object-contain transition-opacity duration-200"
                                style={{ imageRendering: "crisp-edges" }}
                              />
                            </div>
                          )}
                          {testimonial.logo2 && (
                            <div className="flex-shrink-0">
                              <img
                                src={testimonial.logo2}
                                alt="Company logo"
                                className="h-4 sm:h-5 lg:h-6 w-auto object-contain transition-opacity duration-200"
                                style={{ imageRendering: "crisp-edges" }}
                              />
                            </div>
                          )}
                          {testimonial.logo3 && (
                            <div className="flex-shrink-0">
                              <img
                                src={testimonial.logo3}
                                alt="Company logo"
                                className="h-4 sm:h-5 lg:h-6 w-auto object-contain transition-opacity duration-200"
                                style={{ imageRendering: "crisp-edges" }}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Section - Image only */}
                      <div className="flex flex-col items-center gap-6 order-2 sm:order-2">
                        {/* Image Section */}
                        <div className="flex-shrink-0 ">
                          <img
                            src={testimonial.image}
                            alt="Profile"
                            className="w-40 h-40 sm:w-46 sm:h-46 lg:w-52 lg:h-52 object-contain"
                            style={{
                              filter: "drop-shadow(10px 5px 0px #568C65)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Syed Raza Card */}
              {testimonials
                .filter((testimonial) => testimonial.id === 2)
                .map((testimonial) => (
                  <div
                    key={`syed-${testimonial.id}`}
                    className="px-4 sm:px-8 py-2 sm:py-4 flex-1 ml-auto"
                  >
                    {/* Row Layout Container - Content on left, image on right */}
                    <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-12">
                      {/* Content Section - Left side */}
                      <div className="text-left order-1 sm:order-1">
                        {/* Founder Name Button */}
                        <div className="text-black text-xl sm:text-2xl lg:text-3xl  py-2 font-semibold tracking-wide border-none leading-tight">
                          Syed{" "}
                          <span
                            style={{
                              fontFamily: '"Chronicle Display Black", serif',
                              color: "#568C65",
                              fontStyle: "italic",
                            }}
                          >
                            Raza
                          </span>
                        </div>

                        {/* Content Text */}
                        <p className="text-gray-600 text-xs sm:text-xs leading-relaxed mb-4">
                          {testimonial.content}
                        </p>

                        {/* Additional Description */}
                        <p
                          className="text-xs sm:text-sm leading-normal mb-6 max-w-sm tracking-wide italic"
                          style={{
                            fontFamily: '"Sofia Pro Bold Az", sans-serif',
                            color: "#1a1a1a",
                          }}
                        >
                          Transforming financial services with innovation and{" "}
                          <span
                            style={{
                              fontFamily: '"Sofia Pro Bold Az", sans-serif',
                              color: "#568C65",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            AI-Powered
                          </span>{" "}
                          leadership.
                        </p>

                        {/* Company Logos - Below description */}
                        <div className="flex flex-row gap-3 items-start">
                          {testimonial.logo && (
                            <div className="flex-shrink-0">
                              <img
                                src={testimonial.logo}
                                alt="Company logo"
                                className="h-4 sm:h-5 lg:h-6 w-auto object-contain transition-opacity duration-200"
                                style={{ imageRendering: "crisp-edges" }}
                              />
                            </div>
                          )}
                          {testimonial.logo2 && (
                            <div className="flex-shrink-0">
                              <img
                                src={testimonial.logo2}
                                alt="Company logo"
                                className="h-4 sm:h-5 lg:h-6 w-auto object-contain transition-opacity duration-200"
                                style={{ imageRendering: "crisp-edges" }}
                              />
                            </div>
                          )}
                          {testimonial.logo3 && (
                            <div className="flex-shrink-0">
                              <img
                                src={testimonial.logo3}
                                alt="Company logo"
                                className="h-4 sm:h-5 lg:h-6 w-auto object-contain transition-opacity duration-200"
                                style={{ imageRendering: "crisp-edges" }}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Section - Image only */}
                      <div className="flex flex-col items-center gap-6 order-2 sm:order-2">
                        {/* Image Section */}
                        <div className="flex-shrink-0 ">
                          <img
                            src={testimonial.image}
                            alt="Profile"
                            className="w-40 h-40 sm:w-46 sm:h-46 lg:w-52 lg:h-52 object-contain"
                            style={{
                              filter: "drop-shadow(10px 5px 0px #568C65)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
