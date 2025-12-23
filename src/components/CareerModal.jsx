'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CareerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    homeAddress: '',
    professionalTitle: '',
    licenseNumber: '',
    yearsExperience: '',
    assignmentType: '',
    preferredAssignment: '',
    preferredLocation: '',
    availability: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          ></motion.div>

          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-urbanist text-gray-900 mb-3">
              Start Your Career
            </h2>
            <p className="text-sm text-gray-600 font-urbanist mb-6">
              Take the Next Step in Your Healthcare Career. Whether you&apos;re looking for per diem shifts, travel opportunities, or long-term placements, GracePoint Medical Staffing connects you with positions that match your skills and goals. Apply below to join our network of professionals.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First & Last Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  First & Last Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Your Full name Here"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123-456-789"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="info@example.com"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                  required
                />
              </div>

              {/* Home Address */}
              <div>
                <label htmlFor="homeAddress" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Home Address
                </label>
                <input
                  type="text"
                  id="homeAddress"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={handleChange}
                  placeholder="(City, State, ZIP)"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                />
              </div>

              {/* Professional Title/Role */}
              <div>
                <label htmlFor="professionalTitle" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Professional Title/Role
                </label>
                <select
                  id="professionalTitle"
                  name="professionalTitle"
                  value={formData.professionalTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors text-gray-500 appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230052A3%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-4 bg-[length:12px_8px] pr-10"
                  required
                >
                  <option value="">(RN, LPN, CNA, Med Tech, etc.)</option>
                  <option value="rn">Registered Nurse (RN)</option>
                  <option value="lpn">Licensed Practical Nurse (LPN)</option>
                  <option value="cna">Certified Nursing Assistant (CNA)</option>
                  <option value="medtech">Medical Technician</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* License Number & State */}
              <div>
                <label htmlFor="licenseNumber" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  License Number & State
                </label>
                <input
                  type="text"
                  id="licenseNumber"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  placeholder="Enter Your License Number & State"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label htmlFor="yearsExperience" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Years of Experience
                </label>
                <select
                  id="yearsExperience"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black  border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors text-gray-500 appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230052A3%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-4 bg-[length:12px_8px] pr-10"
                >
                  <option value="">0</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              {/* Type of Assignment */}
              <div>
                <label htmlFor="assignmentType" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Type of Assignment
                </label>
                <select
                  id="assignmentType"
                  name="assignmentType"
                  value={formData.assignmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors text-gray-500 appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230052A3%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-4 bg-[length:12px_8px] pr-10"
                >
                  <option value="">(Per Diem, Travel, Contract, Temp-to-Hire, Direct Hire)</option>
                  <option value="per-diem">Per Diem</option>
                  <option value="travel">Travel</option>
                  <option value="contract">Contract</option>
                  <option value="temp-to-hire">Temp-to-Hire</option>
                  <option value="direct-hire">Direct Hire</option>
                </select>
              </div>

              {/* Preferred Assignment Type */}
              <div>
                <label htmlFor="preferredAssignment" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Preferred Assignment Type
                </label>
                <select
                  id="preferredAssignment"
                  name="preferredAssignment"
                  value={formData.preferredAssignment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors text-gray-500 appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230052A3%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-4 bg-[length:12px_8px] pr-10"
                >
                  <option value="">(Per Diem, Travel, Contract, Direct Hire)</option>
                  <option value="per-diem">Per Diem</option>
                  <option value="travel">Travel</option>
                  <option value="contract">Contract</option>
                  <option value="direct-hire">Direct Hire</option>
                </select>
              </div>

              {/* Preferred Location(s) */}
              <div>
                <label htmlFor="preferredLocation" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Preferred Location(s)
                </label>
                <input
                  type="text"
                  id="preferredLocation"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  placeholder="Location Here"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                />
              </div>

              {/* Upload Resume/CV */}
              <div>
                <label className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Upload Resume/CV
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Upload Here"
                    className="flex-1 px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                    readOnly
                  />
                  <button
                    type="button"
                    className="bg-[#E85988] text-white px-6 py-3 rounded font-urbanist font-semibold hover:bg-[#d14873] transition-colors text-sm whitespace-nowrap"
                  >
                    Browse
                  </button>
                </div>
              </div>

              {/* Upload Certifications */}
              <div>
                <label className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Upload Certifications
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="(CPR License, etc.)"
                    className="flex-1 px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                    readOnly
                  />
                  <button
                    type="button"
                    className="bg-[#E85988] text-white px-6 py-3 rounded font-urbanist font-semibold hover:bg-[#d14873] transition-colors text-sm whitespace-nowrap"
                  >
                    Browse
                  </button>
                </div>
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors text-gray-500 appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230052A3%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-4 bg-[length:12px_8px] pr-10"
                >
                  <option value="">(Immediate, 2 Weeks, Flexible)</option>
                  <option value="immediate">Immediate</option>
                  <option value="2-weeks">2 Weeks</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Additional Notes or Requirements */}
              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Additional Notes or Requirements
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0052A3] text-white px-10 py-3 rounded-md text-base font-urbanist font-semibold hover:bg-[#003d7a] transition-all duration-300"
              >
                Submit Now
              </button>
            </form>
          </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CareerModal;
