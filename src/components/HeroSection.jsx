import React from 'react';

const HeroSection = ({ onOpenCareerModal, onOpenFindStaffModal }) => {
  return (
    <section id="home" className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] mb-4 sm:mb-6 md:mb-8 leading-tight font-bold italic text-white" style={{ fontFamily: 'serif' }}>
          Excellence in Care.<br />Guided by Purpose.
        </h1>

        <p className="font-urbanist text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[950px] mx-auto leading-relaxed">
          GracePoint Medical Staffing provides reliable, flexible, and professional healthcare staffing solutions. Whether you're a facility in need of skilled staff or a healthcare professional seeking new opportunities, we make the connection seamless.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-[400px] sm:max-w-none">
          <button
            onClick={onOpenFindStaffModal}
            className="w-full sm:w-auto bg-[#0052A3] text-white px-6 sm:px-8 py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300 text-center"
          >
            Find Staff Today
          </button>
          <button
            onClick={onOpenCareerModal}
            className="w-full sm:w-auto bg-[#E85988] text-white px-6 sm:px-8 py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center"
          >
            Start Your Career
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
