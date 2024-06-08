import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import image1 from '../assets/img/terracotta-jali-tiles-500x500.jpg'
import image2 from '../assets/img/terracotta-jali-500x500.jpg';
import image3 from '../assets/img/terracotta-jaali-500x500 (2).jpg'
import image4 from '../assets/img/clay-jali-helmet-jali-60d2f64017de7.jpg'
import gsap from "gsap";
import Transition from "../components/Transition";

const images = [image1, image2, image3, image4];
const features = [
  { name: "Minimum Order Quantity", description: "500 Piece" },
  { name: "Country of Origin", description: "Made in India" },
  { name: "Position", description: "Exterior" },
  { name: "Product Type", description: "Terracotta" },
  { name: "Material", description: "Terracotta" },
  { name: "Color", description: "RED" },
  { name: "Feature", description: "Durable" },
  { name: "Shape", description: "Square" },
  { name: "Size", description: '8"*8"*3' },
  { name: "Usage/Application", description: "Apartment" },
  { name: "Weight", description: "2.5kg" },
];
const handleDownload = () => {
  window.open(`${process.env.PUBLIC_URL}/document-3a1000009497.pdf`, '_blank');
};
function Jails() {
  const imageRefs = useRef(images.map(() => React.createRef()));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    imageRefs.current.forEach((ref, index) => {
      const image = ref.current;
      gsap.from(image, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });

      image.addEventListener("mouseenter", () => {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.3
        });
      });

      image.addEventListener("mouseleave", () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.3
        });
      });

      return () => {
        image.removeEventListener("mouseenter", () => {});
        image.removeEventListener("mouseleave", () => {});
        gsap.killTweensOf(image);
      };
    });
  }, []);

  return (
    <>
      <div>
        <div className="bg-white bg-pro">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Terracotta Decorative Jali
              </h2>
              <p className="mt-4 text-gray-500">
                Terracotta Decorative jali 1)Lily:8"x8"x3" Wt:2.5kg
                2)Geo:8"x8"x3" Wt:2.5kg 3)Jevel:8"x8"x3" Wt:2.5kg
              </p>

              <div className="mt-3 flex gap-4" onClick={handleDownload}>
                <a
                  href="https://pdf.indiamart.com/impdf/2849033794291/101519832/document-3a1000009497.pdf#ITEM_DOC#"
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
                to="https://www.infiniaindia.in/search.html?ss=Jalis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 mb-2 hover:bg-green-600 text-white font-bold px-10 py-2 rounded">
                  Buy Now
                </button>
              </Link>

              <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8 lg:mt-[-350px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  ref={imageRefs.current[index]}
                  className="rounded-lg bg-gray-100 overflow-hidden"
                >
                  <img
                    src={image}
                    className="rounded-lg bg-gray-100 shadow img"
                    alt={`Terracotta Jali ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
}

export default Transition(Jails);