import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
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
            Terms & Condition
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Effective Date */}
          <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            <strong>Effective Date:</strong> December 21, 2025
          </p>

          {/* 1. Services Provided */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              1. Services Provided
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
              Grace Point ("the Company") is a healthcare staffing agency that recruits, screens, and assigns qualified caregivers, nurses, and home health aides to provide non-medical or medical support to elderly clients. Our services include, but are not limited to, [Daily Living Assistance, Nursing Care, and Companionship].
            </p>
          </div>

          {/* 2. Nature of Relationship */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              2. Nature of Relationship
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Agency Role:</strong> Grace Point acts as the employer or legal agent of the caregiver.
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>No Direct Hire (Non-Solicitation):</strong> By using our services, the Client agrees not to privately hire or contract any caregiver introduced by Grace Point for a period of [e.g., 12 months] following the termination of our services. Breach of this clause may result in a placement fee of $[Insert Amount].
              </li>
            </ul>
          </div>

          {/* 3. Client Responsibilities */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              3. Client Responsibilities
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              To ensure the safety and quality of care, the Client agrees to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Provide a safe and sanitary working environment for the staff.
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Disclose all relevant medical conditions, allergies, and behavioral history of the care recipient.
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Ensure that a primary point of contact is available for emergencies.
              </li>
            </ul>
          </div>

          {/* 4. Care Plans & Medical Decisions */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              4. Care Plans & Medical Decisions
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Scope of Care:</strong> Caregivers will perform duties strictly outlined in the "Plan of Care" agreed upon during the intake process.
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Medical Emergency:</strong> In the event of a medical emergency, caregivers are instructed to call 911 or local emergency services first. The Company is not an emergency response dispatch.
              </li>
            </ul>
          </div>

          {/* 5. Billing & Payment Terms */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              5. Billing & Payment Terms
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Invoicing:</strong> Services are billed on a [Weekly/Bi-weekly] basis.
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Late Fees:</strong> Payments not received within [7] days of the invoice date may be subject to a late fee.
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Minimum Shifts:</strong> A minimum of [e.g., 4 hours] per visit is required unless otherwise negotiated.
              </li>
            </ul>
          </div>

          {/* 6. Cancellation Policy */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              6. Cancellation Policy
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Service Cancellations:</strong> Clients must provide at least [24/48 hours] notice to cancel or reschedule a shift.
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                <strong>Late Cancellation Fee:</strong> Failure to provide sufficient notice will result in a charge equal to [50% or 100%] of the scheduled shift cost.
              </li>
            </ul>
          </div>

          {/* 7. Limitation of Liability & Insurance */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              7. Limitation of Liability & Insurance
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              Grace Point maintains professional liability insurance and workers' compensation for all staff. However, the Company shall not be held liable for:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Loss or damage to personal property within the home.
              </li>
              <li className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
                Injuries resulting from the Client's failure to disclose medical risks or provide necessary equipment (e.g., lifts, walkers).
              </li>
            </ul>
          </div>

          {/* 8. Confidentiality & HIPAA Compliance */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold font-urbanist text-gray-900 mb-2 sm:mb-3">
              8. Confidentiality & HIPAA Compliance
            </h2>
            <p className="text-gray-900 font-urbanist text-sm sm:text-base md:text-lg leading-relaxed">
              Grace Point complies with all applicable health privacy laws. We will protect the care recipient's Protected Health Information (PHI) and will not disclose it to third parties without written consent, except as required for treatment, payment, or healthcare operations.
            </p>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
