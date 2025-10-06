// components/HeroSection.tsx (Alternative)
"use client";

import Image from "next/image";

const HeroSection = () => {
  const handleGetInTouch = () => {
    // Add your get in touch logic here
    console.log("Get in touch clicked");
  };

  const handleDownloadCV = () => {
    // Add your download CV logic here
    const link = document.createElement("a");
    link.href = "/cv-arafat-hossain-sobuj.pdf"; // Update with your CV path
    link.download = "Arafat_Hossain_Sobuj_CV.pdf";
    link.click();
  };

  return (
    <section className="w-full py-[78px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-2">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-sm font-bold text-white leading-tight">
                  I AM <span className="text-[#B94A5B] ">ARAFAT </span> HOSSAIN
                  SOBUJ
                </h1>
              </div>

              {/* Subtitle */}
              <p className="h-[63px] px-[10px] py-3 text-[11px] font-bold text-[#FFFFFF] bg-[#2A2A3A94]/58 leading-100% tracking-wider rounded-[10px]">
                Full-Stack Mobile App Developer | 9+ Years Experience
                <br />
                Expert in Flutter & Node.js | 40+ Successful Projects Delivered
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6 pt-4">
              <div className="space-y-4">
                <h2 className="w-[281px] text-[18px] leading-6 font-semibold text-white tracking-wider">
                  Maximize Your Business{" "}
                  <span className="text-[#B94A5B]">Potential</span> with Custom
                  Web Development{" "}
                  <span className="text-[#6A4FFF]"> Solutions!</span>
                </h2>
                <p className="w-[232px] text-[11px] font-normal text-[#DBB9B9] max-w-2xl">
                  Take your business to the next level with custom web
                  development solutions.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetInTouch}
                  className="w-[95px] h-[25px] bg-[conic-gradient(from_180deg_at_-50%_50%,_#B94A5B_0deg,_#6A4FFF_129.81deg,_#6A4FFF_162.69deg,_#B94A5B_360deg)] border-1 border-[#2A2A3A] text-white font-semibold text-[10px] rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="w-[95px] h-[25px] bg-[conic-gradient(from_180deg_at_-50%_50%,_#B94A5B_0deg,_#6A4FFF_129.81deg,_#6A4FFF_162.69deg,_#B94A5B_360deg)] border-1 border-[#2A2A3A] text-white font-semibold text-[10px] rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration/Image */}
          <div className="relative w-[220px] h-[220px]">
            {/* Blurred ring behind */}
            <div className="absolute inset-0 translate-x-[18px] rounded-full bg-[#D9D9D921]/13 opacity-100"></div>

            {/* Main ring with image */}
            <div className="relative w-full h-full rounded-full bg-[conic-gradient(from_180deg_at_-50%_50%,_#B94A5B_0deg,_#6A4FFF_129.81deg,_#6A4FFF_162.69deg,_#B94A5B_360deg)] p-[4px]">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="/sobuj.png"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
