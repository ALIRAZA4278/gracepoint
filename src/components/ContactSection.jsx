'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full py-10 sm:py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/home/contactbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-urbanist text-[#0052A3] mb-3 sm:mb-4">
                CONTACT US
              </h2>
              <p className="text-lg sm:text-xl font-semibold font-urbanist text-gray-900 mb-4 sm:mb-6">
                Let's Do Something Great Together
              </p>
              <p className="text-sm sm:text-base font-urbanist text-gray-700 leading-relaxed">
                We're here to help — whether you're a facility looking for staff or a professional searching for your next role.
              </p>
            </motion.div>

            <div className="space-y-5 sm:space-y-6">
              {/* Phone */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 sm:gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <Image
                    src="/home/phone.png"
                    alt="Phone"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-urbanist text-gray-900 mb-1">
                    Phone:
                  </h3>
                  <a
                    href="tel:+9212365744"
                    className="text-sm sm:text-base font-urbanist text-gray-700 hover:text-[#0052A3] transition-colors"
                  >
                    +921 236 574 4
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 sm:gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <Image
                    src="/home/email.png"
                    alt="Email"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-urbanist text-gray-900 mb-1">
                    Email:
                  </h3>
                  <a
                    href="mailto:info@gracepoint.com"
                    className="text-sm sm:text-base font-urbanist text-gray-700 hover:text-[#0052A3] transition-colors break-all"
                  >
                    info@gracepoint.com
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 sm:gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <Image
                    src="/home/address.png"
                    alt="Address"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-urbanist text-gray-900 mb-1">
                    Address:
                  </h3>
                  <p className="text-sm sm:text-base font-urbanist text-gray-700 leading-relaxed">
                    GracePoint Medical Staffing 12 Unity Crescent<br />
                    East Legon, Accra, Ghana
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border-t-4 sm:border-t-[6px] border-[#0052A3] hover:shadow-[0_25px_50px_-12px_rgba(0,82,163,0.4)] transition-shadow duration-500"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-urbanist text-center text-gray-900 mb-6 sm:mb-8">
              Get Inquiry
            </h3>

            <form className="space-y-4 sm:space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold font-urbanist text-gray-900 mb-1.5 sm:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md font-urbanist text-sm sm:text-base focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold font-urbanist text-gray-900 mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@email.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md font-urbanist text-sm sm:text-base focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold font-urbanist text-gray-900 mb-1.5 sm:mb-2">
                  Phone no.
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="123-456-789"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md font-urbanist text-sm sm:text-base focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                />
              </div>

              {/* Dropdown */}
              <div>
                <label htmlFor="userType" className="block text-xs sm:text-sm font-semibold font-urbanist text-gray-900 mb-1.5 sm:mb-2">
                  I am a (Employer/Professional)
                </label>
                <select
                  id="userType"
                  name="userType"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md font-urbanist text-sm sm:text-base focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors text-gray-500 appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230052A3%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-3 sm:bg-right-4 bg-[length:10px_6px] sm:bg-[length:12px_8px] pr-8 sm:pr-10"
                >
                  <option value="">Employer/Professional</option>
                  <option value="employer">Employer</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold font-urbanist text-gray-900 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message/inquiry here....."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md font-urbanist text-sm sm:text-base focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0052A3] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300"
              >
                Submit Now
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
