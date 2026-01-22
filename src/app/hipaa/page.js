'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const HipaaPage = () => {
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
            HIPAA Policy
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

          {/* Resident Privacy Information */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 sm:mb-10 md:mb-12 bg-white/50 backdrop-blur-sm  transition-shadow duration-300"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              Resident Privacy Information
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
              Sunrise Senior Living is strongly committed to protecting your health information. Our Notice of Privacy Practices describes how we may use and disclose your protected health information to carry out treatment, payment or healthcare operations and for other purposes that are permitted or required by law. It also describes your rights to access and control your protected health information. Protected health information is information about you that may identify you and that relates to your past, present, or future physical or mental health or condition and related healthcare services.
            </p>
          </motion.div>

          {/* HIPAA and What It Means to You */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-10 md:mb-12 bg-white/50 backdrop-blur-sm  transition-shadow duration-300"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              HIPAA and What It Means to You
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              The Health Insurance Portability and Accountability Act (&quot;HIPAA&quot;) became a federal law in 1996. HIPAA is complex and has many components. Two major areas addressed by HIPAA include:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Privacy: It provides rules regarding how your health information may be used and disclosed
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Security: It requires specific security measures to protect health information that is sent or stored electronically
              </li>
            </ul>
          </motion.div>

          {/* What do you do if you have any questions */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 sm:mb-10 md:mb-12 bg-white/50 backdrop-blur-sm  transition-shadow duration-300"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              What do you do if you have any questions or would like further information?
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              If you have a question about our Notice of Privacy Practices or would like further information, please contact your Executive Director or the Corporate Privacy Officer at the address listed below:
            </p>
            <div className="bg-[#0052A3]/5 p-4 sm:p-5 rounded-lg mb-4 sm:mb-6 ">
              <div className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base leading-relaxed space-y-1">
                <p><strong>Grace Point Medical Staffing</strong></p>
                <p>Attn: Corporate Privacy Officer</p>
                <p>2033 Sombrero Way SE,</p>
                <p>Atlanta, GA 30316</p>
                <p><strong>Phone:</strong> +1 (678) 910-8466</p>
                <p><strong>Email:</strong> info@gracepoint.com</p>
              </div>
            </div>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              <strong>Below are our Notices of Privacy Practices:</strong>
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Sunrise Senior Living Notice of Privacy Practices List of Covered Communities
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Quality Care Notice of Privacy Practices
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                List of Covered Communities
              </li>
            </ul>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm  transition-shadow duration-300"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              About Us
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">The Sunrise Story</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Mission & Values</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Leadership</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Locations</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Awards</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Pay Your Bill</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Referral Program</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Contact Us</li>
            </ul>
          </motion.div>

          {/* Careers at Sunrise */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm  transition-shadow duration-300"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              Careers at Sunrise
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Life at Quality Care</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Benefits at Quality Care</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Hiring Process</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Roles at Quality Care</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">For Team Members</li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">Careers at Quality Care</li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200 bg-[#0052A3]/5 p-4 sm:p-6 rounded-lg shadow-lg"
          >
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
              If you have questions regarding these Terms of Use, please contact us at Email: <a href="mailto:info@gracepoint.com" className="text-[#0052A3] hover:underline font-semibold">info@gracepoint.com</a> Phone: +1 (678) 910-8466
            </p>
          </motion.div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default HipaaPage;
