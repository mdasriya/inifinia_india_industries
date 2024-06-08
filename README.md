# furniture-starter

Eveent Slider code start
<!-- import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { Autoplay, Navigation } from 'swiper';
import image1 from "../assets/events/01.jpeg"
import image2 from "../assets/events/17.jpeg"
import image3 from "../assets/events/03.jpeg"
import image4 from "../assets/events/07.jpeg"
import image5 from "../assets/events/16.jpeg"
import image6 from "../assets/events/13.jpeg"

import {motion} from "framer-motion"

const videos = [
  { source: image1,text:'infinia'},
  { source: image2,text:'infinia' },
  { source: image3,text:'infinia' },
  { source: image4,text:'infinia' },
  { source: image5,text:'infinia' },
  { source: image6,text:'infinia' },
];

export default function Event() {
  const [swiper, setSwiper] = useState(null);
  const videoRefs = useRef([]);
  const [imagehandler, setImagehandler] = useState(false)

const handleimage = () => {
setImagehandler((prev)=> !prev)
}
 
  // const handleSlideChange = () => {
  //   if (swiper) {
  //     swiper.slides.forEach((slide, index) => {
  //       const video = videoRefs.current[index];
  //       if (swiper.activeIndex === index) {
  //         video.play();
  //       } else {
  //         video.pause();
  //       }
  //     });
  //   }
  // };

  // useEffect(()=> {
  //   handleSlideChange()
  // },[swiper])



  return (
    <DIV>
      <h1 className='title text-center lg:mt-4'>Events</h1>
      <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
  className="mySwiper imageSlider"
  initialSlide={1}
  navigation
  autoplay={{ delay: 3000 }} // Autoplay should be an object with delay property
  loop={true} // Enable infinite loop
  onSwiper={setSwiper}
>

        {videos.map((item, index) => (
          <SwiperSlide className='slider text-center text-center' key={index} >
            <img
            className='image_item absolute '
              // ref={(el) => (videoRefs.current[index] = el)}
              // autoPlay
              // loop
              // muted
              // preload="auto"
              src={item.source}
              onMouseEnter={handleimage}
            />
            <h2 className='relative top-[87%] bg-gray-700 bg-opacity-50 text-4xl z-40 text-white'>{item.text}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </DIV>
  );
}

const DIV = styled.div`

.swiper-slide-shadow-left{
  /* opacity:0; */
  display:none
}
.swiper-slide-shadow-right{
  /* opacity:0; */
  display:none
}
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 500px;
    height: 282px;
  }

.image_item {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
.image_item:hover {
    /* border: 1px dotted red; */
  }
 
/* .imageSlider{
  object-fit: cover;
} */
/* image Slider start */
.imageSlider .swiper-pagination-bullet {
  background: #23262f;
}

.imageSlider .swiper-button-prev,
.imageSlider .swiper-button-next {
  background: #23262f;
  box-shadow: 0px 4px 10px rgba(15, 27, 51, 0.1);
  top: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 20;
}

.imageSlider .swiper-button-prev:hover,
.imageSlider .swiper-button-next:hover,
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: #286f6c;
  transition: all 0.25s ease-in-out;
}

.imageSlider .swiper-button-prev {
  left: 4%;
}
.imageSlider .swiper-button-next {
  right: 4%;
}

.imageSlider .swiper-button-prev:after,
.imageSlider .swiper-button-next:after,
.swiper-button-prev:after,
 .swiper-button-next:after {
  font-size: 16px;
  color: white;
}

.imageSlider .swiper-pagination {
  bottom: 20px;
}
.swiper-button-prev,
.swiper-button-next {
  background: #23262f;
  box-shadow: 0px 4px 10px rgba(15, 27, 51, 0.1);
  top: 85%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 20;
}

@media (max-width: 950px) {
  .imageSlider{
    margin-top: -20px;
    margin-bottom: 50px;
  }
  
}  

 @media (min-width: 500px) and (max-width: 684px) {
  .site_Address{
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }
  
  .imageSlider .swiper-pagination {
    bottom: 220px;
  }
  .imageSlider .swiper-button-prev {
    top: 50%;
  }
  .imageSlider .swiper-button-next {
    top: 50% 
  }
  .imageSlider .swiper-pagination-bullet {
  background: #23262f;
  margin-top: 50px;
}
.imageSlider .swiper-button-prev,
.imageSlider .swiper-button-next {
 /* background: pink; */
  width: 40px;
  height: 40px;
  border-radius: 50%;

}
 
} 
  @media (min-width: 300px) and (max-width: 399px) {
.my_logo{
  height: 8px;
}
.slider{
  height: auto;
  /* border: 2px solid red; */
  padding: 5px;
  width: 100%;

    }
    .productSlider .swiper-button-prev {
     margin-left: -60px;
     margin-top: 15px;
      height: 20px;
 width: 20px;
    }
    .productSlider .swiper-button-next {
     margin-left: -60px;
     margin-top: 15px;
     height: 20px;
     width: 20px;
    } 
.imageSlider .swiper-pagination-bullet {
  background: #23262f;
  margin-top: 50px;
}
.imageSlider .swiper-button-prev,
.imageSlider .swiper-button-next {
 /* background: pink; */
  width: 40px;
  height: 40px;
  border-radius: 50%;

}
  }
`; -->

Eveent Slider code end
