import { useState } from 'react';
import bgImage from '../assets/matrimonial_home.png'
import { useNavigate } from 'react-router-dom';


const Registerform = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: ''
  });
  console.log(bgImage);

  const [errors, setErrors] = useState({
    passwordMatch: false,
    passwordLength: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate password match in real-time
    if (name === 'confirmPassword' || name === 'password') {
      setErrors(prev => ({
        ...prev,
        passwordMatch: formData.password !== value && name === 'confirmPassword',
        passwordLength: formData.password.length < 8 && name === 'password'
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };
 const navigate = useNavigate();
  const otpPageNavigate =()=>{
    navigate("/otp")
  }

  return (
  <div className="min-h-screen py-20 bg-gray-50 mt-2 ">
    <div className="max-w-5xl mx-auto flex bg-white shadow-md overflow-hidden rounded-2xl">
      
      {/* Image Section */}
      <div
        className="hidden lg:block h-auto lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* <div className="h-full flex items-center justify-center">
          <div className="text-white px-12 mt-30">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-800 via-gray-500 to-green-800 text-transparent bg-clip-text">
              Join Our Community
            </h1>
            <p className="text-xl bg-gradient-to-r from-green-500 via-gray-700 to-green-700 text-transparent bg-clip-text">
              Start your journey with us and discover amazing features.
            </p>
          </div>
        </div> */}
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
      <h2 className="text-3xl font-bold  mb-6 bg-gradient-to-r from-green-800 via-gray-500 to-green-800 text-transparent bg-clip-text">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.passwordLength ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                required
              />
              {errors.passwordLength && (
                <p className="mt-1 text-sm text-red-600">Password must be at least 8 characters</p>
              )}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.passwordMatch ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                required
              />
              {errors.passwordMatch && (
                <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
              )}
            </div>
            
            {/* <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                OTP (One-Time Password)
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
             */}
            <div>
      <button
      onClick={otpPageNavigate}
          type="submit"
          className="text-white font-bold bg-gradient-to-r from-green-800 via-gray-500 to-green-800 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300  rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:green-blue-700 dark:focus:ring-green-800"
        >
          Sign up
        </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-green-600 hover:text-green-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Registerform;