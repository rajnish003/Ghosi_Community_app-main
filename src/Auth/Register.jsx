import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
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

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg flex flex-col items-center my-2">
      <h1 className="text-4xl font-serif font-extrabold text-green-600 mb-4">Register for Matrimonial Profile</h1>
      <p className="text-gray-600 text-center mb-6">Please provide your basic information for registration</p>
      <div className="flex w-full items-center">
        <div className="w-1/2 p-5">
          <img src="/image/matrimonial_home.png" alt="man image" className="w-full h-full rounded-lg" />
        </div>
        <div className="w-1/2 p-5">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <button onClick={() => setStep(2)} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Continue</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <input type="date" name="dob" placeholder="Date Of Birth" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <input type="text" name="motherTongue" placeholder="Mother Tongue" value={formData.motherTongue} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <input type="text" name="gotra" placeholder="Gotra" value={formData.gotra} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <button onClick={() => setStep(1)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Back</button>
              <button onClick={() => setStep(3)} className="bg-green-500 text-white px-4 py-2 rounded">Continue</button>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Family Information</h2>
              <input type="text" name="height" placeholder="Height" value={formData.height} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <div className="mb-2">
                <label>Family Status:</label>
                {["Middle Class", "Upper Middle Class", "High Class", "Rich/Affluent"].map((status) => (
                  <label key={status} className="block"><input type="radio" name="familyStatus" value={status} onChange={handleChange} /> {status}</label>
                ))}
              </div>
              <div className="mb-2">
                <label>Family Type:</label>
                {["Joint", "Nuclear"].map((type) => (
                  <label key={type} className="block"><input type="radio" name="familyType" value={type} onChange={handleChange} /> {type}</label>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Back</button>
              <button onClick={() => setStep(4)} className="bg-green-500 text-white px-4 py-2 rounded">Continue</button>
            </div>
          )}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Professional Information</h2>
              <input type="text" name="education" placeholder="Highest Education" value={formData.education} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <select name="employedIn" value={formData.employedIn} onChange={handleChange} className="w-full p-2 border rounded mb-2">
                <option value="">Select Employment</option>
                {["Government/PSU", "Private", "Business", "Defence", "Self Employed", "Not Working"].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <input type="text" name="salary" placeholder="Annual Salary" value={formData.salary} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
              <button onClick={() => setStep(3)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Back</button>
              <button onClick={() => setStep(5)} className="bg-green-500 text-white px-4 py-2 rounded">Continue</button>
            </div>
          )}
          {step === 5 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Additional Information</h2>
              <textarea name="additionalInfo" placeholder="Write here..." value={formData.additionalInfo} onChange={handleChange} className="w-full p-2 border rounded mb-2"></textarea>
              <button onClick={() => setStep(4)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Back</button>
              <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;