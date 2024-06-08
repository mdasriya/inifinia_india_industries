import React from 'react'

import Slide from './Slide';
import styled from 'styled-components';
const EventPhotoSlider = () => {
  return (
    <main>
    <DIV className="swiper">
      <div className="swiper-wrapper">
        <Slide
          title="Louvre"
          imageUrl="https://images.unsplash.com/photo-1543335785-8aadf6d8183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          description="National art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo."
          link="https://en.wikipedia.org/wiki/Louvre"
        />
        <Slide
          title="Louvre"
          imageUrl="https://images.unsplash.com/photo-1543335785-8aadf6d8183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          description="National art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo."
          link="https://en.wikipedia.org/wiki/Louvre"
        />
        <Slide
          title="Louvre"
          imageUrl="https://images.unsplash.com/photo-1543335785-8aadf6d8183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          description="National art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo."
          link="https://en.wikipedia.org/wiki/Louvre"
        />
        {/* Add more slides here */}
      </div>
    </DIV>
  </main>
  )
}

export default EventPhotoSlider;

const DIV =  styled.div`
 .main {
    position: relative;
    width: calc(min(90rem, 90%));
    margin: 0 auto;
    display: flex;
    align-items: center;
    min-height: 100vh;
    min-height: 100svh;
    column-gap: 3rem;
    padding-block: min(20vh, 3rem);
  }
  
  .swiper {
    width: 100%;
    padding: 1.875rem 0;
  }
  
  .swiper-slide {
    width: 18.75rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: self-start;
    box-shadow: 0.063rem 0.5rem 1.25rem hsl(0deg 0% 0% / 12.16%);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  
  .swiper-slide-img {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(180deg);
    line-height: 0;
    bottom: -0.063rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  
  .swiper-slide-img img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
    z-index: -1;
    transition: 0.3s ease-in-out;
    transform: rotate(-180deg);
  }
  
  .swiper-slide-img svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 5rem;
    transform: rotateY(180deg);
  }
  
  .shape-fill {
    fill: #ffffff;
  }
  
  .swiper-slide-content {
    background: #fff;
    padding: 0 1.65rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    width: 100%;
  }
  
  .swiper-slide-content > div {
    transform: translateY(-1.25rem);
  }
  
  .swiper-slide-content h2 {
    color: #000;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.4;
    margin-bottom: 0.425rem;
    text-transform: capitalize;
    letter-spacing: 0.02rem;
  }
  
  .swiper-slide-content p {
    color: #000;
    line-height: 1.6;
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .show-more {
    width: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #24aad9;
    border-radius: 50%;
    box-shadow: 0px 0.125rem 0.875rem #24aad96b;
    margin-top: 1em;
    margin-bottom: 0.2em;
    height: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in;
    margin-left: auto;
  }
  
  .show-more:hover {
    background: #1184ac;
  }
  
  .show-more svg {
    width: 1.75rem;
    color: #fff;
  }
  
  .swiper-slide-active:hover .swiper-slide-img img {
    transform: scale(1.2) rotate(-185deg);
  }
  
  .swiper-slide-active:hover .show-more {
    opacity: 1;
    height: 3.125rem;
  }
  
  .swiper-slide-active:hover p {
    display: block;
    overflow: visible;
  }
  
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right {
    background-image: none;
  }
  
  @media screen and (min-width: 93.75rem) {
    .swiper {
      width: 85%;
    }
  }
 

`
