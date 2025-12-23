import React from 'react';
import Image from 'next/image';

const LeadershipSection = ({ onOpenCareerModal, onOpenFindStaffModal }) => {
  return (
    <section id="leadership" className="relative w-full overflow-visible pt-20 sm:pt-28 md:pt-32 lg:pt-40">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: "url('/home/leadershipbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Content Column */}
          <div className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 text-white order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-4 sm:mb-6 md:mb-8">
              Leadership
            </h2>

            <p className="text-sm sm:text-base md:text-lg font-urbanist leading-relaxed mb-4 sm:mb-6 md:mb-8">
              GracePoint is proudly led by two devoted siblings, <span className="font-bold">Bernard and Vera</span>, whose shared vision is to raise the standard of healthcare staffing. Their commitment to excellence and people-first leadership ensures that both healthcare facilities and professionals receive the support they need to thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
              <button
                onClick={onOpenFindStaffModal}
                className="bg-white text-[#0052A3] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded text-xs sm:text-sm md:text-base font-urbanist font-semibold hover:bg-gray-100 transition-all duration-300 text-center"
              >
                Find Staff Today
              </button>
              <button
                onClick={onOpenCareerModal}
                className="bg-[#E85988] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded text-xs sm:text-sm md:text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center"
              >
                Start Your Career
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-56 z-[100]">
              <Image
                src="/home/leadership.png"
                alt="Bernard and Vera - Leadership Team"
                fill
                className="object-cover object-top rounded-lg"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
