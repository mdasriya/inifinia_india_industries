import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import image1 from '../assets/img/whatsapp.png';

function Whatsapp() {
  return (
    <div>
      <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13 lg:pr-8 pr-2 fixed lg:left-[91%] lg:top-[80%] ssm:w-11 lg:w-[200px] ssm:left-[83%] ssm:top-[80%] z-50">
        <a
          rel="noopener noreferrer"
          href="https://wa.me/917875577000"
          title="WhatsApp"
          className="flex items-center justify-center sticky"
          target="_blank"
        >
          <img
            src={image1}
            className="w-10 md:w-10 h-auto  "
            alt="whatsapp-icon"
            loading="lazy"
          />
          {/* <FaWhatsapp /> */}
        </a>
      </div>
    </div>
  );
}

export default Whatsapp;
