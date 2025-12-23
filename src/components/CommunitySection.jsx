'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CommunitySection = ({ onOpenCareerModal, onOpenFindStaffModal }) => {
  const impacts = [
    {
      id: '01',
      description: 'Partner with healthcare training programs to support the next generation of caregivers'
    },
    {
      id: '02',
      description: 'Sponsor local job fairs and healthcare education initiatives'
    },
    {
      id: '03',
      description: 'Provide mentorship and career resources for new healthcare professionals'
    },
    {
      id: '04',
      description: 'Support underserved communities by ensuring access to skilled healthcare staff'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="community" className="relative w-full overflow-visible pb-20 sm:pb-24 md:pb-32">
      <div
        className="absolute top-0 left-0 right-0 h-full md:h-[70%] z-0"
        style={{
          backgroundImage: "url('/home/communitybg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 sm:mb-12 md:mb-16 gap-6"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:max-w-[600px]"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-urbanist text-white mb-3 sm:mb-4 drop-shadow-2xl">
              Community Impact
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-urbanist text-white leading-relaxed border-l-4 border-white pl-3 sm:pl-4 drop-shadow-lg">
              GracePoint Medical Staffing is committed to making a difference not only in healthcare facilities but also in the communities we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto"
          >
            <motion.button
              onClick={onOpenFindStaffModal}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0052A3] px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-gray-100 transition-all duration-300 text-center shadow-xl"
            >
              Find Staff Today
            </motion.button>
            <motion.button
              onClick={onOpenCareerModal}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232, 89, 136, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E85988] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center shadow-xl"
            >
              Start Your Career
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Impact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white p-5 sm:p-6 rounded-lg shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(232,89,136,0.4)] transition-all duration-500 overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0, rotate: 180, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 0.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src="/home/partnericon.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="relative">
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="text-[#E85988] text-2xl sm:text-3xl font-bold font-urbanist mb-3 sm:mb-4"
                >
                  {impact.id}
                </motion.h3>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="text-gray-900 font-urbanist text-sm sm:text-base leading-relaxed"
                >
                  {impact.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
