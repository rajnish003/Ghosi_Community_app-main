import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../api/Axios';
import Swal from 'sweetalert2';    //add  this line 
import withReactContent from 'sweetalert2-react-content'; //this

const MySwal = withReactContent(Swal);   //this

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/admin', formData);

      // Store the token
      localStorage.setItem('adminToken', response.data.token);

      //  Show success popup
      await MySwal.fire({
        title: 'Login Successful!',
        text: 'Welcome back, Admin!',
        icon: 'success',
        confirmButtonText: 'Go to Dashboard',
      });


      //  Redirect after popup
       navigate("/adminlogin/dashboard");
      
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Admin Login</h2>
        {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          This is only for Admin 
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;