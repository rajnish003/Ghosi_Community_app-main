import React, { useState } from 'react';

const BecomeaMember = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dobAge: '',
    area: '',
    district: '',
    pinCode: '',
    state: '',
    country: '',
    education: '',
    occupation: '',
    mobile: '',
    email: '',
    maritalStatus: '',
    familyMembers: '',
    volunteer: '',
    volunteerSkills: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          dobAge: '',
          area: '',
          district: '',
          pinCode: '',
          state: '',
          country: '',
          education: '',
          occupation: '',
          mobile: '',
          email: '',
          maritalStatus: '',
          familyMembers: '',
          volunteer: '',
          volunteerSkills: '',
          additionalInfo: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-500 mb-2">Join Our Community</h1>
          <p className="text-lg text-green-600">Fill out the form below to become a member</p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Form Header */}
          <div className="bg-green-500 text-white p-6">
            <h2 className="text-2xl font-bold">Membership Application</h2>
            <p className="text-green-100">Please provide your details accurately</p>
          </div>

          {/* Form Body */}
          <div className="p-6 space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-green-500 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Personal Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Date of Birth / Age <span className="text-red-500">*</span></label>
                  <input
                    name="dobAge"
                    value={formData.dobAge}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Area of Residence <span className="text-red-500">*</span></label>
                <div className="mt-2 flex flex-wrap gap-4">
                  {['Rural', 'Urban', 'Semi-Urban'].map((type) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="area"
                        value={type}
                        onChange={handleChange}
                        checked={formData.area === type}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                        required
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">District</label>
                  <input
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-300 focus:border-green-500 transition duration-150"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Pin Code</label>
                  <input
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>
              </div>
            </div>

            {/* Education & Occupation Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-green-500 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Educational & Occupational Details
                </h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Highest Education Qualification <span className="text-red-500">*</span></label>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['No Formal Education', 'Primary (Up to Class 5)', 'Secondary (Class 6-10)', 'Higher Secondary (Class 11-12)', 'Diploma', 'Undergraduate', 'Postgraduate', 'Doctorate (PhD)'].map((edu) => (
                      <label key={edu} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="education"
                          value={edu}
                          onChange={handleChange}
                          checked={formData.education === edu}
                          className="h-4 w-4 text-green-500 focus:ring-green-300 border-gray-300"
                          required
                        />
                        <span className="ml-2 text-gray-700">{edu}</span>
                      </label>
                    ))}
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="education"
                        value="Other"
                        onChange={handleChange}
                        checked={formData.education === 'Other'}
                        className="h-4 w-4 text-green-300 focus:ring-green-300 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">Other:</span>
                      <input
                        name="education"
                        className="ml-2 border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-green-300 focus:border-green-300 flex-1"
                        onChange={handleChange}
                        disabled={formData.education !== 'Other'}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Occupation <span className="text-red-500">*</span></label>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Dairy Farming', 'Agriculture', 'Business', 'Government Job', 'Private Job', 'Doctor', 'Chartered Accountant (CA)', 'Engineer', 'Government Administrative Services'].map((job) => (
                      <label key={job} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="occupation"
                          value={job}
                          onChange={handleChange}
                          checked={formData.occupation === job}
                          className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300"
                          required
                        />
                        <span className="ml-2 text-gray-700">{job}</span>
                      </label>
                    ))}
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="occupation"
                        value="Other"
                        onChange={handleChange}
                        checked={formData.occupation === 'Other'}
                        className="h-4 w-4 text-green-500 focus:ring-green-300 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">Other:</span>
                      <input
                        name="occupationOther"
                        className="ml-2 border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-green-300 focus:border-green-300 flex-1"
                        onChange={handleChange}
                        disabled={formData.occupation !== 'Other'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-green-500 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Contact Details
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    type="tel"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-300 focus:border-green-300 transition duration-150"
                  />
                </div>
              </div>
            </div>

            {/* Family & Social Engagement Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-green-500 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  Family & Social Engagement
                </h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {['Married', 'Unmarried', 'Divorced'].map((status) => (
                      <label key={status} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value={status}
                          onChange={handleChange}
                          checked={formData.maritalStatus === status}
                          className="h-4 w-4 text-green-500 focus:ring-green-300 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Number of Family Members</label>
                  <input
                    name="familyMembers"
                    value={formData.familyMembers}
                    onChange={handleChange}
                    type="number"
                    min="1"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Would you like to volunteer for community service?</label>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {['Yes', 'No'].map((ans) => (
                      <label key={ans} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="volunteer"
                          value={ans}
                          onChange={handleChange}
                          checked={formData.volunteer === ans}
                          className="h-4 w-4 text-green-500 focus:ring-green-300 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">{ans}</span>
                      </label>
                    ))}
                  </div>
                  {formData.volunteer === 'Yes' && (
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700">Area of interest or skills</label>
                      <textarea
                        name="volunteerSkills"
                        value={formData.volunteerSkills}
                        onChange={handleChange}
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-green-500 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                  Additional Information
                </h3>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Suggestions, comments, or other details</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                />
              </div>
            </div>

            {/* Form Submission */}
            <div className="pt-6">
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Success! </strong>
                  <span className="block sm:inline">Your application has been submitted successfully.</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>We respect your privacy. Your information will not be shared with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default BecomeaMember;