import React from 'react';
import Image from 'next/image';

const CommunitySection = ({ onOpenCareerModal, onOpenFindStaffModal }) => {
  const impacts = [
    {
      id: '01',
      description: 'Partner with healthcare training programs to support the next generation of caregivers'
    },
    {
      id: '02',
      description: 'Sponsor local job fairs and healthcare education initiatives'
    },
    {
      id: '03',
      description: 'Provide mentorship and career resources for new healthcare professionals'
    },
    {
      id: '04',
      description: 'Support underserved communities by ensuring access to skilled healthcare staff'
    }
  ];

  return (
    <section id="community" className="relative w-full overflow-visible pb-20 sm:pb-24 md:pb-32">
      <div
        className="absolute top-0 left-0 right-0 h-full md:h-[70%] z-0"
        style={{
          backgroundImage: "url('/home/communitybg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 sm:mb-12 md:mb-16 gap-6">
          <div className="lg:max-w-[600px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-urbanist text-white mb-3 sm:mb-4">
              Community Impact
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-urbanist text-white leading-relaxed border-l-4 border-white pl-3 sm:pl-4">
              GracePoint Medical Staffing is committed to making a difference not only in healthcare facilities but also in the communities we serve.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenFindStaffModal}
              className="bg-white text-[#0052A3] px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-gray-100 transition-all duration-300 text-center"
            >
              Find Staff Today
            </button>
            <button
              onClick={onOpenCareerModal}
              className="bg-[#E85988] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-urbanist font-semibold hover:bg-[#d14873] transition-all duration-300 text-center"
            >
              Start Your Career
            </button>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {impacts.map((impact) => (
            <div
              key={impact.id}
              className="relative bg-white p-5 sm:p-6 rounded shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <Image
                  src="/home/partnericon.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative">
                <h3 className="text-[#E85988] text-2xl sm:text-3xl font-bold font-urbanist mb-3 sm:mb-4">
                  {impact.id}
                </h3>
                <p className="text-gray-900 font-urbanist text-sm sm:text-base leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
