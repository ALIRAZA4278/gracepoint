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
      <div className="bg-[#0052A3] text-white py-2.5 sm:py-3 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          {/* Social Media - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            <span className="font-urbanist text-xs md:text-sm font-medium">Follow Us:</span>
            <div className="flex gap-2">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0052A3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0052A3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0052A3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link
                href="https://whatsapp.com"
                target="_blank"
                className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0052A3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Info - Always visible */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-end">
            <Link href="tel:+9212365744" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span className="font-urbanist font-medium">+921 236 574 4</span>
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
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
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
                  href="https://instagram.com"
                  target="_blank"
                  className="w-10 h-10 bg-[#0052A3] rounded-full flex items-center justify-center hover:bg-[#003d7a] transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="w-10 h-10 bg-[#0052A3] rounded-full flex items-center justify-center hover:bg-[#003d7a] transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="w-10 h-10 bg-[#0052A3] rounded-full flex items-center justify-center hover:bg-[#003d7a] transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link
                  href="https://whatsapp.com"
                  target="_blank"
                  className="w-10 h-10 bg-[#0052A3] rounded-full flex items-center justify-center hover:bg-[#003d7a] transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
