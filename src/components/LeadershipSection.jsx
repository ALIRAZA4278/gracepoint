import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LeadershipSection = () => {
  return (
    <section id="leadership" className="relative w-full overflow-visible bg-[#0052A3] pt-40   ">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/home/leadershipbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Column */}
          <div className="py-8 px-4 md:px-8 lg:px-12 text-white order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-6 md:mb-8">
              Leadership
            </h2>

            <p className="text-base md:text-lg font-urbanist leading-relaxed mb-6 md:mb-8">
              GracePoint is proudly led by two devoted siblings, <span className="font-bold">Bernard and Vera</span>, whose shared vision is to raise the standard of healthcare staffing. Their commitment to excellence and people-first leadership ensures that both healthcare facilities and professionals receive the support they need to thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link
                href="#find-staff"
                className="bg-white text-[#0052A3] px-6 md:px-8 py-3 rounded text-sm md:text-base font-urbanist font-semibold hover:bg-gray-100 transition-all duration-300 text-center"
              >
                Find Staff Today
              </Link>
              <Link
                href="#start-career"
                className="bg-[#E85988] text-white px-6 md:px-8 py-3 rounded text-sm md:text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center"
              >
                Start Your Career
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[600px] -mt-40 md:-mt-48 lg:-mt-56 z-[100]">
              <Image
                src="/home/leadership.png"
                alt="Bernard and Vera - Leadership Team"
                fill
                className="object-cover object-top rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
