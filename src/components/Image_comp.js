import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../assets/img/full.jpg";

const ImageComp = ({ image }) => {
  return (
    <div className="relative w-full h-auto mt-8 ssm:p-2 ssm:h-[230px] lg:h-[550px]">
      <img className="block w-full h-full" src={image1} alt='why partner with infinia' />
      <Link to="/contact">
        <button 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#212121] ssm:w-auto hover:bg-[rgba(105,105,105,0.5)] rounded-md backdrop-blur-md transition text-white py-1 px-2  lg:ml-[5px]"
        >
          Join our Network
        </button>
      </Link>
    </div>
  );
};

export default ImageComp;



