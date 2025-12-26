'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ onOpenCareerModal, onOpenFindStaffModal }) => {
  return (
    <section id="home" className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 text-center text-white flex flex-col items-center justify-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[100px] mb-4 sm:mb-6 md:mb-8 leading-tight font-bold italic text-white drop-shadow-2xl"
          style={{ fontFamily: 'serif' }}
        >
          Excellence in Care.<br />Guided by Purpose.
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="font-urbanist text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[950px] mx-auto leading-relaxed drop-shadow-lg"
        >
          GracePoint Medical Staffing provides reliable, flexible, and professional staffing solutions for healthcare facilities, private clients, and families. Whether you&apos;re a facility in need of skilled staff, a family seeking compassionate caregivers for in-home support and companionship, or a healthcare professional exploring new opportunities, we make the connection seamless.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-[400px] sm:max-w-none"
        >
          <motion.button
            onClick={onOpenFindStaffModal}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 82, 163, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-[#0052A3] text-white px-6 sm:px-8 py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300 text-center shadow-xl"
          >
            Find Staff Today
          </motion.button>
          <motion.button
            onClick={onOpenCareerModal}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232, 89, 136, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-[#E85988] text-white px-6 sm:px-8 py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center shadow-xl"
          >
            Start Your Career
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
