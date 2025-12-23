'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center justify-center">
          {/* Content Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 text-white order-2 lg:order-1"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl"
            >
              Leadership
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg font-urbanist leading-relaxed mb-4 sm:mb-6 md:mb-8 drop-shadow-lg"
            >
              GracePoint is proudly led by two devoted siblings, <span className="font-bold">Bernard and Vera</span>, whose shared vision is to raise the standard of healthcare staffing. Their commitment to excellence and people-first leadership ensures that both healthcare facilities and professionals receive the support they need to thrive.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6"
            >
              <motion.button
                onClick={onOpenFindStaffModal}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0052A3] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded text-xs sm:text-sm md:text-base font-urbanist font-semibold hover:bg-gray-100 transition-all duration-300 text-center shadow-xl"
              >
                Find Staff Today
              </motion.button>
              <motion.button
                onClick={onOpenCareerModal}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232, 89, 136, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E85988] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded text-xs sm:text-sm md:text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center shadow-xl"
              >
                Start Your Career
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative w-full order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-56 z-[100] rounded-lg overflow-hidden"
            >
              <Image
                src="/home/leadership.png"
                alt="Bernard and Vera - Leadership Team"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
