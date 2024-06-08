import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-full">
      <svg
        className="absolute top-0 left-0 w-full h-full transition duration-300 ease-in-out delay-150"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`.path-0 {
            animation: pathAnim-0 4s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          /* Keyframes definitions */
          `}
        </style>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#F78DA7"></stop>
            <stop offset="95%" stop-color="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        {/* Your path goes here */}
        {/* Example: */}
        <path
          d="M 0,600 L 0,150 C 69.88516746411483,177.43540669856458 139.77033492822966,204.87081339712918 247,189 C 354.22966507177034,173.12918660287082 498.8038277511962,113.95215311004787 596,123 C 693.1961722488038,132.04784688995213 743.0143540669857,209.3205741626794 843,221 C 942.9856459330143,232.6794258373206 1093.138755980861,178.76555023923447 1201,156 C 1308.861244019139,133.23444976076553 1374.4306220095696,141.61722488038276 1440,150 L 1440,600 L 0,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        />
      </svg>
    </div>
  );
};

export default Banner;
