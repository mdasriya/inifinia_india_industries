// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';
// import _ from 'lodash';
// import Logo from "../assets/img/INFINIA_LOGO.png";
// import styled from 'styled-components';

import React, { useState, useEffect } from "react";
import Logo from "../assets/img/INFINIA_LOGO.png";
import styled from "styled-components";
import image1 from "../../src/assets/img/1. RRP Ecomagix 280 x 286px.jpg";
import image2 from "../../src/assets/img/1. Terracotta 280 x 286px.jpg";
import image3 from "../../src/assets/img/metal (1).jpg";
import image4 from "../../src/assets/img/Picture3.jpg";
import image5 from "../../src/assets/img/flyashbrick copy.jpg";
import image6 from "../../src/assets/img/terracotta-jali-tiles-500x500.jpg";
import image7 from "../../src/assets/img/1 (1) (1).jpg";
import image8 from "../../src/assets/img/particle-boards.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

import { RiArrowDropDownLine } from "react-icons/ri";




const Home1 = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [subMenuTitle, setSubMenuTitle] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && menuActive) {
        toggleMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (subMenuActive) {
      setSubMenuActive(false);
      setSubMenuTitle("");
    }
  };

  const showSubMenu = (menuTitle) => {
    setSubMenuTitle(menuTitle);
    setSubMenuActive(true);
  };

  const hideSubMenu = () => {
    setSubMenuActive(false);
    setSubMenuTitle("");
  };

  return (
    <Home_Container>
      <header className="header"style={{boxShadow:'0px 6px 4px -5px rgba(0,0,0,0.44)'}}>
        <div className="container " >
          <div className="row v-center">
            <div className="header-item item-left flex justify-between items-center">
              <div className="logo">
                <a href="/">
                  <img src={Logo} className="h-12" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="header-item item-center">
              <div
                className={`menu-overlay ${menuActive ? "active" : ""}`}
                onClick={toggleMenu}
              ></div>
              <nav className={`menu ${menuActive ? "active" : ""}`}>
                <div className="mobile-menu-head">
                  <div className="go-back" onClick={hideSubMenu}>
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title">{subMenuTitle}</div>
                  <div className="mobile-menu-close" onClick={toggleMenu}>
                    &times;
                  </div>
                </div>
                <ul className="menu-main">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li className="menu-item-has-children  ssm:flex">
                    <a href="#" className="flex items-center justify-center  ssm:justify-start" style={{display:"flex"}} onClick={() => showSubMenu("New")}>

                      Brands <RiArrowDropDownLine className="text-2xl" />
                

                    </a>
                    
                    <div
                      className={`sub-menu mega-menu mega-menu-column-4 ${
                        subMenuActive && subMenuTitle === "New" ? "active" : ""
                      }`}
                    >
                      <div className="list-item text-center">
                        <a href="/ecomagix">
                          <img src={image1} alt="Fashion" />
                          <h4 className="title">Ecomagix</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="/claymagix">
                          <img src={image2} alt="Electronics" />
                          <h4 className="title">Claymagix</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="/woodmagix">
                          <img src={image3} alt="Mobiles" />
                          <h4 className="title">Woodmagix</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="/skyace">
                          <img src={image4} alt="Appliances" />
                          <h4 className="title">Skyace</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#"  className="flex items-center justify-center  ssm:flex mv:flex ssm:justify-start" style={{display:'flex'}} onClick={() => showSubMenu("Shop")}>
                      Products <RiArrowDropDownLine className="text-2xl" />
                    </a>
                    <div
                      className={`sub-menu mega-menu mega-menu-column-4   M ${
                        subMenuActive && subMenuTitle === "Shop" ? "active" : ""
                      }`}
                    >


                      <div className="shop_outer">

                      <div className=" items-center text-center flex flex-col justify-center ">
                        <h4 className="title ">Door & DoorFrams</h4> 
                        <div className="list-item text-center ">
                          <a href="/DoorFrams">
                            <img
                              src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959281/TO/ZD/HQ/101519832/wpc-door-frame-1000x1000.png"
                              className="image-hover-scale "
                              style={{ height: "120px", width: "120px", marginTop:'20px', borderRadius:'10px' }}
                              alt="Fashion"
                            /> 
                            </a>
                      </div>
                      </div>
                
                      <div className="items-center text-center flex flex-col justify-center">
                        <h4 className="title mb-[20px]">Fly-ash Brick Pallets</h4>
                        <div className="list-item text-center">
                          <a href="/Flyash_Brick_pallets">
                            <img
                              src={image5}
                              style={{ height: "120px", width: "120px" , marginTop:'20px' ,borderRadius:'10px'}}
                              className="image-hover-scale"
                              alt="Fashion"
                            />
                          </a>
                        </div>
                      </div>


                      <div className="items-center text-center flex flex-col justify-center">
                        <h4 className="title mb-[20px]">Boards & Panels</h4>
                        <div className="list-item text-center">
                          <a href="/Boards_panels">
                            <img
                              src={image8}
                              style={{ height: "120px", width: "120px" ,marginTop:'20px' ,borderRadius:'10px'}}
                              className="image-hover-scale"
                              alt="Fashion"
                            />
                          </a>
                        </div>
                       
                      </div>
                     
                     
                     
                      <div className="items-center text-center flex flex-col justify-center">
                          <h4 className="title ">Jalis</h4>
                          <div className="list-item text-center">
                            <a href="/jails">
                              <img
                                src={image6}
                                style={{ height: "120px", width: "120px" ,marginTop:'20px',borderRadius:'10px'}}
                                className="image-hover-scale"
                                alt="Fashion"
                              />
                            </a>
                          </div>
                        </div>
                    
                    
                    
                      <div className="items-center text-center flex flex-col justify-center">
                        <h4 className="title mb-[20px]">Furniture</h4>
                        <div className="list-item text-center">
                          <a href="/furniture">
                            <img
                              src="https://5.imimg.com/data5/SELLER/Default/2022/9/FL/IH/QM/101519832/recycle-plastic-sheet-furniture-500x500.jpeg"
                              style={{ height: "120px", width: "120px" ,marginTop:'20px',borderRadius:'10px'}}
                              className="image-hover-scale"
                              alt="Fashion"
                            />
                          </a>
                        </div>
                      </div>
                   
                   
                   
                      <div className="items-center text-center flex flex-col justify-center">
                        <h4 className="title mb-[20px]">Shuttering & Formwork</h4>
                        <div className="list-item text-center">
                          <a href="/Shuttering_formwork">
                            <img
                              src="https://5.imimg.com/data5/SELLER/Default/2023/3/292998998/CN/ZF/FP/101519832/rrp-shuttering-plywood-500x500.jpg"
                              style={{ height: "120px", width: "120px",marginTop:'20px',borderRadius:'10px' }}
                              className="image-hover-scale"
                              alt="Fashion"
                            />
                          </a>
                        </div>
                      </div>




                      <div className="items-center text-center flex flex-col justify-center">
                        <h4 className="title mb-[20px]">Elevational, Roofing and Flooring Solution</h4>
                        <div className="list-item text-center">
                          <a href="/Roofing_Flooring_Solution">
                            <img
                              src={image7}
                              style={{ height: "120px", width: "120px",marginTop:'20px',borderRadius:'10px' }}
                              className="image-hover-scale"
                              alt="Fashion"
                            />
                          </a>
                        </div>
                      </div>
                  
                  
                  
                      <div className="items-center text-center flex flex-col justify-center">
                        <h4 className="title mb-[20px]">Construction Blocks</h4>
                        <div className="list-item text-center">
                          <a href="/bricks">
                            <img
                              src="https://infinia-new.vercel.app/static/media/adrian-vazquez-casa-en-huerta.707628762b1b4b019eb6.jpg"
                              style={{ height: "120px", width: "120px" ,marginTop:'20px',borderRadius:'10px'}}
                              className="image-hover-scale"
                              alt="Fashion"
                            />
                          </a>
                        </div>
                      </div> 
                 
                 
                 
                 
                 
                    </div>



                    </div>

                  </li>
                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/events">Media & Events</a>
                  </li>
                 
{/*   
                  <li className="menu-item-has-children">
                    <a href="#" onClick={() => showSubMenu('Deals')}>Deals <i className="fa fa-angle-down"></i></a>
                    <div className={`sub-menu mega-menu mega-menu-column-1 ${subMenuActive && subMenuTitle === 'Deals' ? 'active' : ''}`}>
                      <div className="list-item">
                        <ul>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Suit</a></li>
                          <li><a href="#">Kurta</a></li>
                          <li><a href="#">Watch</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <ul>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Suit</a></li>
                          <li><a href="#">Kurta</a></li>
                          <li><a href="#">Watch</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <ul>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Suit</a></li>
                          <li><a href="#">Kurta</a></li>
                          <li><a href="#">Watch</a></li>
                        </ul>
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-item item-right">
              <a href="#" className="menu-icon" onClick={toggleMenu}>
              <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </div>
      </header>
    </Home_Container>
  );
};

export default Home1;

const Home_Container = styled.div`
  /* Basic reset */

  body {
    line-height: 1.5;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    overflow-x: hidden;
  }

  .image-hover-scale {
  transition: transform 0.3s ease; /* Smooth transition for the scaling effect */
}

.image-hover-scale:hover {
  transform: scale(1.2); /* Scale the image to 120% of its original size */
}

.shop_outer{
display: grid;
gap:30px;
  grid-template-columns: repeat(4,1fr);
}

  .header .menu .menu-main {
    display: flex;
    justify-content: end;
    gap: 26px;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }
  :before,
  :after {
    box-sizing: border-box;
  }
  .container {
    max-width: 1273px;
    margin: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .v-center {
    align-items: center;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  /* header */
  .header {
    display: block;
    width: 100%;
    position: relative;
    z-index: 99;
    padding: 15px;
  }
  .header .item-left {
    flex: 0 0 17%;
  }
  .header .logo a {
    font-size: 30px;
    color: #000000;
    font-weight: 700;
    text-decoration: none;
  }
  .header .item-center {
    flex: 0 0 66%;
  }
  .header .item-right {
    flex: 0 0 17%;
    display: none;
    justify-content: flex-end;
  }
  .header .item-right a {
    text-decoration: none;
    font-size: 16px;
    color: #555555;
    display: inline-block;
    margin-left: 10px;
    transition: color 0.3s ease;
  }
  .header .menu > ul > li {
    display: inline-block;
    line-height: 50px;
    margin-left: 25px;
  }
  .header .menu > ul > li > a {
    font-size: 15px;
    font-weight: 500;
    color: #000000;
    position: relative;
    text-transform: capitalize;
    transition: color 0.3s ease;
  }
  .header .menu > ul > li .sub-menu {
    position: absolute;
    z-index: 500;
    background-color: #ffffff;
    box-shadow: -2px 2px 70px -25px rgba(0, 0, 0, 0.3);
    padding: 20px 30px;
    transition: all 0.5s ease;
    margin-top: 25px;
    opacity: 0;
    visibility: hidden;
  }
  @media (min-width: 992px) {
    .header .menu > ul > li.menu-item-has-children:hover .sub-menu {
      margin-top: 0;
      visibility: visible;
      opacity: 1;
    }
  }
  .header .menu > ul > li .sub-menu > ul > li {
    line-height: 1;
  }
  .header .menu > ul > li .sub-menu > ul > li > a {
    display: inline-block;
    padding: 10px 0;
    font-size: 15px;
    color: #555555;
    transition: color 0.3s ease;
    text-decoration: none;
    text-transform: capitalize;
  }
  .header .menu > ul > li .single-column-menu {
    min-width: 280px;
    max-width: 350px;
  }
  .header .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li {
    line-height: 1;
    display: block;
  }
  .header .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a {
    padding: 10px 0;
    display: inline-block;
    font-size: 15px;
    color: #555555;
    transition: color 0.3s ease;
  }
  .header .menu > ul > li .sub-menu.mega-menu {
    left: 50%;
    transform: translateX(-50%);
  }

  .header .menu > ul > li .sub-menu.mega-menu-column-4 {
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 15px;
  }
  .header .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item {
    flex: 0 0 25%;
    padding: 0 15px;
  }
  .header .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item .title {
    font-size: 16px;
    color: #212121;
    font-weight: 500;
    line-height: 1;
    padding: 10px 0;
  }
  .header
    .menu
    > ul
    > li
    .sub-menu.mega-menu-column-4
    > .list-item.text-center
    .title {
    text-align: center;
  }
  .header .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item img {
    max-width: 100%;
    width: 100%;
    vertical-align: middle;
    margin-top: 10px;
    height: 300px;
    object-fit: cover;
  }
  .header .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a:hover,
  .header .menu > ul > li .sub-menu > ul > li > a:hover,
  .header .item-right a:hover,
  .header .menu > ul > li:hover > a {
    color: #D08E42;
  }
  /* banner section */
  .banner-section {
    background-image: url("../img/banner.jpg");
    background-size: cover;
    background-position: center;
    height: 700px;
    width: 100%;
    display: block;
  }
  .mobile-menu-head,
  .mobile-menu-trigger {
    display: none;
  }

  /*responsive*/
  @media (max-width: 991px) {
    .header .item-center {
      order: 3;
      flex: 0 0 100%;
    }
    .header .item-left,
    .header .item-right {
      display: flex;
      flex: 0 0 auto;
    }
    .v-center {
      justify-content: space-between;
    }
    .header .mobile-menu-trigger {
      display: flex;
      height: 30px;
      width: 30px;
      margin-left: 15px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }
    .header .mobile-menu-trigger span {
      display: block;
      height: 2px;
      background-color: #333333;
      width: 24px;
      position: relative;
    }
    .header .mobile-menu-trigger span:before,
    .header .mobile-menu-trigger span:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #333333;
    }
    .header .mobile-menu-trigger span:before {
      top: -6px;
    }
    .header .mobile-menu-trigger span:after {
      top: 6px;
    }
    .header .item-right {
      align-items: center;
    }

    .header .menu {
      position: fixed;
      width: 320px;
      background-color: #ffffff;
      left: 0;
      top: 0;
      height: 100%;
      overflow: hidden;
      transform: translate(-100%);
      transition: all 0.5s ease;
      z-index: 1099;
    }
    .header .menu.active {
      transform: translate(0%);
    }
    .header .menu > ul > li {
      line-height: 1;
      margin: 0;
      display: block;
    }
    .header .menu > ul > li > a {
      line-height: 50px;
      height: 50px;
      padding: 0 50px 0 15px;
      display: block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .header .menu > ul > li > a i {
      position: absolute;
      height: 50px;
      width: 50px;
      top: 0;
      right: 0;
      text-align: center;
      line-height: 50px;
      transform: rotate(-90deg);
    }
    .header .menu .mobile-menu-head {
      display: flex;
      height: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 501;
      position: sticky;
      background-color: #ffffff;
      top: 0;
    }
    .header .menu .mobile-menu-head .go-back {
      height: 50px;
      width: 50px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      line-height: 50px;
      text-align: center;
      color: #000000;
      font-size: 16px;
      // display: none;
    }
    .header .menu .mobile-menu-head.active .go-back {
      display: block;
    }
    .header .menu .mobile-menu-head .current-menu-title {
      font-size: 15px;
      font-weight: 500;
      color: #000000;
    }
    .header .menu .mobile-menu-head .mobile-menu-close {
      height: 50px;
      width: 50px;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      line-height: 50px;
      text-align: center;
      color: #000000;
      font-size: 25px;
    }
    .header .menu .menu-main {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      display: block;
    }
    .header .menu > ul > li .sub-menu.mega-menu,
    .header .menu > ul > li .sub-menu {
      visibility: visible;
      opacity: 1;
      position: absolute;
      box-shadow: none;
      margin: 0;
      padding: 15px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-top: 65px;
      max-width: none;
      min-width: auto;
      display: none;
      transform: translateX(0%);
      overflow-y: auto;
    }
    .header .menu > ul > li .sub-menu.active {
      display: block;
    }
    @keyframes slideLeft {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0%);
      }
    }
    @keyframes slideRight {
      0% {
        opacity: 1;
        transform: translateX(0%);
      }
      100% {
        opacity: 0;
        transform: translateX(100%);
      }
    }
    .header .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item img {
      margin-top: 0;
    }
    .header
      .menu
      > ul
      > li
      .sub-menu.mega-menu-column-4
      > .list-item.text-center
      .title {
      margin-bottom: 20px;
    }
    .header
      .menu
      > ul
      > li
      .sub-menu.mega-menu-column-4
      > .list-item.text-center:last-child
      .title {
      margin-bottom: 0px;
    }
    .header .menu > ul > li .sub-menu.mega-menu-column-4 > .list-item {
      flex: 0 0 100%;
      padding: 0px;
    }
    .header .menu > ul > li .sub-menu > ul > li > a,
    .header .menu > ul > li .sub-menu.mega-menu > .list-item > ul > li > a {
      display: block;
    }
    .header .menu > ul > li .sub-menu.mega-menu > .list-item > ul {
      margin-bottom: 15px;
    }
    .menu-overlay {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1098;
      visibility: hidden;
      opacity: 0;
      transition: all 0.5s ease;
    }
    .menu-overlay.active {
      visibility: visible;
      opacity: 1;
    }
  }


  /* Mobile styles */
  @media only screen and (max-width: 767px) {
   .shop_outer{
display: grid;
  grid-template-columns: repeat(1,1fr);
}   
 
  }

`;
