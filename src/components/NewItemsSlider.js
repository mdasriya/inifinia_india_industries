import React, { useRef } from 'react';

// import swiper react component
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";

// import data
import {newInStore} from "../data"
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from 'styled-components';


const NewItemsSlider = () => {

  return <DIV><Swiper className='testimonialSlider '
  
  modules={[Navigation, Pagination, Autoplay]} 
  autoplay={
    {
      delay: 2500,
          disableOnInteraction: false,
    }
  }
  loop={true}
  navigation={true}
  
  
  
   grabCursor={true} breakpoints={{
    320:{
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768:{
      slidesPerView: 3,
      spaceBetween: 20,
    },
   
  }}>
    {newInStore.products.map((product, index)=>{
return <SwiperSlide className='max-w-[256px]' key={index}

>
  <div className='relative p-2 lg:h-[600px] ssm:h-[350px]'>
    <img src={product.image.type} className='lg:h-[100%] ssm:h-[100%] brightness-75 img rounded-md'  alt='images'/>
    <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>{product.name}</div>
   
  </div>

</SwiperSlide>

    })}


  </Swiper>
  </DIV>;
};

export default NewItemsSlider;

const DIV = styled.div`
.testimonialSlider .swiper-button-prev:hover,
.testimonialSlider .swiper-button-next:hover {
  background: #286f6c;
  transition: all 0.25s ease-in-out;
}

.testimonialSlider .swiper-button-prev:after,
.testimonialSlider .swiper-button-next:after {
  font-size: 16px;
  color: white;
}

.testimonialSlider .swiper-button-prev:hover,
.testimonialSlider .swiper-button-next:hover {
  background: #286f6c;
  transition: all 0.25s ease-in-out;
}

.testimonialSlider .swiper-button-prev:after,
.testimonialSlider .swiper-button-next:after {
  font-size: 16px;
  color: white;
}

.testimonialSlider .swiper-button-prev,
.testimonialSlider .swiper-button-next {
  background: #23262f;
  box-shadow: 0px 4px 10px rgba(15, 27, 51, 0.1);
  top: 85%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 20;
}

.testimonialSlider .swiper-button-prev {
left:2%;
top: 50%;
}

.testimonialSlider .swiper-button-next {

  top: 50%;
}

   .testimonialSlider .swiper-button-prev {
 margin-left: -10px;
 /* margin-top: .1px; */
 height: 40px;
 width: 40px;
 z-index:99999
}
    .testimonialSlider .swiper-button-next {
 margin-left: -10px;

 height: 40px;
 width: 40px;
}
`