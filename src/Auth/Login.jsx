import  { useState } from 'react';
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
    navigate("/registerform");
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-50">
      <form className="max-w-sm mx-auto w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
        
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            placeholder="name@example.com"
            required
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Your password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            required
          />
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-2 focus:ring-green-300"
            />
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-600">Remember me</label>
          </div>
          <button 
            type="button"
            className="text-sm text-green-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
        
        <button
          type="button"
          onClick={clickHandler}
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-colors duration-200"
        >
          Sign In
        </button>
        
        <p className="text-center mt-6 text-sm text-gray-600">
          Don&apos;t have an account? 
          <button 
            type="button"
            onClick={gotoRegister} 
            className="text-green-600 hover:underline ml-1 font-medium"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;