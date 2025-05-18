import React, { useState } from 'react';

const Help= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    issueType: '',
    description: '',
    urgency: 'medium',
    attachments: null,
    contactMethod: 'email',
    phone: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Help request submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          issueType: '',
          description: '',
          urgency: 'medium',
          attachments: null,
          contactMethod: 'email',
          phone: '',
          preferredTime: ''
        });
      }, 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-600 mb-3">How Can We Help You?</h1>
          <p className="text-lg text-green-600">Fill out the form below and our support team will get back to you soon</p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Form Header */}
          <div className="bg-green-700 text-white p-6">
            <h2 className="text-2xl font-bold">Support Request Form</h2>
            <p className="text-green-100">We're here to help you with any questions or issues</p>
          </div>

          {/* Form Body */}
          <div className="p-6 space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-green-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Your Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">How should we contact you? <span className="text-red-500">*</span></label>
                <div className="mt-2 flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      onChange={handleChange}
                      checked={formData.contactMethod === 'email'}
                      className="h-4 w-4 accent-green-600 text-green-600 focus:ring-green-500 border-gray-300"
                      required
                    />
                    <span className="ml-2 text-gray-700">Email</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      onChange={handleChange}
                      checked={formData.contactMethod === 'phone'}
                      className="h-4 w-4 accent-green-600 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Phone</span>
                  </label>
                </div>
                {formData.contactMethod === 'phone' && (
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required={formData.contactMethod === 'phone'}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Issue Details */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-green-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Issue Details
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Subject <span className="text-red-500">*</span></label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Issue Type <span className="text-red-500">*</span></label>
                  <select
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  >
                    <option value="">Select an Help type</option>
                    <option value="Medical">Medical Help</option>
                    <option value="Job">Job Search Help</option>
                    <option value="Career">Career Guidance Help</option>
                    <option value="Government">Government Department Help</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Urgency Level</label>
                <div className="mt-2 flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value="low"
                      onChange={handleChange}
                      checked={formData.urgency === 'low'}
                      className="h-4 w-4 accent-green-600 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Low</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value="medium"
                      onChange={handleChange}
                      checked={formData.urgency === 'medium'}
                      className="h-4 w-4 accent-yellow-500 text-yellow-500 focus:ring-yellow-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Medium</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value="high"
                      onChange={handleChange}
                      checked={formData.urgency === 'high'}
                      className="h-4 w-4 accent-red-500 text-red-600 focus:ring-red-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">High</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value="critical"
                      onChange={handleChange}
                      checked={formData.urgency === 'critical'}
                      className="h-4 w-4 accent-red-800 text-red-800 focus:ring-red-800 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Critical</span>
                  </label>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Description of Issue <span className="text-red-500">*</span></label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  placeholder="Please describe your issue in detail..."
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Attachments (Optional)</label>
                <div className="mt-1 flex items-center">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                    <span>Upload a file</span>
                    <input 
                      name="attachments" 
                      type="file" 
                      onChange={handleChange} 
                      className="sr-only" 
                    />
                  </label>
                  <p className="pl-1 text-sm text-gray-500">{formData.attachments?.name || 'No file chosen'}</p>
                </div>
                <p className="mt-1 text-xs text-gray-500">You can upload screenshots or documents related to your issue (Max 5MB)</p>
              </div>
            </div>

            {/* Preferred Contact Time */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-green-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Preferred Contact Time (Optional)
                </h3>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Best time to contact you</label>
                <input
                  name="preferredTime"
                  type="text"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-150"
                  placeholder="e.g. Weekdays 9am-5pm, Evenings after 7pm, etc."
                />
              </div>
            </div>

            {/* Form Submission */}
            <div className="pt-6">
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Thank you! </strong>
                  <span className="block sm:inline">Your support request has been submitted successfully. We'll get back to you soon.</span>
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
                      Submitting...
                    </>
                  ) : (
                    'Submit Help Request'
                  )}
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Additional Help Options */}
        {/* Additional Help Options */}
<div className="mt-8 bg-white rounded-lg shadow-md p-6">
  <h3 className="text-xl font-semibold text-green-800 mb-4">Other Ways to Get Help</h3>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <h4 className="font-medium text-gray-800">Call Us</h4>
      <p className="text-sm text-gray-600 mt-1">+91 1234567890</p>
      <p className="text-xs text-gray-500">Mon-Fri, 9am-6pm EST</p>
    </div>
    <button
     onClick={() => window.open('https://wa.me/919876543210?text=Hello%20I%20need%20help', '_blank')}
    className="text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <h4 className="font-medium text-gray-800">WhatsApp Chat</h4>
      <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
      <div 
        
        className="mt-2 text-xs text-green-600 hover:text-green-800 font-medium"
      >
        Start Chat Now
      </div>
    </button>
    <div className="text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h4 className="font-medium text-gray-800">Knowledge Base</h4>
      <p className="text-sm text-gray-600 mt-1">Find answers instantly</p>
      <button className="mt-2 text-xs text-green-600 hover:text-green-800 font-medium">Browse Articles</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Help;