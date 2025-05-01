import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero_img = () => {
  const slides = [
    {
      id: 1,
      desktopSrc: "/image/Web_Photo_Editor.jpg",
      mobileSrc: "/image/mobile_view1.png",
    },
    {
      id: 2,
      desktopSrc: "/image/fImage1.jpg",
      mobileSrc: "/image/mobile_view2.png",
    },
    {
      id: 3,
      desktopSrc: "/image/Web_Photo_Editor3.jpg",
      mobileSrc: "/image/mobile_image3.png",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="w-full mx-auto mb-2">
      {/* Slideshow Container */}
      <div className="relative w-full h-[80vh] sm:h-[100vh] md:h-[40vh] lg:h-[90vh] overflow-hidden rounded-lg shadow-lg">

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Desktop Image */}
            <img
              src={slide.desktopSrc}
              alt={`Slide ${slide.id} - Desktop`}
              className="hidden sm:block w-full h-[85vh] object-cover object-center"
            />

            {/* Mobile Image */}
            <img
              src={slide.mobileSrc}
              alt={`Slide ${slide.id} - Mobile`}
              className="block sm:hidden w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition z-10"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition z-10"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-500 ${
              index === slideIndex ? "bg-blue-600 scale-110" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero_img;
