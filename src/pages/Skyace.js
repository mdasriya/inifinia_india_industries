import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/img/Picture1.png";
import image2 from "../assets/img/Picture2.jpg";
import image3 from "../assets/img/Picture3.jpg";
import image4 from "../assets/img/Picture5.jpg";
import Transition from "../components/Transition";
// import AOS from 'aos';
// import "aos/dist/aos/css";

const features = [
  { name: "1. Pergola" },
  { name: "2. Gazebo" },
  { name: "3. Poolside Canopy" },
];

const handleDownload = () => {
  window.open(`${process.env.PUBLIC_URL}/Fly Ash Bricks Pallets.pdf`, "_blank");
};

function Skyace() {
  return (
    <div >
      <div className="bg-white con-bg">
        <div
          className="flex items-center w-auto text-center door skyace
      "
        >
          <h3 className="text-5xl font-extrabold tracking-normal text-center z-1 text-white">
            Skyace
          </h3>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
          <div className="mt[-128px]">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Skyace
            </h2>
            <p className="mt-4 text-gray-500">
            Skyace offers premium weatherproof furniture that is resistant to rot, termites, and fire. Our minimalist yet chic designs are crafted with sustainability in mind, using mostly recycled and recyclable materials.
            </p>

            <h3 className="">Properties</h3>
            <p className="text-gray-500">
              1. Durability: Resistant to decay, rot, and insect damage compared
              to natural wood. <br></br>
              2. Moisture Resistance: Superior moisture
              resistance, making it suitable for outdoor applications. <br></br>
              3. Low Maintenance: Requires less maintenance than traditional wood; no
              need for painting, staining, or sealing. <br></br>
              4. Environmental Impact: Can be made from recycled materials, reducing environmental impact.<br></br>
              5.Customization: Can be molded into various shapes and sizes and can
              include color additives for aesthetics.
            </p>

            {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 p-3 shadow-2">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description1}</dd>
                <dd className="mt-2 text-sm text-gray-500">{feature.description2}</dd>
                <dd className="mt-2 text-sm text-gray-500">{feature.description3}</dd>
              </div>
            ))}
          </dl> */}
            <div className="mt-2 flex gap-4" onClick={handleDownload}>
              <Link
                to="../../public/Fly Ash Bricks Pallets.pdf"
                download
                target="_blank"
                className="flex items-center gap-2 subtitle  hover:cursor-pointer"
              >
                <img
                  width="25"
                  height="25"
                  className="mr-5"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
                  alt="pdf"
                />
                Product Brochure
              </Link>
            </div>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={image}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 shadow img h-[280px] ssm:h-[166px] mv:h-[166px] lg:h-[280px] md:h-[290px]"
            />
            <img
              src={image2}
              alt="Top down view of walnut card tray with embedded magnets and card."
              className="rounded-lg bg-gray-100 shadow img"
            />
            <img
              src={image3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 shadow img"
            />
            <img
              src={image4}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100 shadow img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skyace;
