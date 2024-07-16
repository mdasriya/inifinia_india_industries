import React, { useState } from 'react';
import image1 from "../assets/img/full.jpg";

const ImageComp = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <div 
        className="relative w-full h-auto mt-8 ssm:p-2 ssm:h-[230px] lg:h-[550px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="block w-full h-full" src={image1} alt='why partner with infinia' />
      </div>

      {/* {showModal && (
        // <div 
        //   className="fixed inset-0 flex items-center ml-4 z-20 mb-[10px]"
        //   onMouseEnter={handleMouseEnter}
        //   onMouseLeave={handleMouseLeave}
        // >
        //   <div className="relative font-[sans-serif] text-[#333] w-full max-w-[260px] rounded-xl px-4 py-6 bg-white shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)] absolute top-10 before:w-4 before:h-4 before:rotate-45 before:bg-white before:absolute before:-top-1.5 before:left-6">
        //     <div className="flex flex-wrap items-center cursor-pointer w-full border-b pb-4">
        //       <img src='https://readymadeui.com/profile_2.webp' className="w-12 h-12 rounded-full" />
        //       <div className="ml-4">
        //         <p className="text-sm font-semibold">John Doe</p>
        //         <p className="text-xs text-gray-400">Software engineer</p>
        //       </div>
        //     </div>
        //     <div className="my-6 space-y-6">
        //       <div className="flex items-center">
        //         <svg fill="#333" stroke="#333" className="w-[18px] h-[18px] mr-4" viewBox="0 0 64 64">
        //           <path d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z" data-original="#000000"></path>
        //         </svg>
        //         <span className="text-sm">(923)658-8546</span>
        //       </div>
        //       <div className="flex items-center">
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333" className="w-[18px] h-[18px] mr-4" viewBox="0 0 682.667 682.667">
        //           <defs>
        //             <clipPath id="a" clipPathUnits="userSpaceOnUse">
        //               <path d="M0 512h512V0H0Z" data-original="#000000"></path>
        //             </clipPath>
        //           </defs>
        //           <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
        //             <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
        //             <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
        //           </g>
        //         </svg>
        //         <a href="javascript:void(0);" className="text-sm text-blue-500">mail@example.com</a>
        //       </div>
        //     </div>
        //     <button type="button" className="px-4 py-2 text-sm tracking-wider font-semibold border-none outline-none bg-gray-100 hover:bg-gray-200 w-full">Follow</button>
        //   </div>
        //   <a href="javascript:void(0);" className="text-base text-blue-500 ">Team Member</a>
        // </div>
      )} */}
    </div>
  );
};

export default ImageComp;



