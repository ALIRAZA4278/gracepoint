import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0052A3] py-5 sm:py-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          {/* Copyright */}
          <div>
            <p className="text-white font-urbanist text-xs sm:text-sm md:text-base text-center md:text-left">
              © 2025 Grace Point Medical Staffing. All Rights Reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center">
            <Link
              href="/terms"
              className="text-white font-urbanist text-xs sm:text-sm md:text-base hover:text-gray-200 transition-colors"
            >
              Terms & Condition
            </Link>
            <Link
              href="/privacy"
              className="text-white font-urbanist text-xs sm:text-sm md:text-base hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-white font-urbanist text-xs sm:text-sm md:text-base hover:text-gray-200 transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/hipaa"
              className="text-white font-urbanist text-xs sm:text-sm md:text-base hover:text-gray-200 transition-colors"
            >
              Hipaa Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
