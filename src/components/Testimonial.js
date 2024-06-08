import React from 'react';
import { motion } from 'framer-motion';
// import components
import TestimonialSlider from "./TestimonialSlider";

// import data
import {testimonial} from "../data"
// deStructure textimonial
const Testimonial = () => {
  const {image, title} = testimonial
  return <section className='section test_bg lg:mt-[40px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
        <motion.div
        initial={{
          x:"-200px",
          opacity:0
        }}
        whileInView={{
          x:0,
          opacity:1
        }}
        transition={{
          duration:1
        }}
        
        className='lg:max-w-[50%]'>
          {/* title */}
          <h2 className='title mb-9'>{title}</h2>
          {/* sliders */}
          <TestimonialSlider />
        </motion.div>
{/* image */}
<motion.div
 initial={{
  x:"200px",
  opacity:0
}}
whileInView={{
  x:0,
  opacity:1
}}
transition={{
  duration:1
}}

className='order-1 rounded-lg'>
  <img className='rounded-lg img' src={image.type} alt='' ></img>
</motion.div>
      </div>
    </div>
  </section>;
};

export default Testimonial;
