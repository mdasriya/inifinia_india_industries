import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow,Autoplay, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../assets/events/01.jpeg';
import slide_image_2 from '../assets/events/02.jpeg';
import slide_image_3 from '../assets/events/03.jpeg';
import slide_image_4 from '../assets/events/04.jpeg';
import slide_image_5 from '../assets/events/05.jpeg';
import slide_image_6 from '../assets/events/06.jpeg';
import slide_image_7 from '../assets/events/07.jpeg';

import styled from 'styled-components';

function Handsome() {
  return (
    <DIV className="container_image_slider ssm:-mt-10">
      <h1 className="heading">Events Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        autoplay={
          {
            delay: 2500,
                disableOnInteraction: false,
          }
        }
      
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

         <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div> */}
          {/* <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
           <div className="swiper-pagination"></div> 
         </div> 
      </Swiper>
    </DIV>
  );
}

export default Handsome;

const DIV = styled.div`



::-webkit-scrollbar {
  width: 1.3rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #797979;
  transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #222224;
}

::-webkit-scrollbar-track {
  background: #f9f9f9;
}

    .container_image_slider {
  max-width: 124rem;
  padding: 4rem 1rem;
  margin: 0 auto;
}

.heading {
  padding: 1rem 0;
  font-size: 2.5rem;
  text-align: center;
}

.swiper_container {
  height: auto;
  /* padding: 2rem 10rem; */
  position: relative;
  /* border:1px solid blue; */
  
}

.swiper-slide {
  width: 30rem;
  height: 20rem;
  position: relative;
  /* border:1px solid red; */
  height: auto;
  margin: 10px;
}

.swiper-slide img {
    width: 28rem;
    height: auto;
    border-radius: 2rem;
    object-fit: cover;
}

@media (max-width: 500px) {
  .swiper_container {
    height: auto;
  }
  .swiper-slide {
    width: 26rem !important;
    height: 33rem !important;
    // border: 2px solid pink;
    padding: 10px;
  }
  .swiper-slide img {
    width: 100% !important;
    height: 100% !important;
  
  }
}

.swiper-slide img {
  width: 28rem;
  height: 25rem;
  border-radius: 1rem;
  object-fit: cover;
}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  display: none;
}

.slider-controler {
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-controler .swiper-button-next {
  left: 58% !important;
  transform: translateX(-58%) !important;
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-next {
    left: 70% !important;
    transform: translateX(-70%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-next {
    left: 80% !important;
    transform: translateX(-80%) !important;
  }
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-prev {
    left: 30% !important;
    transform: translateX(-30%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-prev {
    left: 20% !important;
    transform: translateX(-20%) !important;
  }
}

.slider-controler .slider-arrow {
  background:#ac3131;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.slider-controler .slider-arrow ion-icon {
  font-size: 2rem;
  color: #222224;
}

.slider-controler .slider-arrow::after {
  content: '';
}

.swiper-pagination {
  position: relative;
  width: 15rem !important;
  /* bottom: 1rem; */
  margin-top: 4rem;
}

.swiper-pagination .swiper-pagination-bullet {
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.swiper-pagination .swiper-pagination-bullet-active {
  background: #f89603;
}
`