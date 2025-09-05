import React from "react";
import Image from "next/image";

const Founders = () => {
  const testimonials = [
    {
      id: 1,
      image: "/assets/manish.png",
      content:
        "Ex-Chairman, ATMC Group | Ex-Founder & CEO (Employability.life)",
      name: "Dr. Manish Malhotra",
      logo: "/assets/atmc-logo.png",
      logo2: "/assets/employability-logo.png",
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
    <section
      id="meet-founders"
      className="pt-10 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founders Title */}
        <div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-section-heading">
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
            {/* <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Leadership that drives innovation and excellence
            </p> */}
          </div>
        </div>

        {/* Founders Cards - Side by Side */}
      </div>

      <div
        className="mt-8 w-full"
        style={{
          backgroundColor: "#f7f7f7",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Syed's Card */}
            <div className="flex gap-3">
              <div
                className="relative flex justify-center overflow-hidden"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src="/assets/syed_raza-long.png"
                  alt="Syed Raza"
                  quality={100}
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                  width={300}
                  height={180}
                  style={{
                    filter: `
          drop-shadow(5px 0 0 white)
          drop-shadow(0 5px 0 white)
          drop-shadow(-5px 0 0 white)
          drop-shadow(0 -5px 0 white)
        `,
                  }}
                />
                {/* Solid white div positioned relative to image */}
                <div
                  className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-4/5 h-12 bg-white border border-gray-200 z-10 flex flex-col items-center justify-center"
                  style={{ borderRadius: "5px" }}
                >
                  <span className="text-black text-xs sm:text-sm lg:text-base font-semibold tracking-wide leading-tight">
                    Syed{" "}
                    <span
                      style={{
                        fontFamily: '"Chronicle Display Black", serif',
                        color: "#4B5563",
                        fontStyle: "italic",
                      }}
                    >
                      Raza
                    </span>
                  </span>
                  <span
                    className="text-xs text-gray-600"
                    style={{
                      color: "#4B5563",
                      fontStyle: "italic",
                      fontFamily: '"Sofia Pro Light", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    Co-Founder
                  </span>
                </div>
              </div>
              <div className="w-[295px] flex flex-col justify- mt-10 gap-2">
                <p
                  className="text-sm sm:text-sm leading-snug tracking-wide mb-4"
                  style={{
                    fontFamily: '"Sofia Pro Bold Az", sans-serif',
                    color: "#1a1a1a",
                  }}
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#568C65",
                      fontFamily: '"Chronicle Display Black", serif',
                    }}
                  >
                    From steering trillion-dollar balance sheets to shaping
                    fintech ventures,
                  </span>{" "}
                  <span
                    style={{
                      color: "#4B5563",
                      fontStyle: "italic",
                      fontFamily: '"Sofia Pro Light", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    now opening access to the world of high finance once guarded
                    by Ivy League halls and global boardrooms.
                  </span>
                </p>
                {/* Company Logos with Designations */}
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-0 w-full">
                    <div className="w-9 flex-shrink-0">
                      <Image
                        src="/assets/barclays-short-logo.png"
                        alt="Barclays logo"
                        width={25}
                        height={16}
                        className="h-3 sm:h-4 lg:h-5 object-contain transition-opacity duration-200"
                        quality={100}
                      />
                    </div>
                    <span className="text-xs font-normal text-gray-500">
                      Former MD & CEO, Barclays (UK & Americas)
                    </span>
                  </div>
                  <div className="flex items-start gap-0 w-full">
                    <div className="w-9 flex-shrink-0">
                      <Image
                        src="/assets/lamaa-short-logo.png"
                        alt="Lamaa logo"
                        width={25}
                        height={36}
                        className="h-3 sm:h-4 lg:h-5 object-contain transition-opacity duration-200"
                        quality={100}
                      />
                    </div>
                    <span className="text-xs font-normal text-gray-500">
                      Former CEO, Lamaa Saudi
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/oxford-logo.png"
                      alt="Oxford logo"
                      width={80} // increase width
                      height={22} // adjust height proportionally
                      className="h-3 sm:h-5 lg:h-7 w-auto object-contain transition-opacity duration-200 flex-shrink-0"
                      unoptimized
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Manish's Card */}
            <div className="flex gap-3">
              <div
                className="relative flex justify-center overflow-hidden"
                style={{
                  width: "250px",
                  height: "250px",
                  // backgroundColor: "#EBEBEB",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src="/assets/manish-long-photo.png"
                  alt="Dr. Manish Malhotra"
                  quality={100}
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                  width={300}
                  height={180}
                  style={{
                    filter: `
      drop-shadow(5px 0 0 white)
      drop-shadow(0 5px 0 white)
      drop-shadow(-5px 0 0 white)
      drop-shadow(0 -5px 0 white)
    `,
                  }}
                />
                {/* Solid white div positioned relative to image */}
                <div
                  className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-4/5 h-12 bg-white border border-gray-200 z-10 flex flex-col items-center justify-center"
                  style={{ borderRadius: "5px" }}
                >
                  <span className="text-black text-xs sm:text-sm lg:text-base font-semibold tracking-wide leading-tight">
                    Dr. Manish{" "}
                    <span
                      style={{
                        fontFamily: '"Chronicle Display Black", serif',
                        color: "#4B5563",
                        fontStyle: "italic",
                      }}
                    >
                      Malhotra
                    </span>
                  </span>
                  <span
                    className="text-xs text-gray-600"
                    style={{
                      color: "#4B5563",
                      fontStyle: "italic",
                      fontFamily: '"Sofia Pro Light", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    Co-Founder
                  </span>
                </div>
              </div>
              <div className="w-[295px] flex flex-col justify- mt-10 gap-2">
                <p
                  className="text-sm sm:text-sm leading-snug tracking-wide mb-4"
                  style={{
                    fontFamily: '"Sofia Pro Bold Az", sans-serif',
                    color: "#1a1a1a",
                  }}
                >
                  {/* <span
                    style={{
                      fontSize: "1.5rem",
                      color: "#4B5563",
                      lineHeight: "1",
                    }}
                  >
                    "
                  </span> */}
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#568C65",
                      fontFamily: '"Chronicle Display Black", serif',
                    }}
                  >
                    From scaling and exiting multi-million-dollar ventures
                    worldwide,
                  </span>{" "}
                  <span
                    style={{
                      color: "#4B5563",
                      fontStyle: "italic",
                      fontFamily: '"Sofia Pro Light", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    now building what learning should have always been where
                    students learn to go from zero to one hundred and create at
                    scale from day one.
                  </span>
                  {/* <span
                    style={{
                      fontSize: "1.5rem",
                      color: "#4B5563",
                      lineHeight: "1",
                    }}
                  >
                    "
                  </span> */}
                </p>
                {/* Company Logos with Designations */}
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-0 w-full">
                    <div className="w-16 flex-shrink-0">
                      <Image
                        src="/assets/atmc-short.png"
                        alt="ATMC logo"
                        width={50}
                        height={18}
                        className="h-3 sm:h-4 lg:h-5 object-contain transition-opacity duration-200"
                        quality={100}
                      />
                    </div>
                    <span className="text-xs font-normal text-gray-500">
                      Ex MD & CEO, ATMC Australia
                    </span>
                  </div>
                  <div className="flex items-start gap-0 w-full">
                    <div className="w-16 flex-shrink-0">
                      <Image
                        src="/assets/employability-short.png"
                        alt="Employability logo"
                        width={22}
                        height={36}
                        className="h-3 sm:h-4 lg:h-5 object-contain transition-opacity duration-200"
                        quality={100}
                      />
                    </div>
                    <span className="text-xs font-normal text-gray-500">
                      Ex-Founder & CEO, Employability.life
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/rmit-university.svg"
                      alt="RMIT University logo"
                      width={60}
                      height={18}
                      className="h-3 sm:h-4 lg:h-5 w-auto object-contain transition-opacity duration-200 flex-shrink-0"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founders Section - Side by Side */}
        {/* <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"> */}
        {/* Dr. Manish Malhotra Card */}
        {/* {testimonials
           .filter((testimonial) => testimonial.id !== 2)
           .map((testimonial) => ( */}
        {/* <div
                  key={`duplicate-${testimonial.id}`}
                  className="px-4 sm:px-8 py-2 sm:py-4 flex-1"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                    <div className="text-left order-1 sm:order-1">
                      <div className="text-black text-xl sm:text-2xl lg:text-3xl  py-2 font-semibold tracking-wide border-none leading-tight">
                        Dr. Manish{" "}
                        <span
                          style={{
                            fontFamily: '"Chronicle Display Black", serif',
                            color: "#4B5563",
                            fontStyle: "italic",
                          }}
                        >
                          Malhotra
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-xs leading-relaxed mb-4">
                        {testimonial.content}
                      </p>
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
                            color: "#4B5563",
                            fontWeight: "bold",
                            fontStyle: "italic",
                          }}
                        >
                          AI-Powered
                        </span>
                        , skills-first world.
                      </p>
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
                    <div className="flex flex-col items-center gap-6 order-2 sm:order-2">
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
          ))} */}

        {/* Syed Raza Card */}
        {/* {testimonials
              .filter((testimonial) => testimonial.id === 2)
              .map((testimonial) => (
                <div
                  key={`syed-${testimonial.id}`}
                  className="px-4 sm:px-8 py-2 sm:py-4 flex-1"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                    <div className="text-left order-1 sm:order-1">
                      <div className="text-black text-xl sm:text-2xl lg:text-3xl  py-2 font-semibold tracking-wide border-none leading-tight">
                        Syed{" "}
                        <span
                          style={{
                            fontFamily: '"Chronicle Display Black", serif',
                            color: "#4B5563",
                            fontStyle: "italic",
                          }}
                        >
                          Raza
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-xs leading-relaxed mb-4">
                        {testimonial.content}
                      </p>
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
                            color: "#4B5563",
                            fontWeight: "bold",
                            fontStyle: "italic",
                          }}
                        >
                          AI-Powered
                        </span>{" "}
                        leadership.
                      </p>
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
                    <div className="flex flex-col items-center gap-6 order-2 sm:order-2">
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
           ))} */}
        {/* </div>
        </div> */}
      </div>
    </section>
  );
};

export default Founders;
