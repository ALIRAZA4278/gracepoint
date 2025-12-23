import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PartnerSection = () => {
  return (
    <section id="partner" className="relative w-full    overflow-hidden py-10">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/home/partnerbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto relative z-10 px-4 md:px-8">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold font-urbanist text-[#0052A3] mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-base md:text-lg font-urbanist text-gray-900 max-w-[900px] mx-auto">
            Healthcare facilities need dependable staffing solutions — and that's where GracePoint steps in.
          </p>
        </div>

        {/* Features with Center Icon */}
        <div className="relative max-w-[1300px] mx-auto mb-16 py-12">
          {/* Dashed Lines - Hidden on mobile */}
          <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Line from left top dot to center */}
            <line x1="30%" y1="28%" x2="43%" y2="50%" stroke="#0052A3" strokeWidth="1" strokeDasharray="5,5" />
            {/* Line from left bottom dot to center */}
            <line x1="30%" y1="72%" x2="43%" y2="50%" stroke="#0052A3" strokeWidth="1" strokeDasharray="5,5" />
            {/* Line from center to right top dot */}
            <line x1="57%" y1="50%" x2="70%" y2="28%" stroke="#0052A3" strokeWidth="1" strokeDasharray="5,5" />
            {/* Line from center to right bottom dot */}
            <line x1="57%" y1="50%" x2="70%" y2="72%" stroke="#0052A3" strokeWidth="1" strokeDasharray="5,5" />
          </svg>

          <div className="relative" style={{ minHeight: '520px' }}>
            {/* Feature 01 - Top Left */}
            <div className="absolute top-[8%] left-0 right-[63%] text-right pr-[70px]" style={{ zIndex: 10 }}>
              <h3 className="text-[#0052A3] text-xl md:text-2xl font-bold font-urbanist mb-1">01</h3>
              <p className="text-gray-900 font-urbanist text-sm md:text-base leading-relaxed">
                24/7 availability for<br />urgent staffing needs.
              </p>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0052A3] rounded-full"></div>
            </div>

            {/* Feature 02 - Bottom Left */}
            <div className="absolute bottom-[8%] left-0 right-[63%] text-right pr-[70px]" style={{ zIndex: 10 }}>
              <h3 className="text-[#0052A3] text-xl md:text-2xl font-bold font-urbanist mb-1">02</h3>
              <p className="text-gray-900 font-urbanist text-sm md:text-base leading-relaxed">
                Thorough screening,<br />credentialing, and<br />compliance checks.
              </p>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0052A3] rounded-full"></div>
            </div>

            {/* Feature 03 - Top Right */}
            <div className="absolute top-[8%] right-0 left-[63%] text-left pl-[70px]" style={{ zIndex: 10 }}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0052A3] rounded-full"></div>
              <h3 className="text-[#0052A3] text-xl md:text-2xl font-bold font-urbanist mb-1">03</h3>
              <p className="text-gray-900 font-urbanist text-sm md:text-base leading-relaxed">
                Competitive, flexible<br />pricing models.
              </p>
            </div>

            {/* Feature 04 - Bottom Right */}
            <div className="absolute bottom-[8%] right-0 left-[63%] text-left pl-[70px]" style={{ zIndex: 10 }}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0052A3] rounded-full"></div>
              <h3 className="text-[#0052A3] text-xl md:text-2xl font-bold font-urbanist mb-1">04</h3>
              <p className="text-gray-900 font-urbanist text-sm md:text-base leading-relaxed">
                Dedicated account<br />managers for ongoing<br />support.
              </p>
            </div>

            {/* Center Icon with Gray Circle Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 20 }}>
              {/* Outer Large Gray Circle */}

              {/* Middle Gray Circle */}
              <div className="absolute inset-0 w-[450px] h-[450px] md:w-[430px] md:h-[430px]  rounded-full border-[45px] md:border-[55px] border-gray-200/45 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>

              {/* Inner White Circle */}
              <div className="absolute inset-0 w-[340px] h-[340px] md:w-[400px] md:h-[400px] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>

              {/* Logo */}
              <div className="relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] flex items-center justify-center">
                <Image
                  src="/home/partnericon.png"
                  alt="GracePoint Partner Icon"
                  width={220}
                  height={220}
                  className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="#request-staff"
            className="bg-[#0052A3] text-white px-10 py-3.5 rounded text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300"
          >
            Request Staff Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
