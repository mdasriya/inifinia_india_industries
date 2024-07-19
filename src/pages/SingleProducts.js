import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import RelatedProducts from "./RelatedProducts";
import Transition from "../components/Transition";
import image1 from '../assets/img/app-wpc-door-1.jpg'
import image2 from '../assets/img/app-wpc-door-2.jpg'
import image3 from '../assets/img/02.jpg'
import image4 from '../assets/img/Screenshot 2024-07-18 150851.png'

const features = [
  { name: "Minimum Order Quantity", description: "250 feet" },
  { name: "Color", description: "Ivory , Dark Brown ,Grey, Black" },
  { name: "Material", description: "wood plastic compit" },
  { name: "Style", description: "Rectangular" },
  { name: "Grade Of Material", description: "premium" },
  { name: "Usage/Application", description: "For Construction & Furnitures" },
  { name: "Type", description: "Indoor, Outdoor" },
];
const handleDownload = () => {
  window.open(`${process.env.PUBLIC_URL}/INFINIA WPC DOORS & DOOR FRAMES BROCHURE.pdf`, '_blank');
};
function SingleProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
 <div className="mt-[-76px]">
  
        <div className="bg-white bg-pro">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            WPC Door
          </h1>
          <p className="mt-4 text-gray-500">
          INFINIA INDUSTRIES PVT. LTD. offers perfect Wood Polymer Composite (WPC) Doors, providing unmatched durability, eco-friendliness, and elegant aesthetics. Ideal for any setting, our WPC Doors are moisture, termite, and decay-resistant, ensuring long-lasting performance.
          </p>

          <div className="mt-3 flex gap-4 "onClick={handleDownload}>
            <a
              href="https://pdf.indiamart.com/impdf/22443121988/101519832/wpc-door-frame.pdf"
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
            to="https://www.infiniaindia.in/wpc-door-frame.html#wpc-door-frame"
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
        <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={image1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow img w-[277px] h-[277px]"
          />
          <img
            src={image2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow img w-[277px] h-[277px]"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2020/8/CM/EE/QL/101519832/wpc-door-frame-500x500.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow img w-[277px] h-[277px]"
          />
          <img
            src={image3}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow img w-[277px] h-[277px]"
          />
        </div>
      </div>
    </div>
    </div>

    <div className="">
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
            WPC Door Frame
          </h1>
          <p className="mt-4 text-gray-500">
          The WPC door frame by INFINIA INDUSTRIES is a premium product that exemplifies durability and style. Engineered for excellence, it offers superior resistance to moisture, termites, and warping.
          </p>

          <div className="mt-3 flex gap-4 "onClick={handleDownload}>
            <a
              href="https://pdf.indiamart.com/impdf/22443121988/101519832/wpc-door-frame.pdf"
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
            src="http://5.imimg.com/data5/ANDROID/Default/2023/5/310755063/VH/OT/WG/101519832/product-jpeg-1000x1000.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow img w-[277px] h-[277px]"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959281/TO/ZD/HQ/101519832/wpc-door-frame-1000x1000.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow img w-[277px] h-[277px]"
          />
          <img
            src={image4}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow img w-[277px] h-[277px]"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959277/MS/IX/OR/101519832/wpc-door-frame-1000x1000.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow img w-[277px] h-[277px]"
          />
        </div>
      </div>
    </div>
    <div className="bg-white bg-pro">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           RRP Door 
          </h1>
          <p className="mt-4 text-gray-500">
          Infinia Industries Pvt. Ltd. introduces a pioneering range of doors crafted from Recycle Regenerated Plastic, embodying our commitment to sustainability and innovation. Each door combines eco-conscious materials with impeccable design, ensuring both style and environmental responsibility. Explore our collection to discover doors that redefine durability and eco-friendliness, setting new standards in modern living spaces."
          </p>

          <div className="mt-3 flex gap-4 "onClick={handleDownload}>
            <a
              href="../Pdf/ECOMAGIX.pdf"
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
            to="https://www.infiniaindia.in/wpc-door-frame.html#wpc-door-frame"
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
        <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="http://5.imimg.com/data5/ANDROID/Default/2023/5/310755063/VH/OT/WG/101519832/product-jpeg-1000x1000.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959281/TO/ZD/HQ/101519832/wpc-door-frame-1000x1000.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2020/8/CM/EE/QL/101519832/wpc-door-frame-500x500.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959277/MS/IX/OR/101519832/wpc-door-frame-1000x1000.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow img"
          />
        </div>
      </div>
    </div>

    <div className="bg-white bg-pro">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            RRP Door Frame
          </h1>
          <p className="mt-4 text-gray-500">
          Infinia Industries Pvt. Ltd. offers eco-friendly door frames crafted from Recycle Regenerated Plastic, blending sustainability with superior design.
          </p>

          <div className="mt-3 flex gap-4 "onClick={handleDownload}>
            <a
              href="https://pdf.indiamart.com/impdf/22443121988/101519832/wpc-door-frame.pdf"
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
            to="https://www.infiniaindia.in/wpc-door-frame.html#wpc-door-frame"
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
        <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="http://5.imimg.com/data5/ANDROID/Default/2023/5/310755063/VH/OT/WG/101519832/product-jpeg-1000x1000.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959281/TO/ZD/HQ/101519832/wpc-door-frame-1000x1000.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2020/8/CM/EE/QL/101519832/wpc-door-frame-500x500.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959277/MS/IX/OR/101519832/wpc-door-frame-1000x1000.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
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

export default Transition(SingleProducts);
