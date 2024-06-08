import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import _ from 'lodash';
import Logo from "../assets/img/INFINIA_LOGO.png";

const Home1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const menuList = [
    { title: "Home", items: [{ text: "", url: "#" }, { text: "", url: "#" }, { text: "", url: "#" }] },
    { title: "Brands", items: [{ text: "First item", url: "#" }, { text: "Second item", url: "#" }, { text: "Third item", url: "#" }] },
    { title: "Products", items: [{ text: "First item", url: "#" }, { text: "Second item", url: "#" }, { text: "Third item", url: "#" }] },

  ];

  const blocksPerWidth = !isMobile ? _.chunk(menuList, 2) : [];

  const gsapMenuAnim = gsap.timeline({ paused: true });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gsapMenuAnim.set(".foldable", { perspective: 3000 });
    gsapMenuAnim.set(".fold", { transformOrigin: "0% 50% 0", rotationY: 90, backgroundColor: "#32BED7", opacity: 0 });
    gsapMenuAnim.to(".fold", { rotationY: 0, stagger: 0.14, backgroundColor: "#e9f9fc", opacity: 1, duration: 0.25 });
    gsapMenuAnim.to(".white", { backgroundColor: "#ffffff" });
  }, [gsapMenuAnim]);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      gsapMenuAnim.play();
    } else {
      setMenuOpen(false);
      gsapMenuAnim.reverse();
    }
  };

  return (
    <div id="app" className="fixed top-0 right-0 bg-white w-full " style={{ zIndex: "99" , borderBottom:'1px solid #d4d4d4'}}>
      <div className={`w-full  h-[70px] shadow:lg ${menuOpen ? 'bg-white' : ' bg-white'}`}></div>
      <div className='flex justify-between items-center '>
        <div className='h-8 w-10 absolute top-[11px] left-[23px] p-8 z-999 cursor-pointer text-right block'>
          <img src={Logo} className='w-[140px] top-[5px] left-[20px] absolute z-99 flex items-center  justify-center bg-white' alt="" />
        </div>

        <div onClick={toggleMenu} className={`h-8 w-8 absolute top-0 right-[10px] p-8 z-50 cursor-pointer text-right block`}>
          {menuOpen ? 'X' : (
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 17 14">
              <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
            </svg>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="menu sticky h-full w-full xl:overflow-hidden lg:p-6 lg:pl-0">
          {!isMobile ? (
            <nav className="foldable grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 h-full w-full ">
              <div className="fold hidden xl:block"></div>
              
              <div className="fold h-full w-full grid grid-rows-10 gap-8 px-12 contents">
                <div className="row-span-2"></div>
                <ul className="row-span-3 leading-8 w-full">
                  <li className={`title uppercase tracking-widest ${isMobile ? 'text-xl': ''}`}>Links</li>
                  <li className="text"><a href="/" className="cursor-pointer hover:underline">Home</a></li>
                  <li className="text"><a href="/about" className="cursor-pointer hover:underline">About Us</a></li>
                  <li className="text"><a href="/blogs" className="cursor-pointer hover:underline">Blogs</a></li>
                  <li className="text"><a href="/contact" className="cursor-pointer hover:underline">Contact Us</a></li>

                </ul>
                <ul className="row-span-3 leading-8 w-full">
                  <li className="title uppercase tracking-widest">Brands</li>
                  <li className="text"><a href="/ecomagix" className="cursor-pointer hover:underline">Ecomagix</a></li>
                  <li className="text"><a href="woodmagix" className="cursor-pointer hover:underline">Woodmagix</a></li>
                  <li className="text"><a href="/claymagix" className="cursor-pointer hover:underline">Claymagix</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Skyace</a></li>

                </ul>
                <ul className="row-span-3 leading-8 w-full">
                  <li className="title uppercase tracking-widest">Products</li>
                  <li className="text"><a href="/DoorFrams" className="cursor-pointer hover:underline">Door & Door Frames</a></li>
                  <li className="text"><a href="/Flyash_Brick_pallets" className="cursor-pointer hover:underline">Fly-ash Brick Pallets</a></li>
                  <li className="text"><a href="/Boards_panels" className="cursor-pointer hover:underline">Boards & Panels</a></li>
                  <li className="text"><a href="/jails" className="cursor-pointer hover:underline">Jali</a></li>
                  <li className="text"><a href="/furniture" className="cursor-pointer hover:underline">Furniture</a></li>
                  <li className="text"><a href="/Shuttering_formwork" className="cursor-pointer hover:underline">Shuttering & Formwork</a></li>
                  <li className="text"><a href="/Roofing_Flooring_Solution" className="cursor-pointer hover:underline">Roofing & Flooring solutions</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Construction Blocks</a></li>


                </ul>
              </div>
              {/* <div className="fold h-full w-full grid grid-rows-10 gap-8 px-12">
                <div className="row-span-2"></div>
                <ul className="row-span-3 leading-8 w-full">
                  <li className="title uppercase tracking-widest">Section 5</li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">First item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Second item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Third item</a></li>
                </ul>
                <ul className="row-span-3 leading-8 w-full">
                  <li className="title uppercase tracking-widest">Section 6</li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">First item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Second item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Third item</a></li>
                </ul>
              </div> */}
              {/* <div className="fold h-full w-full grid grid-rows-10 gap-8 px-12">
                <div className="row-span-2"></div>
                <ul className="row-span-3 leading-8 w-full">
                  <li className="title uppercase tracking-widest">Section 7</li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">First item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Second item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Third item</a></li>
                </ul>
                <ul className="row-span-3 leading-8 w-full">
                  <li className="title uppercase tracking-widest">Section 8</li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">First item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Second item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Third item</a></li>
                </ul>
              </div> */}
            </nav>
          ) : (
            <nav className="w-full p-8 flex flex-wrap h-[100%] max-h-[100vh] overflow-auto" style={{scrollbarWidth:'none'}}>
              <ul className="mb-12 w-full sm:w-1/2 md:w-1/3 px-8 py-0 sm:py-8 mt-[70px]">
              <ul className="row-span-3 leading-8 w-full">
                  <li className={`title uppercase tracking-widest ${isMobile ? 'text-xl': ''}`}>Links</li>
                  <li className="text"><a href="/" className="cursor-pointer hover:underline">Home</a></li>
                  <li className="text"><a href="/about" className="cursor-pointer hover:underline">About Us</a></li>
                  <li className="text"><a href="/blogs" className="cursor-pointer hover:underline">Blogs</a></li>
                  <li className="text"><a href="/contact" className="cursor-pointer hover:underline">Contact Us</a></li>

                </ul>
              </ul>
              <ul className="mb-12 w-full sm:w-1/2 md:w-1/3 px-8 py-0 sm:py-8">
                <ul className="leading-8 mx-auto px-0 sm:px-8 text-left">
                  <li className="title uppercase tracking-widest text-xl"><a href="#">Brands</a></li>
                  <li className="text"><a href="/ecomagix" className="cursor-pointer hover:underline">Ecomagix</a></li>
                  <li className="text"><a href="/woodmagix" className="cursor-pointer hover:underline">Woodmagix</a></li>
                  <li className="text"><a href="/claymagix" className="cursor-pointer hover:underline">Claymagix</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Skyace</a></li>

                </ul>
              </ul>
              <ul className="mb-12 w-full sm:w-1/2 md:w-1/3 px-8 py-0 sm:py-8">
                <ul className="leading-8 mx-auto px-0 sm:px-8 text-left">
                  <li className="title uppercase tracking-widest text-xl"><a href="#">Products</a></li>
                  <li className="text"><a href="/DoorFrams" className="cursor-pointer hover:underline">Door & Door Frames</a></li>
                  <li className="text"><a href="/Flyash_Brick_pallets" className="cursor-pointer hover:underline">Fly-ash Brick Pallets</a></li>
                  <li className="text"><a href="/Boards_panels" className="cursor-pointer hover:underline">Boards & Panels</a></li>
                  <li className="text"><a href="/jails" className="cursor-pointer hover:underline">Jali</a></li>
                  <li className="text"><a href="/furniture" className="cursor-pointer hover:underline">Furniture</a></li>
                  <li className="text"><a href="/Shuttering_formwork" className="cursor-pointer hover:underline">Shuttering & Formwork</a></li>
                  <li className="text"><a href="/Roofing_Flooring_Solution" className="cursor-pointer hover:underline">Roofing & Flooring solutions</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Construction Blocks</a></li>


                </ul>
              </ul>
              {/* <ul className="mb-12 w-full sm:w-1/2 md:w-1/3 px-8 py-0 sm:py-8">
                <ul className="leading-8 mx-auto px-0 sm:px-8 text-left">
                  <li className="title uppercase tracking-widest"><a href="#">Section 5</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">First item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Second item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Third item</a></li>
                </ul>
              </ul> */}
              {/* <ul className="mb-12 w-full sm:w-1/2 md:w-1/3 px-8 py-0 sm:py-8">
                <ul className="leading-8 mx-auto px-0 sm:px-8 text-left">
                  <li className="title uppercase tracking-widest"><a href="#">Section 6</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">First item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Second item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Third item</a></li>
                </ul>
              </ul> */}
              {/* <ul className="mb-12 w-full sm:w-1/2 md:w-1/3 px-8 py-0 sm:py-8">
                <ul className="leading-8 mx-auto px-0 sm:px-8 text-left">
                  <li className="title uppercase tracking-widest"><a href="#">Section 7</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">First item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Second item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Third item</a></li>
                </ul>
              </ul>
              <ul className="mb-12 w-full sm:w-1/2 md:w-1/3 px-8 py-0 sm:py-8">
                <ul className="leading-8 mx-auto px-0 sm:px-8 text-left">
                  <li className="title uppercase tracking-widest"><a href="#">Section 8</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">First item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Second item</a></li>
                  <li className="text"><a href="#" className="cursor-pointer hover:underline">Third item</a></li>
                </ul>
              </ul> */}
            </nav>
          )}
          <div className="menucontent"></div>
        </div>
      )}
    </div>
  );
};

export default Home1;
