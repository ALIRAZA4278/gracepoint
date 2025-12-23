import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AccessibilityPage = () => {
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
            Accessibility Statement
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
            Grace Point is committed to its policy that persons with disabilities have a full and equal opportunity to benefit from the goods, services, privileges, advantages, and accommodations offered by Grace Point. In keeping with that policy, Grace Point has implemented and maintains compliance with the relevant portions of the World Wide Web Consortium&apos;s Web Content Accessibility Guidelines 2.0 Level AA (WCAG 2.0 AA) as well as state and federal accessibility requirements.
          </p>

          <p className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
            As part of this commitment, we are continually improving our website to make it more accessible. If you encounter any difficulty using our website, have suggestions about improving the usability or accessibility of the website, or would like to know more about Grace Point commitment to accessibility, please contact our accessibility team by email using the contact information below.
          </p>

          <p className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2">
            <strong>Email:</strong> grace@gracepoint.com
          </p>

          <p className="text-gray-900 font-urbanist text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            <strong>Phone:</strong> 703-273-7500 (request to speak with our legal department)
          </p>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;
