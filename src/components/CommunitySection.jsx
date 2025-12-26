'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CommunitySection = ({ onOpenCareerModal, onOpenFindStaffModal }) => {
  const impacts = [
    {
      id: '01',
      title: 'Partnering With Healthcare Training Programs',
      description: 'We collaborate with healthcare training programs and educational institutions to support the development of the next generation of caregivers and medical professionals.'
    },
    {
      id: '02',
      title: 'Sponsoring Local Job Fairs & Education Initiatives',
      description: 'We actively sponsor and participate in local job fairs and healthcare education initiatives to create access to employment opportunities and industry awareness.'
    },
    {
      id: '03',
      title: 'Mentorship & Career Development',
      description: 'We provide mentorship, guidance, and career resources to new healthcare professionals and caregivers, helping them grow with confidence and long-term stability.'
    },
    {
      id: '04',
      title: 'Supporting Underserved Communities',
      description: 'We work to ensure underserved communities have access to skilled, compassionate healthcare and caregiving staff, bridging gaps in care where support is needed most.'
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
    <section id="community" className="relative w-full overflow-visible pb-20 sm:pb-24 md:pb-32 bg-white">
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
            className="lg:max-w-[700px]"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-urbanist text-white mb-4 sm:mb-6 drop-shadow-2xl">
              Community Impact
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-urbanist text-white leading-relaxed border-l-4 border-white pl-4 sm:pl-5 drop-shadow-lg mb-4">
              GracePoint Medical Staffing is committed to making a meaningful difference not only within healthcare facilities, but also in the lives of caregivers, families, and the communities we serve. We believe quality care starts with supporting the people who provide it, empowering caregivers and healthcare professionals with opportunities, respect, and ongoing support.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-urbanist text-white leading-relaxed border-l-4 border-white pl-4 sm:pl-5 drop-shadow-lg">
              Through reliable staffing, compassionate in-home care, and community-focused partnerships, we help ensure individuals receive the care they need while creating employment opportunities that strengthen local communities. Our impact goes beyond placements, we strive to build trust, promote dignity, and contribute to healthier, more connected communities through purpose-driven service.
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
              className="relative bg-white p-6 sm:p-7 md:p-8 rounded-lg shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(232,89,136,0.4)] transition-all duration-500 overflow-hidden min-h-[280px] flex flex-col"
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
              <div className="relative flex-1 flex flex-col">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="flex items-center gap-2 mb-3"
                >
                  <h3 className="text-[#E85988] text-3xl sm:text-4xl font-bold font-urbanist">
                    {impact.id}
                  </h3>
                  <span className="text-[#0052A3] text-xl font-bold">—</span>
                </motion.div>
                <motion.h4
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.45 }}
                  className="text-[#0052A3] text-lg sm:text-xl font-bold font-urbanist mb-4 leading-tight"
                >
                  {impact.title}
                </motion.h4>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="text-gray-700 font-urbanist text-sm sm:text-base leading-relaxed flex-1"
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
