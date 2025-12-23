'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState('info-collect');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="grow">
      {/* Hero Section */}
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/communitybg.png')",
          }}
        ></div>

        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-urbanist text-white text-center">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveSection('info-collect')}
                  className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 font-urbanist font-semibold text-sm sm:text-base md:text-lg rounded transition-colors ${
                    activeSection === 'info-collect' ? 'bg-[#0052A3] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Information We Collect
                </button>
                <button
                  onClick={() => setActiveSection('how-use')}
                  className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 font-urbanist font-semibold text-sm sm:text-base md:text-lg rounded transition-colors ${
                    activeSection === 'how-use' ? 'bg-[#0052A3] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  How We Use Your Data
                </button>
                <button
                  onClick={() => setActiveSection('data-sharing')}
                  className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 font-urbanist font-semibold text-sm sm:text-base md:text-lg rounded transition-colors ${
                    activeSection === 'data-sharing' ? 'bg-[#0052A3] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Data Sharing & Third Parties
                </button>
                <button
                  onClick={() => setActiveSection('data-security')}
                  className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 font-urbanist font-semibold text-sm sm:text-base md:text-lg rounded transition-colors ${
                    activeSection === 'data-security' ? 'bg-[#0052A3] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Data Security & Storage
                </button>
                <button
                  onClick={() => setActiveSection('your-rights')}
                  className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 font-urbanist font-semibold text-sm sm:text-base md:text-lg rounded transition-colors ${
                    activeSection === 'your-rights' ? 'bg-[#0052A3] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Your Rights & HIPAA Compliance
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                <strong>Effective Date:</strong> December 21, 2025
              </p>

          {/* Information We Collect */}
          {activeSection === 'info-collect' && (
          <div id="info-collect" className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              At Grace Point, we understand that privacy is of the utmost importance, especially when it involves the health and safety of your loved ones. We collect a comprehensive range of personal and sensitive health information to ensure we can provide the highest standard of healthcare staffing and compassionate. This includes, but is not limited to, Identity Data such as full legal names, dates of birth, social security numbers where required for insurance, and government-issued identification for both the care recipient and their legal guardians. We also collect Contact Data including physical home addresses, billing addresses, personal email accounts, and multiple emergency contact phone numbers.
            </p>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              Most critically, we collect Protected Health Information (PHI) which encompasses detailed medical histories, current medication lists, dietary restrictions, mobility limitations, psychological assessments, and specific physician instructions. Additionally, when you navigate our digital platform, we may automatically collect Technical Data such as your IP address, browser type, and time-zone settings, alongside Financial Data required to process secure payments via encrypted third-party gateways. All of this data is collected through our intake forms, website cookies, and direct consultations, and is used strictly to facilitate a safe, effective, and professional matching process between our qualified caregivers and your family members, ensuring that every transition into care is handled with dignity, accuracy, and legal compliance.
            </p>
          </div>
          )}

          {/* How We Use Your Data */}
          {activeSection === 'how-use' && (
          <div id="how-use" className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              How We Use Your Data
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Match qualified caregivers with clients based on specific care needs and preferences
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Process billing and payment transactions securely
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Communicate important updates regarding care schedules, caregiver assignments, and service changes
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Comply with legal and regulatory requirements including HIPAA
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Improve our services through analysis of service delivery and client satisfaction
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Maintain accurate records for continuity of care and emergency situations
              </li>
            </ul>
          </div>
          )}

          {/* Data Sharing & Third Parties */}
          {activeSection === 'data-sharing' && (
          <div id="data-sharing" className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              Data Sharing & Third Parties
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              Grace Point does not sell, rent, or trade your personal information to third parties. However, we may share your information with:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Caregivers:</strong> Only the information necessary to provide quality care
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Healthcare Providers:</strong> With your consent, to coordinate care
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Payment Processors:</strong> To facilitate secure billing transactions
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Legal Authorities:</strong> When required by law or to protect the safety of individuals
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Insurance Companies:</strong> For billing and verification purposes with your authorization
              </li>
            </ul>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mt-2 sm:mt-3">
              All third parties with whom we share data are contractually obligated to maintain the same level of data protection and confidentiality.
            </p>
          </div>
          )}

          {/* Data Security & Storage */}
          {activeSection === 'data-security' && (
          <div id="data-security" className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              Data Security & Storage
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Encrypted data transmission using SSL/TLS protocols
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Secure, password-protected databases with restricted access
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Regular security audits and vulnerability assessments
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Employee training on HIPAA compliance and data protection
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Data retention policies that comply with legal requirements
              </li>
            </ul>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mt-2 sm:mt-3">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </div>
          )}

          {/* Your Rights & HIPAA Compliance */}
          {activeSection === 'your-rights' && (
          <div id="your-rights" className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              Your Rights & HIPAA Compliance
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              Under HIPAA and applicable privacy laws, you have the right to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Access:</strong> Request copies of your personal and health information
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Correction:</strong> Request corrections to inaccurate or incomplete information
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Restriction:</strong> Request limitations on how we use or disclose your information
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Confidential Communications:</strong> Request that we communicate with you in specific ways
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Accounting:</strong> Request a list of disclosures we have made
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Opt-Out:</strong> Withdraw consent for marketing communications at any time
              </li>
            </ul>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mt-2 sm:mt-3">
              To exercise any of these rights, please contact us at info@gracepoint.com or call +921 236 574 4.
            </p>

            {/* Cookies & Tracking Technologies */}
            <div className="mb-6 sm:mb-8 mt-6 sm:mt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              Cookies & Tracking Technologies
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              Our website uses cookies and similar tracking technologies to enhance user experience. These include:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Essential Cookies:</strong> Required for website functionality
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Functional Cookies:</strong> Remember your preferences and settings
              </li>
            </ul>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mt-2 sm:mt-3">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
              Grace Point Medical Staffing reserves the right to update this Privacy Policy at any time. We will notify you of any material changes by posting the new policy on our website with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-urbanist text-gray-900 mb-3 sm:mb-4">
              Contact Information
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Grace Point Medical Staffing</strong><br />
                12 Unity Crescent<br />
                East Legon, Accra, Ghana<br />
                <strong>Phone:</strong> +921 236 574 4<br />
                <strong>Email:</strong> info@gracepoint.com
              </p>
            </div>
            </div>
          </div>
          )}
          </div>
        </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
