import React, { useState } from 'react';

const OtpPage = () => {
  // State to store the OTP input and any error message
  const [formData, setFormData] = useState({
    otp: '',
  });
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle OTP submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: Check if OTP is 6 digits
    if (formData.otp.length === 6 && /^\d+$/.test(formData.otp)) {
      setError('');
      setIsSubmitted(true);
      // Simulate OTP verification
      setTimeout(() => {
        alert('OTP Verified!');
      }, 1000);
    } else {
      setError('OTP must be a 6-digit number');
    }
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Verify OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
              Please Enter OTP (One-Time Password)
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              maxLength={6}
              placeholder="Enter 6-digit OTP"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {isSubmitted ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        </form>

        <div className="text-center text-sm mt-4">
          {isSubmitted ? (
            <p className="text-green-500">OTP Verified successfully!</p>
          ) : (
            <p className="text-gray-500">
              Didn't receive the OTP? <a href="#" className="text-blue-500">Resend</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
