import React from "react";

const Header = () => {
  return (
    <div className=" py-6 bg-green-500">
      <div className="flex flex-col md:flex-row items-center justify-around px-6 max-w-7xl mx-auto space-y-4 md:space-y-0">
        
        {/* Left Section (Logo) */}
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <img
            src="/image/logo.png"
            alt="Logo"
            className="h-18 w-19 mb-2 md:mb-0 md:mr-3 rounded-full"
          />
          {/* <span className="text-lg font-bold text-[#fa2a2a] text-center md:text-left">
            Ghoshi <br /> Community
          </span> */}
        </div>

        {/* Title Section (Text) */}
        <div className="text-center md:text-left">
          <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ffff]">
            Welcome to Ghosi Community Website
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-[#ffff]">
            <p>گھوسی کمیونٹی کی ویب سائٹ پر خوش آمدید</p>
           
          </span>
        </div>

        {/* Right Section (Profile Icon) */}
        <div>
          <img
            src="/image/logo.png"
            alt="Profile Icon"
            className="h-18 w-19 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
