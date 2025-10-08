// components/ContactSection.tsx
"use client";
import Image from "next/image";

const ContactSection = () => {
  const handleContactClick = () => {
    console.log("Contact me clicked");
    // Add your contact logic here
  };

  return (
    <section className="w-full h-35 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-start">
          {/* Left Side - Image (1 column) */}
          <div className="flex justify-center lg:justify-start lg:col-span-1">
            <div className="relative w-[160px] h-full">
              <Image
                src="/images/contact.jpg"
                width={160}
                height={140}
                alt="A. Arafat Hossain Sobuj"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content (3 columns) */}
          <div className="lg:col-span-3 flex flex-col h-full">
            {/* Heading with Icon at Top */}
            <div className="flex items-center">
              <div className="w-[10px] h-[10px] flex items-center justify-center">
                <Image
                  src="/icons/contact-icon.svg"
                  alt="Contact Icon"
                  width={10}
                  height={10}
                  className="object-contain"
                />
              </div>
              <h1 className="text-sm font-bold text-white font-roboto">
                ARAFAT HOSSAIN SOBUJ
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className="text-[13.51px] text-white font-roboto font-bold leading-5">
              A Full Stack Web Developer
            </h2>

            {/* Paragraph in the Middle */}
            <div className="flex-grow">
              <p className="text-[9px] font-normal font-roboto text-[#DBB9B9BA] leading-relaxed">
                As a Full Stack Web Developer, I am responsible for designing
                and building complete web applications from start to finish.
                This includes creating user interfaces, writing server-side
                code, and managing databases. With my comprehensive knowledge of
                the entire web development process, I can efficiently turn ideas
                into fully functional websites or applications.
              </p>
            </div>

            {/* Button at the Bottom */}
            <div className="mt-auto">
              <button
                onClick={handleContactClick}
                className="bg-[conic-gradient(from_180deg_at_-50%_50%,_#B94A5B_0deg,_#6A4FFF_129.81deg,_#6A4FFF_162.69deg,_#B94A5B_360deg)] text-white font-semibold text-[9.45px] w-22 h-[25px] rounded-sm"
              >
                Contact Me
                <span className="pl-1 leading-[15px] tracking-normal hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
