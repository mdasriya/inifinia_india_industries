import React, { useEffect } from 'react';
import img from "../assets/img/about_1.jpeg";
import img3 from "../assets/img/9.jpg";
import climet from "../assets/img/climet.png";
import super_q from "../assets/img/super_q.png";
import cost_effective from "../assets/img/cost-removebg-preview.png";
import sus from "../assets/img/sus.png";
import teracota from "../assets/img/terracotta-jali-500x500.jpg";
import img4 from "../assets/img/lighting.png";
import styled from "styled-components";
import Transition from "./Transition";
import { motion } from "framer-motion";
import image1 from '../assets/img/WPC355 x 280px.jpg'
import image2 from '../assets/img/RRP 355 x 280px.jpg'
import image3 from '../assets/img/Terracotta 355 x 280px.jpg'



function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <DIV className="bg-white overflow-hidden">
        <section className="pt-20 ">
          <div className=" w-[100%] ">
            <div className="heading lg:mx-2 mb-10 ssm:w-[100%] mv:w-[100%] ">
              <motion.h2
                className="text1 primary text-center mt-1 text-3xl "
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                initial={{
                  x: "100px",
                  opacity: 0.3,
                }}
                transition={{
                  duration: 1,
                }}
              >
                Why Infinia Industries?
              </motion.h2>

              <div className="outer flex flex-col md:flex-row mt-5 h-[500px]">
                <motion.div
                  className="image_outer md:w-1/2"
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  initial={{
                    x: "-300px",
                    opacity: 0.5,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <img
                    src={img}
                    alt="Image"
                    className="left  w-[100%]  ssm:w-[100%] ssm:p-2 sv:w-[100%] lg:h-[100%] ssm:h-[300px]"
                  />
                </motion.div>
                <motion.div
                  className="md:w-1/2 ml-[-100px]"
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  initial={{
                    x: "100px",
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                >
                  <h1
                    className="text-base  font-normal lg:text-[150px]  mv:text-[50px] ssm:text-[50px] mv:text-center ssm:ml-[100px] mv:mt-12 leading-7 text-gray-800 mt-5 lg:mt-[39px] md:mt-0 mb-2"
                    style={{ textAlign: "center" }}
                  >
                    INFINIA{" "}
                  </h1>

                  <div className="outer_para">
                    <p className="para font-normal text-lg leading-7 text-gray-800 mv:text-left lg:ml-[117px]  mt-5 mv:mt-12 mv:ml-14   lg:mt-[60px]">
                      Welcome to Infinia Industries Pvt Ltd – Central India's
                      Premier Manufacturer of Innovative Building Solutions! At
                      Infinia Industries, we take pride in being the forefront
                      of innovation, carving a niche as the leading manufacturer
                      of Wood Polymer Composite,Recycle  Regenerated Plastic(Rpp Products), and Terra
                      Cotta clay products in Central India.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="row">
              <div className="">
                <motion.h3
                  className="text-2xl font-bold mx-2 p-0  text-gray-700"
                  style={{ textAlign: "center" }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{
                    opacity: 0,
                    y: "100px",
                  }}
                  transition={{
                    duration: 2,
                    delay: 1,
                  }}
                >
                  Our Expertise:{" "}
                </motion.h3>

                <div className="text-base font-norma">
                  <div className="article">
                    <motion.article
                      className="relative  border-4 border-red-600"
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      initial={{
                        y: "100px",
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                      }}
                    >
                      <div className="h-[280px]">
                        <img
                          className="w-[full]"
                          src={image1}
                          alt=""
                        />
                      </div>
                    <div className="p-1">
                    <h2>Wood Polymer Composite (WPC)</h2>
                      <p>
                        Infinia Industries excels in the production of Wood
                        Polymer Composite, a revolutionary material that
                        combines the natural aesthetics of wood with the
                        durability of polymer.
                      </p>
                    </div>
                     
                    </motion.article>

                    <motion.article
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      initial={{
                        y: "100px",
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.8,
                      }}
                    >
                      <div className=" h-[280px] ">
                        <img className="w-full" src={image2} alt="" />
                      </div>
                     <div className="p-1">
                     <h2>Recycle Regenerated Plastic(RRP)</h2>
                      <p>
                        Contributing to the global effort to combat plastic
                        waste, our Recycle Regenerated Plastic(RRP) products are manufactured
                        with a focus on environmental sustainability.
                      </p>
                     </div>
                    </motion.article>

                    <motion.article
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      initial={{
                        y: "100px",
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 1.3,
                      }}
                    >
                      <div className=" h-[280px]">
                        <img
                          className="w-full object-cover"
                          src={image3}
                          alt=""
                        />
                      </div>
                     <div className="p-1">
                     <h2>Terracotta Clay Products</h2>
                      <p>
                        Rooted in tradition and crafted with modern precision,
                        our Terra Cotta products add a touch of timeless
                        elegance to architectural and landscaping projects.
                      </p>
                     </div>
                    </motion.article>
                  </div>
                </div>
                <h3
                  className="text-xl font-bold mx-2 text-gray-700 mb-2"
                  style={{ textAlign: "center" }}
                >
                  Why Choose Infinia industries:
                </h3>

                <div className="main">
                  {/* first div */}
                  <motion.down
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    initial={{
                      y: "100px",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                    }}
                    className="down"
                  >
                    <div className="w-[100%] h-[100%]">
                      <img
                        className="image"
                        width={"50%"}
                        src={climet}
                        alt=""
                      />
                    </div>
                    <div className="subdown">
                      <h2>Climate Responsive:</h2>
                      <p>
                        Our products are engineered to adapt to diverse
                        climates, ensuring optimal performance and longevity in
                        any environment
                      </p>
                    </div>
                  </motion.down>

                  {/* second div */}
                  <motion.down
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    initial={{
                      y: "100px",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.6,
                    }}
                    className="down"
                  >
                    <div>
                      <img className="image" src={sus} alt="" />
                    </div>
                    <div className="subdown">
                      <h2>Extended Usable Life:</h2>
                      <p>
                        Infinia products boast a longer lifespan compared to
                        alternatives in the market, providing sustainable
                        solutions that stand the test of time.
                      </p>
                    </div>
                  </motion.down>

                  {/* third div */}
                  <motion.down
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    initial={{
                      y: "100px",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.9,
                    }}
                    className="down"
                  >
                    <div>
                      <img className="image" src={super_q} alt="" />
                    </div>
                    <div className="subdown">
                      <h2>Superior Quality:</h2>
                      <p>
                        Quality is at the heart of everything we do. Our
                        commitment to excellence ensures that our products meet
                        and exceed industry standards
                      </p>
                    </div>
                  </motion.down>

                  {/* fouth div */}
                  <motion.down
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    initial={{
                      y: "100px",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 1.2,
                    }}
                    className="down"
                  >
                    <div>
                      <img className="image" src={cost_effective} alt="" />
                    </div>
                    <div className="subdown">
                      <h2>Cost-Effective Solutions:</h2>
                      <p>
                        We understand the value of cost-effective solutions
                        without compromising on quality. Infinia products offer
                        unmatched value for your investment.
                      </p>
                    </div>
                  </motion.down>

                  {/* five number */}
                  <motion.down
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    initial={{
                      y: "100px",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 1,
                    }}
                    className="down"
                  >
                    <div>
                      <img className="image" src={sus} alt="" />
                    </div>
                    <div className="subdown">
                      <h2>Sustainability Champions:</h2>
                      <p>
                        At Infinia Industries, sustainability isn't just a goal;
                        it's a responsibility. Our products actively contribute
                        to preventing deforestation and reducing plastic waste.
                      </p>
                    </div>
                  </motion.down>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DIV>
    </>
  );
}

export default Transition(About);

const DIV = styled.div`
  .about1 {
    display: flex;
    margin-top: 30px;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* flex-wrap: wrap; */
    overflow: hidden;
    font-weight: 600;
  }
  .down {
    height: 300px;
  }

  .about1 img {
    height: 300px;
    width: 400px;
  }
  article {
    width: 100%;
    max-width: 400px;

    background-color: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1);
  }
  article img {
    height: 100%;
    width: 100%;
  }
  .article {
    width: 100%;
    display: flex;
    gap: 2rem;
    padding: 10px;
    margin: 10px;
    flex-direction: row;
    justify-content: center;
  }
  article img {
    border-radius: 5px;
  }

  article h2 {
    margin: 0.5rem 0;
    padding: 2px;
    font: 600 24px sans-serif;
    color: black;
  }

  article p {
    margin-bottom: 1rem;
    padding: 2px;
    color: #777;
    font-family: sans-serif;
  }

  article button {
    padding: 0.5rem 0.7rem;
    display: block;
    background-color: #03a9f4;
    border: none;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s all;
    /* animation: slide-in-top-to-bottom 1.5s; */
  }

  article button:hover {
    background-color: #29b6f6;
    transform: translatey(-2px);
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1);
  }

  article button:active {
    transform: translatey(0);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  }

  @keyframes slide-in-right-to-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-in-top-to-bottom {
    0% {
      opacity: 0;
      transform: translatey(100%);
    }
    50% {
      opacity: 0;
      transform: translatey(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }

    50% {
      opacity: 0;
      transform: translateX(-100%);
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadetext {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .down {
    width: 48%;
    /* max-width: 320px; */
    padding: 10px;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    /* animation: slide-in-right-to-left 0.5s ease-in-out forwards; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 180px;
    /* border: 2px solid red; */
  }
  .down .image {
    height: 100%;
    width: 400px;
    animation: fade;
    /* border: 1px solid blue; */
  }
  .subdown {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 5px;
    margin-left: 20px;
  }
  .main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
    margin: 10px;
    /* justify-content: center;
    width: 600px; */
  }

  /* Default styles */

  /* Tablet styles */
  @media only screen and (max-width: 768px) {
    .down {
      margin-left: -10px;
      height: fit-content;
    }
    .subdown {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 5px;
      margin-left: 0px;
      height: 100%;
    }
    .outer {
      height: fit-content;
    }
    .para {
      margin-left: 115px;
      margin-top: 15px;
    }
    .article {
      margin-left: -1px;
    }
    .outer_para {
      width: 100%;
      padding: 2px;
    }

    .about1 {
      display: flex;
      margin-top: 30px;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      /* flex-wrap: wrap; */
    }
    .about1 img {
      height: 300px;
      width: 400px;
    }
    .container {
      width: 100%; /* Adjust width for tablets */
    }

    .main {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;

      justify-content: start;
      width: 100%;
    }
    .main .down h2 {
      margin-top: 20px;
    }

    .article {
      /* background-color: #fff; */
      /* border: 1px solid #d5d5d5; */
      border-radius: 10px;
      /* box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1); */
      /* animation: slide-in-right-to-left 0.5s ease-in-out forwards; */
      flex-direction: column;
    }
    .down {
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    .down img {
      width: 100px;
      height: 100px;
    }
  }

  /* Mobile styles */
  @media screen and (max-width: 320px) {
    .image_outer {
      border: 2px solid red;
      width: 100%;
    }

    .left {
      border: 2px solid blue;
      width: 100%;
    }
    .about1 {
      overflow: hidden;
      /* width: 50%; */
    }
    .main {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      /* gap: 20px; */
      /* padding: -6px; */
      /* margin: 10px; */
      /* justify-content: center; */
      width: 500px;
    }
    .article {
      width: 100%;
      flex-direction: column;
    }
    .down {
      width: 43%;
      display: flex;
      flex-direction: column;
    }

    .text1 {
      margin-top: 40px;
    }
  }
`;
