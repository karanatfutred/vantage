'use client';
import React, { useState } from 'react';

const FellowshipHero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleVideoClick = () => {
    setVideoModalOpen(true);
    // In a real app, you'd open a video modal or redirect to video
    alert('Video player would open here');
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-12">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6">

            {/* Main Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Global Banking & Finance{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-[length:100%_8px] bg-no-repeat bg-bottom">
                Fellowship
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
              Taught by the leaders who shaped trillion-dollar finance
            </p>

            {/* Subject Areas */}
            <div className="text-lg text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 cursor-pointer border-b-2 border-transparent hover:border-blue-600 inline-block">
              Fintech | Venture Capital | Wealth & Private Banking | Credit & Risk
            </div>
          </div>

          {/* Right Content - Video Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 pointer-events-none"></div>
              
              {/* Play Button */}
              <button
                onClick={handleVideoClick}
                className="relative z-10 w-20 h-20 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
              </button>

              {/* Video Description */}
              <p className="relative z-10 text-white text-lg lg:text-xl font-semibold leading-relaxed">
                video caption
              </p>
            </div>
          </div>
        </div>

        {/* Program Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Start Date Card */}
          <div className="bg-gray-600/90 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-sm font-semibold opacity-90 mb-2">Starts on</div>
            <div className="text-xl font-bold">06th Oct 2025</div>
          </div>

          {/* Duration Card */}
          <div className="bg-gray-600/90 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-sm font-semibold opacity-90 mb-2">Duration</div>
            <div className="text-xl font-bold mb-1">02 Weeks</div>
            <div className="text-sm opacity-80 leading-tight">
              8-10 hrs/week | Daily live sessions + Online Material
            </div>
          </div>

          {/* Eligibility Card */}
          <div className="bg-gray-600/90 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-sm font-semibold opacity-90 mb-2">Eligibility</div>
            <div className="text-xl font-bold leading-tight">
              Final-year undergraduates, postgraduates, and early-career professionals
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-sm font-semibold opacity-90 mb-2">Price</div>
            <div className="text-2xl font-bold">INR 14,999</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FellowshipHero;