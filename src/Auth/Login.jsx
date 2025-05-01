import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clickHandler = () => {
    console.log(formData);
  };

  const gotoRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={clickHandler}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
        >
          Submit
        </button>
        <p className="text-center mt-4 text-gray-600">
          New user? 
          <button 
            onClick={gotoRegister} 
            className="text-green-500 hover:underline ml-1"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
