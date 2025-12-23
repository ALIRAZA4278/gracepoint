import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      id: '01',
      title: 'Per Diem Staffing',
      description: 'Last-minute coverage for shifts to ensure patient care is never interrupted.',
      image: '/home/service1.png',
    },
    {
      id: '02',
      title: 'Travel Assignments',
      description: 'Nationwide contracts for professionals seeking flexibility and adventure.',
      image: '/home/service2.png',
    },
    {
      id: '03',
      title: 'Contract & Temp-to-Hire',
      description: 'Short-term coverage with the option to extend or hire permanently.',
      image: '/home/service3.png',
    },
    {
      id: '04',
      title: 'Direct Hire Placement',
      description: 'Long-term staffing solutions for facilities looking to fill permanent roles.',
      image: '/home/service4.png',
    },
    {
      id: '05',
      title: 'Private Duty & Personal Care Staffing',
      description: 'Professional caregivers for in-home or private care settings.',
      image: '/home/service5.png',
    },
    {
      id: '06',
      title: 'Specialized Roles',
      description: 'Including RNs, LPNs, CNAs, Med Techs, Therapists, and healthcare administrative staff.',
      image: '/home/service6.png',
    },
  ];

  return (
    <section id="services" className="relative w-full py-16 md:py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/home/servicebg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-urbanist text-[#0052A3] mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg md:text-xl font-semibold font-urbanist text-gray-900 mb-4">
            Our Staffing Solutions
          </p>
          <p className="text-base md:text-lg font-urbanist text-gray-700 max-w-[900px] mx-auto">
            GracePoint offers flexible staffing solutions tailored to the unique needs of healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-visible shadow-lg hover:shadow-xl transition-all duration-300 mb-32"
            >
              <div className="relative h-[280px] md:h-[320px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 bg-[#E85988] text-white w-[60px] h-[60px] flex items-center justify-center font-bold text-2xl z-10" style={{ fontFamily: 'serif' }}>
                  {service.id}
                </div>
              </div>

              <div className="absolute top-[70%] left-0 right-0 bg-[#0052A3] text-white px-6 py-8 mx-4 h-[180px] flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold font-urbanist mb-3 italic border-b border-[#E85988] pb-3 inline-block">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base font-urbanist leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <Link
            href="#find-staff"
            className="bg-[#0052A3] text-white px-8 py-3 rounded text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300 text-center min-w-[200px]"
          >
            Find Staff Today
          </Link>
          <Link
            href="#start-career"
            className="bg-[#E85988] text-white px-8 py-3 rounded text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center min-w-[200px]"
          >
            Start Your Career
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
