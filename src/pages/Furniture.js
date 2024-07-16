import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import RelatedProducts from "./RelatedProducts";
import Transition from "../components/Transition";

const features = [
  { name: "Thickness Of Sheet", description: "12mm" },
  { name: "Shape", description: "Rectangular" },
  { name: "Size", description: "8*4" },
  { name: "Thickness", description: "8mm, 12mm,16mm,18mm,20mm,24mm and 30mm" },
  { name: "Color", description: "Gray" },

];
const handleDownload = () => {
  window.open(`${process.env.PUBLIC_URL}/ECOMAGIX .by Infinia.pdf`, '_blank');
};


function Furniture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
 <div className="relative">
   <div
        className="absolute top-0 left-0 w-full h-100 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-vector/door-realistic-composition-with-front-view-modern-room-interior-with-armchair-frames-closed-door-vector-illustration_1284-74376.jpg?w=740&t=st=1708160206~exp=1708160806~hmac=0a5fae92a496cddbcb7d6565b2eb37c81e1190c7813988b837e29735fd07159f")',
        }}
      ></div>
 <div className="bg-white bg-pro">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Recycle Plastic Sheet For Furniture
          </h1>
          <p className="mt-4 text-gray-500">
          Recycle plastic sheet for Indoor outdoor  furniture for school colleges desk Benches.
More Durable and waterproof .
Sheets available in many Thicknesses.
          </p>

          {/* <p className="mt-4 text-gray-500">
            WPC Door frames (Chaukhat) Size:3x2 ,4x2 , 4x2.5, 5x2.5 Colour :Teak
            wood and Ivory Lenght: 6 ft , 6.5ft , 7ft, 8ft, 10ft and 11 ft
          </p> */}

          <div className="mt-3 flex gap-4" onClick={handleDownload}>
            <a
              href="../Pdf/INFINIA WPC DOORS & DOOR FRAMES BROCHURE.pdf"
              download
              target="_blank"
              className="flex items-center gap-2 subtitle  hover:cursor-pointer"
            >
              <img
                width="50"
                height="50"
                className="mr-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
                alt="pdf"
              />
              Product Brochure
            </a>
          </div>

          {/* <Link
            to="https://www.infiniaindia.in/search.html?ss=Furniture"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-500 mb-2 hover:bg-green-600 text-white font-bold px-10 py-2 rounded">
              Buy Now
            </button>
          </Link> */}

          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="ml-10  ">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/9/FL/IH/QM/101519832/recycle-plastic-sheet-furniture-500x500.jpeg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow img"
      
        />
       
        </div>
      </div>
    </div>
    </div>
    <RelatedProducts />
    </>
  );
}

export default Transition(Furniture);
