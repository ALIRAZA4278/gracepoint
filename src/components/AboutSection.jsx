import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="relative w-full py-20 px-8 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: "url('/home/aboutbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-[#0052A3] text-5xl font-bold font-urbanist mb-6">
              ABOUT US
            </h2>

            <h3 className="text-2xl font-semibold font-urbanist text-gray-900">
              Welcome To Gracepoint
            </h3>

            <p className="text-gray-700 font-urbanist leading-relaxed">
              GracePoint Medical Staffing is a premier healthcare staffing agency built on the principles of professionalism, reliability, and excellence. We specialize in providing healthcare facilities with highly qualified professionals who can adapt quickly, deliver quality care, and support patient outcomes.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold font-urbanist text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#0052A3]"></span>
                  OUR MISSION:
                </h4>
                <p className="text-gray-700 font-urbanist leading-relaxed pl-3">
                  To provide healthcare facilities with exceptional staffing solutions by matching the right talent to the right opportunities, ensuring patient care is never compromised.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold font-urbanist text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#0052A3]"></span>
                  OUR VISION:
                </h4>
                <p className="text-gray-700 font-urbanist leading-relaxed pl-3">
                  To be the premier medical staffing partner recognized nationwide for reliability, consistency, and quality-driven results.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="text-[#E85988] text-lg font-bold font-urbanist mb-2 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#E85988]"></span>
                  NEED ASSISTANCE?
                </h4>
                <a href="tel:+9212365744" className="text-4xl font-bold text-gray-900 hover:text-[#0052A3] transition-colors" style={{ fontFamily: 'serif' }}>
                  +921 236 574 4
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full flex justify-center items-center">

            <div className="relative max-w-[700px]">
              <Image
                src="/home/about.png"
                alt="Healthcare professionals"
                width={700}
                height={800}
                className="w-full h-auto  "
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
