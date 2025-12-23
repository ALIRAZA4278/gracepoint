'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FindStaffModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    facilityName: '',
    contactPerson: '',
    phone: '',
    email: '',
    facilityLocation: '',
    positionType: '',
    numberOfPositions: '',
    assignmentType: '',
    startDate: '',
    lengthOfAssignment: '',
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
              Find Staff Today
            </h2>
            <p className="text-sm text-gray-600 font-urbanist mb-6">
              Need Qualified Staff? We&apos;re Here to Help! GracePoint Medical Staffing makes it easy for facilities to request skilled healthcare professionals. Fill out the form below, and one of our account managers will follow up promptly to confirm your needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Facility/Organization Name */}
              <div>
                <label htmlFor="facilityName" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Facility/Organization Name
                </label>
                <input
                  type="text"
                  id="facilityName"
                  name="facilityName"
                  value={formData.facilityName}
                  onChange={handleChange}
                  placeholder="Enter Facility/Organization Name Here"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                  required
                />
              </div>

              {/* Contact Person (First & Last Name) */}
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Contact Person (First & Last Name)
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Enter Your Full name Here"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                  required
                />
              </div>

              {/* Phone no. */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Phone no.
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

              {/* Facility Location/Address */}
              <div>
                <label htmlFor="facilityLocation" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Facility Location/Address
                </label>
                <input
                  type="text"
                  id="facilityLocation"
                  name="facilityLocation"
                  value={formData.facilityLocation}
                  onChange={handleChange}
                  placeholder="Enter Address Here"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                />
              </div>

              {/* Type of Position Needed */}
              <div>
                <label htmlFor="positionType" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Type of Position Needed
                </label>
                <select
                  id="positionType"
                  name="positionType"
                  value={formData.positionType}
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

              {/* Number of Positions */}
              <div>
                <label htmlFor="numberOfPositions" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Number of Positions
                </label>
                <select
                  id="numberOfPositions"
                  name="numberOfPositions"
                  value={formData.numberOfPositions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors text-gray-500 appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230052A3%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-4 bg-[length:12px_8px] pr-10"
                >
                  <option value="">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="5+">5+</option>
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

              {/* Start Date Needed */}
              <div>
                <label htmlFor="startDate" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Start Date Needed
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors"
                  />
                </div>
              </div>

              {/* Length of Assignment */}
              <div>
                <label htmlFor="lengthOfAssignment" className="block text-sm font-semibold font-urbanist text-gray-900 mb-2">
                  Length of Assignment
                </label>
                <select
                  id="lengthOfAssignment"
                  name="lengthOfAssignment"
                  value={formData.lengthOfAssignment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md font-urbanist text-sm focus:outline-none focus:border-[#0052A3] focus:ring-1 focus:ring-[#0052A3] transition-colors text-gray-500 appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230052A3%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-4 bg-[length:12px_8px] pr-10"
                >
                  <option value="">(One shift, One week, 30 days, Ongoing, Other)</option>
                  <option value="one-shift">One shift</option>
                  <option value="one-week">One week</option>
                  <option value="30-days">30 days</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="other">Other</option>
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

export default FindStaffModal;
