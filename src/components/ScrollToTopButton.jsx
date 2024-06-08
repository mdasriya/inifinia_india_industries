import React, { useState, useEffect } from 'react';
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed animate-bounce bottom-6 right-6 z-50 bg-[#E99C41] hover:bg-teal-600 text-white  p-3 transition-opacity duration-300 rounded-full ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      <IoMdArrowUp size={25} />
    </button>
  );
};

export default ScrollToTopButton;
