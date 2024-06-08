import React, { useEffect, useRef, useState } from "react";
import { features } from "../data";
import { gsap } from "gsap";
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";

const Features = () => {
  const { title, subtitle, image, buttonText, items } = features;
  const sectionRef = useRef(null);
const [visi, setVisi] = useState(false)
const navigate = useNavigate() 


  useEffect(() => {
    const section = sectionRef.current;

    // Define your animations
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(section, { opacity: 0, y: 50, ease: "power3.out" });

    // Trigger the animation when the section enters the viewport
    const handleScroll = () => {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.75) {
        tl.play();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll initially to check if section is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const boxvariants = {
    hidden:{
      x:"100vh",
    opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        delay:0.5,
        when:"beforeChildren",
        staggerChildren:0.6,
        duration:1
      }
    }
  }
  const listvariants = {
    hidden:{
      x:10,
      opacity:0
    },
    visible:{
      x:0,
   opacity:1,
  
    }
  }

  return (
    <section className="section" ref={sectionRef}>
      <div className="container mx-auto  lg:-mt-10  md:-mt-20  ssm:-mt-20" >
        <div className="flex flex-col lg:flex-row lg:gap-[100px]">
          {/* images */}
          <motion.div className="box flex-1 order-1 lg:-order-1 relative"
          initial={{ opacity: 0.3,x:"-300px" }}
          whileInView={{ opacity: 1, x:0}}
        transition={{duration:1}}
          
          >
            <img src={image.type} alt="" className="img"/>
            <div className="absolute top-[80%] left-[40%] ">
            <button onClick={()=> navigate("/contact")} className='bg-[rgba(255,255,255,0.9)] hover:bg-[rgba(255,255,255,0.5)]   text-lg rounded-md backdrop-blur-md transition lg:px-[35px] lg:py-[9px]'>Join</button>

            </div>
          </motion.div>

          {/* title */}
          <motion.div className="flex-1 flex flex-col justify-end"
             initial="hidden"
             variants={boxvariants}
             whileInView="visible"
             transition={{
              duration:4
             }}
          >
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <div >
              {items.map((item, index) => {
                // destructure item
                const { title, subtitle, icon } = item;
                return (
                  <motion.div className="flex mb-6 lg:last:mb-0" key={index}
                  variants={listvariants}  
                  >
                    <div className="text-2xl mr-4 lg:text-3xl">{icon}</div>
                    <div>
                      <h4 className="text-base lg:text-xl font-semibold mb-3">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* items */}
        </div>
      </div>
    </section>
  );
};

export default Features;
