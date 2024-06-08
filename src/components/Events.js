import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { Navigation } from 'swiper';



const videos = [
  { source: "https://player.vimeo.com/progressive_redirect/playback/617209007/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=d5b4b95263bc1cdd7d56a2592c0370fa35a874ed20271164cb261bdc245f06cf" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/823476801/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=dbfbcba1448d8dfc1902392cbc50ab7d65efde5d89904698e271c27a9df54bcc" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/906221402/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=c43dc800311f8ff72706443bf31aa58b24dfc180d4a06e502ec56fb64caab89d" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/914356391/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=41679e8e0d9ca5cd689658f1e928443b0b8367173cc1c37d240a7df8b6d7d064" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/912374706/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=4ebdc5cb476709711e6164f8c9ed8604d6644129fccda4253095d2f39cc5fb98" },
  { source: "https://player.vimeo.com/progressive_redirect/playback/887320409/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=33def70707ee651a93d8285e4e56e8ee02b6aec482b1e519ab8e6318f9cf8ce3" },
];

export default function Event() {
  const [swiper, setSwiper] = useState(null);
  const videoRefs = useRef([]);

 
  const handleSlideChange = () => {
    if (swiper) {
      swiper.slides.forEach((slide, index) => {
        const video = videoRefs.current[index];
        if (swiper.activeIndex === index) {
          video.play();
        } else {
          video.pause();
        }
      });
    }
  };

  useEffect(()=> {
    handleSlideChange()
  },[swiper])

console.log("component render")

  return (
    <DIV>
      <h1 className='title text-center lg:mt-4'>Video of Events</h1>
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper imageSlider"
        initialSlide={1}
        navigation
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
      >
        {videos.map((item, index) => (
          <SwiperSlide className='slider' key={index}>
            <video
            className=''
              ref={(el) => (videoRefs.current[index] = el)}
              autoPlay
              loop
              muted
              preload="auto"
              src={item.source}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </DIV>
  );
}

const DIV = styled.div`
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

  .swiper-slide video {
    display: block;
    width: 100%;
    height: 100%;
  }
 
.imageSlider{
  object-fit: cover;
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
    top: 50% 59
  }
  .imageSlider .swiper-button-prev,
.imageSlider .swiper-button-next {
 background: pink;
  width: 20px;
  height: 20px;
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
`;