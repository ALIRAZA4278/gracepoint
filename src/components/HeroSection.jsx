import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/hero.png')",
        }}
      ></div>

      <div className="relative z-10 w-full px-8 text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-[80px] md:text-[100px] lg:text-[120px] mb-8 leading-tight font-bold italic text-white" style={{ fontFamily: 'serif' }}>
          Excellence in Care.<br />Guided by Purpose.
        </h1>

        <p className="font-urbanist text-base md:text-lg mb-10 max-w-[950px] mx-auto leading-relaxed">
          GracePoint Medical Staffing provides reliable, flexible, and professional healthcare staffing solutions. Whether you're a facility in need of skilled staff or a healthcare professional seeking new opportunities, we make the connection seamless.
        </p>

        <div className="flex gap-6 justify-center items-center">
          <Link
            href="#find-staff"
            className="bg-[#0052A3] text-white px-8 py-3 rounded text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300"
          >
            Find Staff Today
          </Link>
          <Link
            href="#start-career"
            className="bg-[#E85988] text-white px-8 py-3 rounded text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300"
          >
            Start Your Career
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
