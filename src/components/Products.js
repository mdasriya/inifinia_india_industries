import React from 'react';
import upper from "../assets/img/1500 x 400px.jpg"
// import data
import { motion } from "framer-motion";
import { products } from "../data"


// import product slider components

import ProductSlider from "../components/ProductSlider"



const Products = () => {

  // destructure products
   
  const {title, subtitle} =  products;

  return <section className='section text-center'>
  <div className='mv:-mt-[30px] ssm:-mt-4'>

<img src={upper}  />
  </div>

    <div className='container mx-auto'>
    
      <div>
        <motion.h2 className='title' whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                initial={{
                  x: "100px",
                  opacity: 0.3,
                }}
                transition={{
                  duration: 1,
                }}>{title}</motion.h2>
        <motion.p className='max-w-[750px] mx-auto mb-[50px] lg:mb-[70px]' whileInView={{
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
                }}>{subtitle}</motion.p>
      </div>
{/* sliders */}
<ProductSlider  data-aos="fade-right" />

    </div>
  </section>;
};

export default Products;
