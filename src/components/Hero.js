import React, { useEffect, useRef } from 'react';
import { hero } from "../data";
import Stats from '../components/Stats';
import { gsap } from "gsap";

const Hero = () => {
  const textRef = useRef(null);
  const textRefs = useRef(null);
  const buttonRef = useRef(null);
  const { title, subtitle, buttonText } = hero;

  useEffect(() => {
    gsap.from(textRef.current, {
      x: '-100%',
      duration: 4,
      ease: 'power3.out',
    });

    gsap.from(textRefs.current, {
      x: '100%',
      duration: 6,
      ease: 'power3.out',
    });

    gsap.from(buttonRef.current, {
      y: '100%',
      duration: 3,
      ease: 'power3.out',
    });

    const button = buttonRef.current;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.1,
        backgroundColor: "rgba(235, 156, 62, 1)",
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };

  }, []);

  return (
    <section className='h-auto lg:h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[125px] lg:pt-[225px] pb-[54px] lg:pb-[254px] relative mb-12 lg:mb-28'>
      <div className='container mx-auto text-center'>
        <h1 ref={textRef} className='text-2xl mx-auto font-semibold mb-[15px] lg:mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>{title}</h1>
        <h2 ref={textRefs} className='mb-[15px] max-w-[550px] mx-auto lg:mb-[65px] lg:text-md'>{subtitle}</h2>

        <button ref={buttonRef} className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[20px] py-[6px] mb-[80px] text-lg rounded-md backdrop-blur-md transition lg:px-[35px] lg:py-[9px] lg:mb-[194px]'>{buttonText}</button>

        {/* stats */}
        <div className='mt-[-70px]'>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
