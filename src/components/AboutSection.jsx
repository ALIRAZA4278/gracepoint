'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#0052A3] text-3xl sm:text-4xl md:text-5xl font-extrabold font-urbanist mb-4 sm:mb-5 md:mb-6"
            >
              ABOUT US
            </motion.h2>

            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl font-semibold font-urbanist text-gray-900"
            >
              Welcome To Gracepoint
            </motion.h3>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base text-gray-700 font-urbanist leading-relaxed"
            >
              GracePoint Medical Staffing is a premier healthcare staffing agency built on the principles of professionalism, reliability, and excellence. We specialize in providing healthcare facilities with highly qualified professionals who can adapt quickly, deliver quality care, and support patient outcomes.
            </motion.p>

            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="    transition-shadow duration-300"
              >
                <h4 className="text-base sm:text-lg font-bold font-urbanist text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 sm:h-6 bg-[#0052A3]"></span>
                  OUR MISSION:
                </h4>
                <p className="text-sm sm:text-base text-gray-700 font-urbanist leading-relaxed pl-3">
                  To provide healthcare facilities with exceptional staffing solutions by matching the right talent to the right opportunities, ensuring patient care is never compromised.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className=" "
              >
                <h4 className="text-base sm:text-lg font-bold font-urbanist text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 sm:h-6 bg-[#0052A3]"></span>
                  OUR VISION:
                </h4>
                <p className="text-sm sm:text-base text-gray-700 font-urbanist leading-relaxed pl-3">
                  To be the premier medical staffing partner recognized nationwide for reliability, consistency, and quality-driven results.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-3 sm:pt-4"
              >
                <h4 className="text-[#E85988] text-base sm:text-lg font-bold font-urbanist mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 sm:h-6 bg-[#E85988]"></span>
                  NEED ASSISTANCE?
                </h4>
                <motion.a
                  href="tel:+9212365744"
                  whileHover={{ scale: 1.05, color: '#0052A3' }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 hover:text-[#0052A3] transition-colors inline-block drop-shadow-md"
                  style={{ fontFamily: 'serif' }}
                >
                  +921 236 574 4
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full flex justify-center items-center mt-8 lg:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] overflow-hidden  "
            >
              <Image
                src="/home/about.png"
                alt="Healthcare professionals"
                width={700}
                height={800}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
