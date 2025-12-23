'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const AccessibilityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="grow">
      {/* Hero Section */}
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/communitybg.png')",
          }}
        ></motion.div>

        <div className="relative z-10 px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-urbanist text-white text-center drop-shadow-2xl"
          >
            Accessibility Statement
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 bg-white/50 backdrop-blur-sm  transition-shadow duration-300"
          >
            Grace Point is committed to its policy that persons with disabilities have a full and equal opportunity to benefit from the goods, services, privileges, advantages, and accommodations offered by Grace Point. In keeping with that policy, Grace Point has implemented and maintains compliance with the relevant portions of the World Wide Web Consortium&apos;s Web Content Accessibility Guidelines 2.0 Level AA (WCAG 2.0 AA) as well as state and federal accessibility requirements.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 bg-white/50 backdrop-blur-sm  transition-shadow duration-300"
          >
            As part of this commitment, we are continually improving our website to make it more accessible. If you encounter any difficulty using our website, have suggestions about improving the usability or accessibility of the website, or would like to know more about Grace Point commitment to accessibility, please contact our accessibility team by email using the contact information below.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0052A3]/5  transition-shadow duration-300 p-4"
          >
            <p className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2">
              <strong>Email:</strong> grace@gracepoint.com
            </p>

            <p className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              <strong>Phone:</strong> 703-273-7500 (request to speak with our legal department)
            </p>
          </motion.div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;
