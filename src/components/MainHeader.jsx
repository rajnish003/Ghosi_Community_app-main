import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer'; // Import Footer Component

const MainHeader = () => {
  return (
    <div className=''>
      <Header />
      <Navbar />
      
      <Outlet></Outlet>
    </div>
  );
};

export default MainHeader;
