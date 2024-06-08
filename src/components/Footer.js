import React from "react";
import Logo from "../assets/img/INFINIA_LOGO.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
  

<footer className="bg-[#f2eded] w-full">
  <DIV className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="-mt-[20px]">
        <div className="flex justify-center text-teal-600 sm:justify-start">
         <img src={Logo} width={"200px"} height={"200px"} />
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
        Infinia Industries Private Limited ,Central India's Largest manufacturer of Innovative sustainable building Solutions.
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
        
            <Link
              to="https://www.facebook.com/infinia.india.92/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-red hover:-translate-y-3 duration-500 "
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookSquare size={30} />
            </Link>
        

      
            <Link
              to="https://www.instagram.com/infiniaindia/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:-translate-y-3 duration-500  hover:text-teal-700/75 "
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram size={30}/>
            </Link>
       

          
            <Link
              to="https://www.youtube.com/@InfiniaIndia"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75 hover:-translate-y-3 duration-500 "
            >
              <span className="sr-only">Youtube</span>
              <FaYoutube size={30}/>
            </Link>
            <Link
              to="https://www.linkedin.com/in/team-infinia-a993a7233 "
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75 hover:-translate-y-3 duration-500 "
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin  size={30}/>
            </Link>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Dribbble</span>
             
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">About Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            
          <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="/about">
                Why us
              </a>
            </li>


            <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="/ecomagix">
                Brands
              </a>
            </li>

            <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="/contact"> Contact Us </a>
            </li>
            {/* <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
            </li> */}
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Our Products</p>

          <ul className="mt-8 space-y-4 text-sm">
          
          <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="/woodmagix"> WPC</a>
            </li>
            <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="/furniture"> RRP </a>
            </li>

           

            <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="/jails"> Terracotta </a>
            </li>
            {/* <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="https://www.infiniaindia.in/rrp-sheets.html"> Weatherproof Furniture </a>
            </li> */}
          
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="/privacy"> Privacy Policy  </a>
            </li>

            {/* <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="#"> Catalogue </a>
            </li>
            <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="#"> FAQs </a>
            </li>
            <li>
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="#"> Cookies Policy </a>
            </li> */}
            <li className="wrapper">
              <a className="fromleft text-gray-700 transition hover:text-gray-700/75" href="/contact"> Help </a>
            </li>

          
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Contact Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-1 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="20px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="flex-1 text-gray-700">care@infiniaindia.com</span>
              </a>
            </li>

            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="20px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="flex-1 text-gray-700">07875577000</span>
              </a>
            </li>

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                width="20px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address className="-mt-0.5 flex-1 not-italic text-gray-700 text-[15px]">
              Infinia House, 4Th Floor, Near Indora, Kamptee Rd, Nagpur, Maharashtra 440017
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">All rights reserved.</span>

          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="/privacy"
          >
            Terms & Conditions
          </a>

          <span>&middot;</span>

          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="/privacy"
          >
            Privacy Policy
          </a>
        </p>

        <a href="http://royalswebtech.com/" className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">Designed and Developed by ©Royals WebTech 2024</a>
      </div>
    </div>
  </DIV>
</footer>
  );
};

export default Footer;


const DIV = styled.div`



a{
 font-size: 17px;
}


li{
    display: flex;

}

a:after {
    display      : block;
    content      : '';
    border-bottom: solid 3px #F3A445;
    transform    : scaleX(0);
    transition   : transform 300ms ease-in-out;
}

a:hover:after {
    transform: scaleX(1);
}

a.fromright:after {
    transform-origin: 100% 50%;
}

a.fromleft:after {
    transform-origin: 0 50%;
}
`
