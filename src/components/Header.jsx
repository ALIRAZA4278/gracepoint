'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ onOpenCareerModal, onOpenFindStaffModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar - Social & Contact */}
      <div className="bg-[#0052A3] text-white py-1.5 sm:py-2 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          {/* Social Media - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            <span className="font-urbanist text-xs md:text-sm font-medium">Follow Us:</span>
            <div className="flex gap-2">
              <Link
                href="https://www.instagram.com/gracepointstaffing/"
                target="_blank"
                className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0052A3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/people/Quality-Care-Senior-Living/61585888921260/"
                target="_blank"
                className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0052A3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Info - Always visible */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-end">
            <Link href="tel:+16789108466" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span className="font-urbanist font-medium">+1 (678) 910-8466</span>
            </Link>
            <Link href="mailto:info@gracepoint.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="font-urbanist font-medium">info@gracepoint.com</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-2 md:py-3 flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Gracepoint Medical Staffing"
              width={200}
              height={80}
              className="h-12 md:h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/#about" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors scroll-smooth text-sm xl:text-base">
              ABOUT US
            </Link>
            <Link href="/#services" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors scroll-smooth text-sm xl:text-base">
              SERVICES
            </Link>
            <Link href="/#partner" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors scroll-smooth text-sm xl:text-base">
              WHY US?
            </Link>
            <Link href="/#community" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors scroll-smooth text-sm xl:text-base">
              COMMUNITY
            </Link>
            <Link href="/#contact" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors scroll-smooth text-sm xl:text-base">
              CONTACT US
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex gap-3 lg:gap-4">
            <button
              onClick={onOpenFindStaffModal}
              className="bg-[#0052A3] text-white px-4 lg:px-6 py-2 lg:py-3 rounded font-urbanist font-medium hover:bg-[#003d7a] transition-colors text-xs lg:text-sm whitespace-nowrap"
            >
              Find Staff Today
            </button>
            <button
              onClick={onOpenCareerModal}
              className="bg-[#E85988] text-white px-4 lg:px-6 py-2 lg:py-3 rounded font-urbanist font-medium hover:bg-[#d14873] transition-colors text-xs lg:text-sm whitespace-nowrap"
            >
              Start Your Career
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-[#E85988] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="py-4 px-4 space-y-3"
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/#about"
                    className="block py-2 text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT US
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link
                    href="/#services"
                    className="block py-2 text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SERVICES
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/#partner"
                    className="block py-2 text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    WHY US?
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="/#community"
                    className="block py-2 text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    COMMUNITY
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/#contact"
                    className="block py-2 text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONTACT US
                  </Link>
                </motion.div>

            {/* Social Media Icons in Mobile Menu */}
            <div className="pt-3 border-t border-gray-200">
              <p className="text-gray-800 font-urbanist text-sm font-medium mb-3">Follow Us:</p>
              <div className="flex gap-3 justify-center">
                <Link
                  href="https://www.instagram.com/gracepointstaffing/"
                  target="_blank"
                  className="w-10 h-10 bg-[#0052A3] rounded-full flex items-center justify-center hover:bg-[#003d7a] transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/people/Quality-Care-Senior-Living/61585888921260/"
                  target="_blank"
                  className="w-10 h-10 bg-[#0052A3] rounded-full flex items-center justify-center hover:bg-[#003d7a] transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
              </div>
            </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-col gap-3 pt-3"
                >
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenFindStaffModal();
                    }}
                    className="bg-[#0052A3] text-white px-6 py-3 rounded font-urbanist font-medium hover:bg-[#003d7a] transition-colors text-center shadow-lg"
                  >
                    Find Staff Today
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenCareerModal();
                    }}
                    className="bg-[#E85988] text-white px-6 py-3 rounded font-urbanist font-medium hover:bg-[#d14873] transition-colors text-center shadow-lg"
                  >
                    Start Your Career
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </header>
  );
};

export default Header;
