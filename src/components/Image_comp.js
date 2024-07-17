import React, { useState } from 'react';
import image1 from "../assets/img/full.jpg";
import image2 from "../assets/img/INFINIA_LOGO.png"
import { Link } from 'react-router-dom';

const ImageComp = ({ image }) => {


  return (
    <Link to="/contact">
    <div className="relative">
      <div 
        className="relative w-full h-auto mt-8 ssm:p-2 ssm:h-[230px] lg:h-[550px]"
      >
        <img className="block w-full h-full" src={image1} alt='why partner with infinia' />
      </div>
    </div>
    </Link>
  );
};

export default ImageComp;



