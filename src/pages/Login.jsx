import React, { useState } from "react";

const Login = () => {
const [formData,setFormData]= useState({
    email:"",
    password:""
});
// console.log(formData);

function handleSubmit(event){
    event.preventDefault(); // this is prevent the defalt behaviour
    console.log("finally print the Entered data......");
    console.log(JSON.stringify(formData, null, 2));

    setFormData({
      email:"",
      password:""
    })
  }
const changeHandler = (event) => {
    const { name, value } = event.target; // Get 'name' and 'value' from the input field
    setFormData((prevFormData) => ({
      ...prevFormData, // Preserve the previous state
      [name]: value,   // Update the specific field (email or password)
    }));
   
  };


  return (
    <div 
    className="flex items-center justify-center min-h-screen bg-gray-100"
    style={{
        backgroundImage: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)",
        backgroundSize: "cover",
        minHeight: "100vh"
      }}
   >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 bg-fixed mt-[-195px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email ID"
              value={formData.email}
            //   onChange={(e) => setEmail(e.target.value)}
                onChange={changeHandler}  
              className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
            //   onChange={(e) => setPassword(e.target.value)}
            onChange={changeHandler}
              className="w-full p-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/becomeaMemeber" className="text-blue-500 hover:underline">
           Become a Member
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
