import React, { useState } from "react";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";
import styled from 'styled-components';
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

// import data
import { products } from "../data";

// import icons
import { HiPlus } from "react-icons/hi";
import SubProduct from "./SubProduct";

const ProductSlider = () => {
  const [hoverOn, setHoverOn] = useState(false);

  const setHoverHandler = () => {
    console.log("sethover is called");
    setHoverOn(true);
  }
  // deStructre products
  const { pages } = products;
  return (
    <div
      // modules={[Pagination, Navigation]}
      // pagination={{ clickable: true }}
      // navigation={true}
      className="productSlider min-h-[1300px]"
    >
      {pages.map((page, index) => {
        return (
          <div key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] ssm:grid-cols-1">
              {page.productList.map((products, index) => {
                // DeStructure products
                const { image, image1, image2, name, point1, point2, point3 } = products;
                return (
                  <SubProduct key={index} products={products}/>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSlider;

// const DIV = styled.div`


//   @media only screen and (max-width: 499px) {
//     /* .image_sliding_eco{
//       margin-top: 100px;
//   } */
// }

//   /* Mobile Devices (portrait and landscape) */
//   @media only screen and (min-width: 500px) and (max-width: 768px) {
   
//   }

//   /* Tablet Devices */
//   @media only screen and (min-width: 769px) and (max-width: 1024px) {
    
//   }
//   @media only screen and (min-width: 1025px) and (max-width: 1299px) {
    
//   } 


// `
