import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/img/Slider_1.jpeg";
import images2 from "../assets/img/Slider_2.jpeg";
import images3 from "../assets/img/Slider_3.jpg";
import images4 from "../assets/img/Slider_4.jpg";
 import images5 from "../assets/img/Slider_5.jpg";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "../slider.css";
import styled from "styled-components";

const ImageSlider = () => {
  return (
    <DIV className=" mt-[64px] w-full  lg:h-[600px]  xl:-mt-8">
      <Swiper
        className="imageSlider  lg:h-[100%] lg:p-10"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        autoplay={true}
        pagination={true}
      >
        <SwiperSlide>
          <div className="slider">
            <img className="w-full lg:-mt-10 lg:h-full object-cover brightness-75" src={image1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img className="w-full lg:h-full lg:-mt-5 object-cover brightness-75" src={images2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img className="w-full  lg:h-full object-cover brightness-75" src={images3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img className="w-full lg:-mt-5 lg:h-full object-cover brightness-75" src={images4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img className="w-full lg:h-full object-cover brightness-75" src={images5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="absolute inset-0 flex flex-col mt-[600px] items-center justify-center text-center text-white">
        
        <button className='bg-[rgba(248,196,117,0.71)] hover:bg-[rgba(221,162,74,0.8)] transition marker:transition-bg duration-500 px-[20px] z-10 py-[6px] mb-[80px] text-lg rounded-md backdrop-blur-md transition lg:px-[35px] lg:py-[9px] lg:mb-[194px] lg:mt-[20px]'>Explore</button>
      </div> */}
    </DIV>
  );
};

export default ImageSlider;

const DIV = styled.div`
.productSlider .swiper-pagination-bullet {
  background: #23262f;
}

.productSlider .swiper-button-prev,
.productSlider .swiper-button-next {
  background: #23262f;
  box-shadow: 0px 4px 10px rgba(15, 27, 51, 0.1);
  top: 97%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 20;
}

/* .image_slider_outer{
  margin-top: 155px;
} */
.imageSlider{
 
  /* margin-top: 80px;  */
  object-fit: cover;
}

.productSlider .swiper-button-prev:hover,
.productSlider .swiper-button-next:hover,
.testimonialSlider .swiper-button-prev:hover,
.testimonialSlider .swiper-button-next:hover {
  background: #286f6c;
  transition: all 0.25s ease-in-out;
}

.productSlider .swiper-button-prev {
  left: 40%;
}
.productSlider .swiper-button-next {
  right: 40%;
}

.productSlider .swiper-button-prev:after,
.productSlider .swiper-button-next:after,
.testimonialSlider .swiper-button-prev:after,
.testimonialSlider .swiper-button-next:after {
  font-size: 16px;
  color: white;
}

.productSlider .swiper-pagination {
  bottom: 20px;
}

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
.testimonialSlider .swiper-button-prev:hover,
.testimonialSlider .swiper-button-next:hover {
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
.testimonialSlider .swiper-button-prev:after,
.testimonialSlider .swiper-button-next:after {
  font-size: 16px;
  color: white;
}

.imageSlider .swiper-pagination {
  bottom: 20px;
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

/* @media (max-width: 768px) {
  .productSlider .swiper-button-prev,
  .productSlider .swiper-button-next,
  .productSlider .swiper-pagination,
  .testimonialSlider .swiper-button-prev,
  .testimonialSlider .swiper-button-next {
    display: none;
  }
} */
@media (max-width: 950px) {
  .imageSlider{
    margin-top: -20px;
    margin-bottom: 50px;
  }
  
}  
/* @media (max-width: 560px) {

  .slider{
    height: 400px;
      }
  .imageSlider{
    margin-bottom: 50px;
  }
  .productSlider .swiper-button-prev,
  .productSlider .swiper-button-next,
  .productSlider .swiper-pagination,
  .testimonialSlider .swiper-button-prev,
  .testimonialSlider .swiper-button-next {
   margin-top: 100px;
  }
}   */
/* @media (max-width: 320px) {
  .imageSlider{
    margin-bottom: -80px;
  }
}   */
  

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
    top: 50%;
  }
 
} 

  @media (min-width: 300px) and (max-width: 399px) {
.my_logo{
  height: 8px;
}
.slider{
  height: auto;
    }
    .productSlider .swiper-button-prev {
     margin-left: -60px;
     margin-top: 15px;
      height: 40px;
 width: 40px;
    }
    .productSlider .swiper-button-next {
     margin-left: -60px;
     margin-top: 15px;
     height: 40px;
     width: 40px;
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
.imageSlider .swiper-pagination-bullet {
  background: #23262f;
  margin-top: 50px;
}
@media (min-width: 300px) and (max-width: 399px) {
.my_logo{
  height: 8px;
}
.slider{
  height: auto;
  /* border: 2px solid red; */
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

}  


`
