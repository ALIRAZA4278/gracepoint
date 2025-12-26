'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ServicesSection = ({ onOpenCareerModal, onOpenFindStaffModal }) => {
  const services = [
    {
      id: '01',
      title: 'Per Diem Staffing',
      description: 'Flexible, last-minute shift coverage for healthcare facilities, ensuring continuity of care and uninterrupted support for patients and residents.',
      image: '/home/service1.png',
    },
    {
      id: '02',
      title: 'Travel Assignments',
      description: 'Nationwide placement opportunities for healthcare professionals and caregivers seeking flexibility, competitive assignments, and new experiences across diverse care settings.',
      image: '/home/service2.png',
    },
    {
      id: '03',
      title: 'Contract & Temp-to-Hire',
      description: 'Short-term and long-term staffing solutions with the option to extend assignments or transition professionals into permanent roles, ideal for both facilities and private care needs.',
      image: '/home/service3.png',
    },
    {
      id: '04',
      title: 'Direct Hire Placement',
      description: 'Permanent staffing solutions for healthcare facilities and private organizations seeking reliable, long-term professionals who align with their care standards and culture.',
      image: '/home/service4.png',
    },
    {
      id: '05',
      title: 'Private Duty & Personal Care Staffing',
      description: 'Compassionate, professional caregivers providing in-home support, personal care, and companionship for individuals and families in private settings.',
      image: '/home/service5.png',
    },
    {
      id: '06',
      title: 'Specialized Roles',
      description: 'Staffing across a wide range of healthcare and caregiving positions, including Registered Nurses (RNs), Licensed Practical Nurses (LPNs), Certified Nursing Assistants (CNAs), Medication Technicians (Med Techs), Home Health Aides (HHAs), Companions, Therapists, and healthcare administrative professionals.',
      image: '/home/service6.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="relative w-full py-12 sm:py-14 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/home/servicebg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-urbanist text-[#0052A3] mb-3 sm:mb-4">
            OUR SERVICES
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold font-urbanist text-gray-900 mb-3 sm:mb-4">
            Our Staffing Solutions
          </p>
          <p className="text-sm sm:text-base md:text-lg font-urbanist text-gray-700 max-w-[90%] sm:max-w-[700px] md:max-w-[900px] mx-auto px-4 mb-3">
            GracePoint Medical Staffing offers flexible, dependable staffing solutions tailored to the unique needs of healthcare facilities, private clients, and families. We provide qualified healthcare professionals and compassionate caregivers who can seamlessly support a wide range of care environments.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-urbanist text-gray-700 max-w-[90%] sm:max-w-[700px] md:max-w-[900px] mx-auto px-4">
            Whether you are a facility seeking reliable clinical staff, or a family in need of in-home caregiving and companionship, our staffing solutions are designed to ensure continuity of care, safety, and peace of mind. From short-term coverage to long-term placements, we match the right professionals with the right opportunities, always prioritizing quality, professionalism, and compassionate care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative overflow-visible shadow-2xl hover:shadow-[0_30px_60px_-12px_rgba(0,82,163,0.5)] transition-all duration-500 mb-24 sm:mb-28 md:mb-32 lg:mb-36 rounded-lg"
            >
              <div className="relative h-[240px] sm:h-[260px] md:h-[280px] lg:h-[320px] overflow-hidden rounded-t-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="absolute top-0 left-0 bg-[#E85988] text-white w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] flex items-center justify-center font-bold text-xl sm:text-2xl z-10 shadow-lg"
                  style={{ fontFamily: 'serif' }}
                >
                  {service.id}
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="absolute top-[65%] sm:top-[68%] md:top-[70%] left-0 right-0 bg-[#0052A3] text-white px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-4 mx-3 sm:mx-4 h-auto min-h-[180px] max-h-[260px] flex flex-col shadow-2xl rounded-lg overflow-y-auto"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold font-urbanist mb-2 sm:mb-3 italic border-b border-[#E85988] pb-2 sm:pb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-sm font-urbanist leading-relaxed flex-1">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center"
        >
          <motion.button
            onClick={onOpenFindStaffModal}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 82, 163, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-[#0052A3] text-white px-6 sm:px-8 py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300 text-center sm:min-w-[200px] shadow-xl"
          >
            Find Staff Today
          </motion.button>
          <motion.button
            onClick={onOpenCareerModal}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232, 89, 136, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-[#E85988] text-white px-6 sm:px-8 py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center sm:min-w-[200px] shadow-xl"
          >
            Start Your Career
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
