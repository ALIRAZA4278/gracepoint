import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/home/aboutbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-[#0052A3] text-3xl sm:text-4xl md:text-5xl font-extrabold font-urbanist mb-4 sm:mb-5 md:mb-6">
              ABOUT US
            </h2>

            <h3 className="text-xl sm:text-2xl font-semibold font-urbanist text-gray-900">
              Welcome To Gracepoint
            </h3>

            <p className="text-sm sm:text-base text-gray-700 font-urbanist leading-relaxed">
              GracePoint Medical Staffing is a premier healthcare staffing agency built on the principles of professionalism, reliability, and excellence. We specialize in providing healthcare facilities with highly qualified professionals who can adapt quickly, deliver quality care, and support patient outcomes.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold font-urbanist text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 sm:h-6 bg-[#0052A3]"></span>
                  OUR MISSION:
                </h4>
                <p className="text-sm sm:text-base text-gray-700 font-urbanist leading-relaxed pl-3">
                  To provide healthcare facilities with exceptional staffing solutions by matching the right talent to the right opportunities, ensuring patient care is never compromised.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold font-urbanist text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 sm:h-6 bg-[#0052A3]"></span>
                  OUR VISION:
                </h4>
                <p className="text-sm sm:text-base text-gray-700 font-urbanist leading-relaxed pl-3">
                  To be the premier medical staffing partner recognized nationwide for reliability, consistency, and quality-driven results.
                </p>
              </div>

              <div className="pt-3 sm:pt-4">
                <h4 className="text-[#E85988] text-base sm:text-lg font-bold font-urbanist mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 sm:h-6 bg-[#E85988]"></span>
                  NEED ASSISTANCE?
                </h4>
                <a href="tel:+9212365744" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 hover:text-[#0052A3] transition-colors inline-block" style={{ fontFamily: 'serif' }}>
                  +921 236 574 4
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px]">
              <Image
                src="/home/about.png"
                alt="Healthcare professionals"
                width={700}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
