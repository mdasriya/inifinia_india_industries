import React, { useState } from "react";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

// import data
import { products } from "../data";
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

      className="productSlider min-h-[1300px]"
    >
      {pages.map((page, index) => {
        return (
          <div key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] ssm:grid-cols-1">
              {page.productList.map((products, index) => {
                // DeStructure products
               console.log("apeksha",products.href);
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


