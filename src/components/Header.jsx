import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-[#0052A3] text-white py-2 px-8">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="font-urbanist">Follow Us</span>
            <div className="flex gap-2">
              <Link href="#" className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0052A3] text-xs">in</span>
              </Link>
              <Link href="#" className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0052A3] text-xs">f</span>
              </Link>
              <Link href="#" className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0052A3] text-xs">X</span>
              </Link>
              <Link href="#" className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0052A3] text-xs">W</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href="tel:+921236574" className="flex items-center gap-2 hover:opacity-80">
              <span>📞</span>
              <span className="font-urbanist">+921 236 574 4</span>
            </Link>
            <Link href="mailto:info@gracepoint.com" className="flex items-center gap-2 hover:opacity-80">
              <span>✉️</span>
              <span className="font-urbanist">info@gracepoint.com</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Gracepoint Medical Staffing"
              width={200}
              height={80}
              className="h-20 w-auto"
            />
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="#about" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors">
              ABOUT US
            </Link>
            <Link href="#services" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors">
              SERVICES
            </Link>
            <Link href="#why-us" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors">
              WHY US?
            </Link>
            <Link href="#community" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors">
              COMMUNITY
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-[#E85988] font-urbanist font-medium transition-colors">
              CONTACT US
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link
              href="#find-staff"
              className="bg-[#0052A3] text-white px-6 py-3 rounded font-urbanist font-medium hover:bg-[#003d7a] transition-colors"
            >
              Find Staff Today
            </Link>
            <Link
              href="#start-career"
              className="bg-[#E85988] text-white px-6 py-3 rounded font-urbanist font-medium hover:bg-[#d14873] transition-colors"
            >
              Start Your Career
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
