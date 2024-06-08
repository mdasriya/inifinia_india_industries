import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import image1 from '../assets/img/FEATIMAGE10.jpg'
import image2 from '../assets/img/1 (1) (1).jpg'
import Transition from '../components/Transition';

const features = [
  { name: "Minimum Order Quantity", description: "250 feet" },
  { name: "Country of Origin", description: "Ivory" },
  { name: "Usage/Application", description: "wood plastic compit" },
  { name: "Color", description: "Rectangular" },
  { name: "Coverage", description: "premium" },
  { name: "Pattern", description: "For Construction & Furnitures" },
  { name: "Surface Treatment", description: "Indoor, Outdoor" },
  { name: "Weight Of Tile", description: "3 kg" },
  { name: "Material", description: "Clay" },
  { name: "Dimensions", description: "15.5 x 9.5" },
];
const features1 = [
  { name: "Minimum Order Quantity", description: "3000 Piece" },
  { name: "Country of Origin", description: "Made in India" },
  { name: "Usage/Application", description: "Residential" },
  { name: "Color", description: "Red" },
  { name: "Coverage", description: "145 pieces/ 100sqft" },
  { name: "Pattern", description: "Profile" },
  { name: "Surface Treatment", description: "Color Coated" },
  { name: "Weight Of Tile", description: "3 kg" },
  { name: "Material", description: "Clay" },
  { name: "Dimensions", description: "15.5 x 9.5" },
];
const handleDownload = () => {
  window.open(`${process.env.PUBLIC_URL}/roof-tiles.pdf`, '_blank');
};

const Roofing_Flooring_solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
        {/* Roof tiles div */}
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
                Terracotta Roof Tiles
                </h1>
                <p className="mt-4 text-gray-500">
                Approx. 16 / Piece
                </p>
                <p className="mt-4 text-gray-500">
                We are Manufacturer of Roof Tile available at cheap rate based in nagpur deliver service all over India.
                </p>
      
                {/* <p className="mt-4 text-gray-500">
                  WPC Door frames (Chaukhat) Size:3x2 ,4x2 , 4x2.5, 5x2.5 Colour :Teak
                  wood and Ivory Lenght: 6 ft , 6.5ft , 7ft, 8ft, 10ft and 11 ft
                </p> */}
      
                <div className="mt-3 flex gap-4" onClick={handleDownload}>
                  <a
                    href="https://pdf.indiamart.com/impdf/25190334797/101519832/roof-tiles.pdf#ITEM_DOC#"
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
      
                <Link
                  to="https://www.infiniaindia.in/search.html?ss=Roofing+&+Flooring+solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 mb-2 hover:bg-green-600 text-white font-bold px-10 py-2 rounded">
                    Buy Now
                  </button>
                </Link>
      
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
              <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src={image1}
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 lg:h-[270px] img "
                />
                <img
                  src={image2}
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100 lg:h-[270px] img"
                />
                <img
                  src="https://img.freepik.com/premium-photo/construction-worker-tile-roofing-repair-sunny-day_293953-640.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100 lg:h-[270px] img "
                />
                <img
                  src="https://img.freepik.com/premium-photo/full-frame-shot-roof-tiles_1048944-27272309.jpg?w=740"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100 lg:h-[270px] img "
                />
              
              </div>
            </div>
          </div>
          </div>




          {/* floor tiles div */}
          <div className="">
         <div
              className=" top-0 left-0 w-full h-100 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://img.freepik.com/free-vector/door-realistic-composition-with-front-view-modern-room-interior-with-armchair-frames-closed-door-vector-illustration_1284-74376.jpg?w=740&t=st=1708160206~exp=1708160806~hmac=0a5fae92a496cddbcb7d6565b2eb37c81e1190c7813988b837e29735fd07159f")',
              }}
            ></div>
       <div className="bg-white bg-pro lg:mt-[-125px]">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Terracotta Floor Tiles
                </h2>
                <p className="mt-4 text-gray-500">
                Approx. 16 / Piece
                </p>
                <p className="mt-4 text-gray-500">
                With our in-depth knowledge of this domain, we are actively engaged in providing an excellent quality range of Terracotta Tiles and
Terracotta Floor Tiles.
                </p>
      
                {/* <p className="mt-4 text-gray-500">
                  WPC Door frames (Chaukhat) Size:3x2 ,4x2 , 4x2.5, 5x2.5 Colour :Teak
                  wood and Ivory Lenght: 6 ft , 6.5ft , 7ft, 8ft, 10ft and 11 ft
                </p> */}
      
                <div className="mt-3 flex gap-4">
                  <a
                    href="https://pdf.indiamart.com/impdf/22194246097/101519832/terracotta-floor-tiles.pdf#ITEM_DOC#"
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
      
                <Link
                  to="https://www.infiniaindia.in/search.html?ss=Roofing+&+Flooring+solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 mb-2 hover:bg-green-600 text-white font-bold px-10 py-2 rounded">
                    Buy Now
                  </button>
                </Link>
      
                <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {features1.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">{feature.name}</dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8 lg:mt-[-208px]">
                <img
                  src="https://img.freepik.com/premium-photo/old-brick-wall-texture-background_36020-139.jpg?w=740"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 lg:h-[270px] img "
                />
                <img
                  src="https://img.freepik.com/premium-photo/beautiful-background-details-floor-tile-mosaic_552988-139.jpg?w=740"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100 lg:h-[270px] img "
                />
                <img
                  src="https://img.freepik.com/premium-photo/wall-tile-tile-pink-coral-color-background_137637-86.jpg?w=740"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100 lg:h-[270px] img "
                />
                <img
                  src="https://img.freepik.com/premium-photo/red-painted-concrete-wall-background_87918-422.jpg?w=740"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100 lg:h-[270px] img "
                />
              
              </div>
            </div>
          </div>
          </div>
          <div className='ssm:mt-[120px]'>
          <RelatedProducts />

          </div>
          </>
        );
}

export default Transition(Roofing_Flooring_solutions)
