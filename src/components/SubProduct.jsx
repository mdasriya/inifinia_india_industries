import React, { useState } from 'react'

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";
import styled from 'styled-components';
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

const SubProduct = ({ products }) => {
    const [hoverOn, setHoverOn] = useState(false);
    console.log("Products data : ", products)
    const setHoverHandler = () => {
        console.log("sethover is called");
        setHoverOn(true);
    }

    const { image, image1, image2, name, point1, point2, point3 } = products;
    return (
        <div>
            <DIV
                onMouseEnter={() => setHoverHandler()}
                onMouseLeave={() => setHoverOn(false)}
                className="w-full max-w-[290px] h-[430px] text-left"
            // key={index}
            >
                <Swiper
                    modules={[Navigation, Autoplay]}
                    // navigation={true}
                    autoplay={true}
                    // pagination={{ clickable: true }}
                    className="border-2 border-orange-300 hover:cursor-pointer hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition"
                >
                    <div className=" " >
                        {
                            hoverOn ? (
                                <>
                                    {point1 && <SwiperSlide>
                                        <div className="flex justify-center lg:h-[100%] items-center ">
                                            <img className="ssm:mt-10" src={image.type} alt="" />
                                        </div>
                                    </SwiperSlide>}
                                    {point2 && <SwiperSlide>
                                        <div className="flex justify-center lg:h-[100%] items-center ">
                                            <img className="ssm:mt-10" src={image1.type} alt="" />
                                        </div>
                                    </SwiperSlide>}
                                    {point3 && <SwiperSlide>
                                        <div className="flex justify-center lg:h-[100%] items-center ">
                                            <img className="ssm:mt-10" src={image2.type} alt="" />
                                        </div>
                                    </SwiperSlide>}
                                </>
                            ) : (<SwiperSlide>
                                <div className="flex justify-center lg:h-[100%] items-center ">
                                    <img className="ssm:mt-10" src={image.type} alt="" />
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>

                <div className="font-semibold lg:text-xl gap-5">{name}</div>
                <div className="items-center gap-x-3">
                    {point1 && <div>1){point1}</div>}

                    {point2 && (
                        <div className="text-[15px] text-gray">2){point2}</div>
                    )}

                    {point3 && (
                        <div className="text-[15px] text-gray">3){point3}</div>
                    )}
                </div>
            </DIV>
        </div>
    )
}

export default SubProduct


const DIV = styled.div`


  @media only screen and (max-width: 499px) {
    /* .image_sliding_eco{
      margin-top: 100px;
  } */
}

  /* Mobile Devices (portrait and landscape) */
  @media only screen and (min-width: 500px) and (max-width: 768px) {
   
  }

  /* Tablet Devices */
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    
  }
  @media only screen and (min-width: 1025px) and (max-width: 1299px) {
    
  } 


`