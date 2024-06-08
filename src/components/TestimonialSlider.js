import React from 'react';

// import swiper react components
import { Swiper, SwiperSlide} from "swiper/react"

// import swiper css
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import {Autoplay, Navigation} from "swiper";

// import data

 import {testimonial} from "../data"
import styled from 'styled-components';

const TestimonialSlider = () => {
  return  <DIV> <Swiper className='testimonialSlider'
 modules={[Navigation, Autoplay]}
  navigation={true}
  autoplay={true}
  >
    {testimonial.persons.map((person, index)=> {
      // deStructure person
      const {avatar, name, occupation, message} = person;
 return <SwiperSlide key={index}>
  <div className='flex flex-col min-h-[250px]'>
    <div className='flex items-center gap-x-5 mb-9'>
      {/* avatar */}
      <img src={avatar.type} alt=''/>
      <div>
        <div className='text-xl font-semibold'>{name}</div>
        <div className='text-gray-500'>{occupation}</div>
      </div>
    </div>
{/* text */}
<div className='text-xl max-w-[570px]'>{message}</div>
  </div>
 </SwiperSlide>
    })}
  </Swiper>
  </DIV>
};

export default TestimonialSlider;

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
  left: 0;
}

.testimonialSlider .swiper-button-next {
  left: 12%;
}

   .testimonialSlider .swiper-button-prev {
 margin-left: 10px;
 /* margin-top: .1px; */
 height: 40px;
 width: 40px;
}
    .testimonialSlider .swiper-button-next {
 margin-left: 30px;

 height: 40px;
 width: 40px;
}
`
