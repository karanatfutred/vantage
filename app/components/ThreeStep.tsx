import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ThreeStep = () => {
  const sections = [
    {
      id: 'why-augment-1',
      title: 'Week 1',
      description: 'Gain hands-on experience and actionable skills. Augment provides real-world tactics and frameworks, taught by business legends.',
      buttonText: 'Explore Courses',
      buttonLink: '/augment-mba-program',
      image: '/assets/classroom.jpg'
    },
    {
      id: 'why-augment-2',
      title: 'Week 2',
      description: 'Flexible, self-paced education for entrepreneurs. Access the best alternative MBA—anywhere, anytime, on any device.',
      buttonText: 'Explore Courses',
      buttonLink: '/augment-mba-program',
      image: '/assets/classroom.jpg'
    },
    {
      id: 'why-augment-3',
      title: 'Connect With Fellow Founders',
      description: 'Get support from your peers through online masterminds and real-world networking events.',
      buttonText: 'Explore Community',
      buttonLink: 'https://augment.org/students',
      image: '/assets/classroom.jpg'
    }
  ];

  return (
    <section className="text-black">
      <div className="px-4 lg:pt-[50px] mx-auto max-w-[1272px]">
        {/* Header Section */}

                <div className="mb-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black font-section-heading">
            Meet Your{" "}
            <span
              className="italic"
              style={{
                fontFamily: '"Chronicle Display Black", serif',
                color: "#568c65",
              }}
            >
              Mentors
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">Your mentors comes from</p>
        </div>

        {/* Content Sections */}
        <div>
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } lg:items-stretch gap-6 lg:gap-20 items-center `}
            >
              {/* Image Section */}
              <div className="w-full lg:max-w-[calc(50%-2.5rem)] lg:flex-1 lg:aspect-square">
                <div className="aspect-square overflow-hidden">
                  <figure className="relative h-full w-full">
                    <Image
                      alt="Entrepreneurship illustration"
                      src={section.image}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </figure>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col gap-10 w-full lg:max-w-[calc(50%-2.5rem)] lg:flex-1 lg:px-20 lg:py-10">
                {/* Navigation Dots */}
                <ul className="flex gap-2 lg:gap-3">
                  {sections.map((_, dotIndex) => (
                    <Link
                      key={dotIndex}
                      href={`#why-augment-${dotIndex + 1}`}
                      className={`flex items-center justify-center text-sm text-center tracking-normal leading-none w-7 h-7 rounded-full transition-all border ${
                        dotIndex === index
                          ? 'bg-yellow-300 border-black/20 text-black'
                          : 'border-gray-600/10 text-gray-600/60'
                      }`}
                    >
                      {dotIndex + 1}
                    </Link>
                  ))}
                </ul>

                {/* Text Content */}
                <div className="lg:flex lg:flex-col lg:justify-center lg:flex-1">
                  <div className="text-sm uppercase tracking-wider opacity-70 mb-4">
                    Curriculum
                  </div>
                  <h3 className="text-[1.625rem] text-gray-800 lg:text-4xl font-bold mb-5 lg:mb-6">
                    {section.title}
                  </h3>
                  <div className="text-base">
                    <p>{section.description}</p>
                  </div>
                </div>

                {/* CTA Button */}
                {/* <Link
                  href={section.buttonLink}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors self-center lg:self-start"
                >
                  {section.buttonText}
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStep;