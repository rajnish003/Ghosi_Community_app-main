import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../api/Axios";

const MySwal = Swal.mixin({
  customClass: {
    confirmButton: "bg-green-600 text-white px-4 py-2 rounded",
  },
  buttonsStyling: false,
});

const Register = () => {
  const navigate = useNavigate();  //  Move hook to top level

  const [step, setStep] = useState(1);
  const [Error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    motherTongue: "",
    gotra: "",
    height: "",
    familyStatus: "",
    familyType: "",
    education: "",
    employedIn: "",
    occupation: "",
    salary: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/register', formData);

      localStorage.setItem('adminToken', response.data.token);

      await MySwal.fire({
        title: 'Register Successful!',
        text: 'Thanks for Registering!',
        icon: 'success',
        confirmButtonText: 'Go to Dashboard',
      });

      navigate("/adminlogin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || 'SignUp failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen  bg-[#ffffff] py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white font-serif">
            Register for Matrimonial Profile
          </h1>
          <p className="text-blue-100 mt-2">
            Please provide your information step by step
          </p>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step === stepNumber
                      ? "bg-[#fff] dark:text-blue-700"
                      : step > stepNumber
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {stepNumber}
                </div>
                <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                  Step {stepNumber}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 md:flex">
          {/* Image - Hidden on mobile */}
          <div className="hidden md:block md:w-1/3 lg:w-1/2 p-4">
            <img
              src="/image/matrimonial_home.png"
              alt="Wedding illustration"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Form */}
          <div className="w-full md:w-2/3 lg:w-1/2 md:pl-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Personal Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Mother Tongue
                    </label>
                    <input
                      type="text"
                      name="motherTongue"
                      value={formData.motherTongue}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Gotra
                    </label>
                    <input
                      type="text"
                      name="gotra"
                      value={formData.gotra}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Family Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Height (cm)
                    </label>
                    <input
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Family Status
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Middle Class", "Upper Middle Class", "High Class", "Rich/Affluent"].map(
                        (status) => (
                        <div key={status} className="flex items-center">
                          <input
                            id={`status-${status}`}
                            type="radio"
                            name="familyStatus"
                            value={status}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`status-${status}`}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {status}
                          </label>
                        </div>
                      )
                    )}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Family Type
                    </label>
                    <div className="flex gap-4">
                      {["Joint", "Nuclear"].map((type) => (
                        <div key={type} className="flex items-center">
                          <input
                            id={`type-${type}`}
                            type="radio"
                            name="familyType"
                            value={type}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`type-${type}`}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Professional Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Highest Education
                    </label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Employed In
                    </label>
                    <select
                      name="employedIn"
                      value={formData.employedIn}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">Select Employment</option>
                      {["Government/PSU", "Private", "Business", "Defence", "Self Employed", "Not Working"].map(
                        (option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Occupation
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Annual Salary
                    </label>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Additional Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      About Yourself/Family
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write about yourself, family background, expectations, etc."
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Back
                </button>
              )}
              {step < 5 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 ml-auto"
                >
                  Submit Registration
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;