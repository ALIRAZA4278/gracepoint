import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PartnerSection = () => {
  return (
    <section id="partner" className="relative w-full overflow-hidden py-8 sm:py-10 md:py-12 lg:py-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/home/partnerbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-urbanist text-[#0052A3] mb-4 sm:mb-5 md:mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-urbanist text-gray-900 max-w-[90%] sm:max-w-[700px] md:max-w-[900px] mx-auto px-4">
            Healthcare facilities need dependable staffing solutions — and that's where GracePoint steps in.
          </p>
        </div>

        {/* Desktop Layout with Circle */}
        <div className="hidden lg:block relative max-w-[1300px] mx-auto mb-16 py-12">
          {/* Dashed Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <line x1="30%" y1="28%" x2="43%" y2="50%" stroke="#0052A3" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="30%" y1="72%" x2="43%" y2="50%" stroke="#0052A3" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="57%" y1="50%" x2="70%" y2="28%" stroke="#0052A3" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="57%" y1="50%" x2="70%" y2="72%" stroke="#0052A3" strokeWidth="1" strokeDasharray="5,5" />
          </svg>

          <div className="relative" style={{ minHeight: '520px' }}>
            {/* Feature 01 - Top Left */}
            <div className="absolute top-[8%] left-0 right-[63%] text-right pr-[70px]" style={{ zIndex: 10 }}>
              <h3 className="text-[#0052A3] text-xl xl:text-2xl font-bold font-urbanist mb-1">01</h3>
              <p className="text-gray-900 font-urbanist text-sm xl:text-base leading-relaxed">
                24/7 availability for<br />urgent staffing needs.
              </p>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0052A3] rounded-full"></div>
            </div>

            {/* Feature 02 - Bottom Left */}
            <div className="absolute bottom-[8%] left-0 right-[63%] text-right pr-[70px]" style={{ zIndex: 10 }}>
              <h3 className="text-[#0052A3] text-xl xl:text-2xl font-bold font-urbanist mb-1">02</h3>
              <p className="text-gray-900 font-urbanist text-sm xl:text-base leading-relaxed">
                Thorough screening,<br />credentialing, and<br />compliance checks.
              </p>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0052A3] rounded-full"></div>
            </div>

            {/* Feature 03 - Top Right */}
            <div className="absolute top-[8%] right-0 left-[63%] text-left pl-[70px]" style={{ zIndex: 10 }}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0052A3] rounded-full"></div>
              <h3 className="text-[#0052A3] text-xl xl:text-2xl font-bold font-urbanist mb-1">03</h3>
              <p className="text-gray-900 font-urbanist text-sm xl:text-base leading-relaxed">
                Competitive, flexible<br />pricing models.
              </p>
            </div>

            {/* Feature 04 - Bottom Right */}
            <div className="absolute bottom-[8%] right-0 left-[63%] text-left pl-[70px]" style={{ zIndex: 10 }}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0052A3] rounded-full"></div>
              <h3 className="text-[#0052A3] text-xl xl:text-2xl font-bold font-urbanist mb-1">04</h3>
              <p className="text-gray-900 font-urbanist text-sm xl:text-base leading-relaxed">
                Dedicated account<br />managers for ongoing<br />support.
              </p>
            </div>

            {/* Center Icon with Gray Circle Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 20 }}>
              <div className="absolute inset-0 w-[430px] h-[430px] rounded-full border-[55px] border-gray-200/45 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
              <div className="absolute inset-0 w-[400px] h-[400px] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
              <div className="relative w-[330px] h-[330px] flex items-center justify-center">
                <Image
                  src="/home/partnericon.png"
                  alt="GracePoint Partner Icon"
                  width={220}
                  height={220}
                  className="w-[220px] h-[220px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout - Card Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 sm:mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#0052A3]">
            <h3 className="text-[#0052A3] text-2xl font-bold font-urbanist mb-3">01</h3>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base leading-relaxed">
              24/7 availability for urgent staffing needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#0052A3]">
            <h3 className="text-[#0052A3] text-2xl font-bold font-urbanist mb-3">02</h3>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base leading-relaxed">
              Thorough screening, credentialing, and compliance checks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#0052A3]">
            <h3 className="text-[#0052A3] text-2xl font-bold font-urbanist mb-3">03</h3>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base leading-relaxed">
              Competitive, flexible pricing models.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#0052A3]">
            <h3 className="text-[#0052A3] text-2xl font-bold font-urbanist mb-3">04</h3>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base leading-relaxed">
              Dedicated account managers for ongoing support.
            </p>
          </div>

          {/* Center Icon for Mobile */}
          <div className="sm:col-span-2 flex justify-center py-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              <Image
                src="/home/partnericon.png"
                alt="GracePoint Partner Icon"
                width={192}
                height={192}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <Link
            href="#request-staff"
            className="w-full sm:w-auto bg-[#0052A3] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300 text-center"
          >
            Request Staff Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
