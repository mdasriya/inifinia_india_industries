import React from "react";

// import data
import { newInStore } from "../data";

// import component
import NewItemsSlider from "./NewItemsSlider";

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className=" ssm:mt-6 xl:mt-12 ">
      <div className=" w-[100%]">
        <div className="flex flex-col lg:flex-row lg:p-5 justify-between">   
          {/* text */}
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0  lg:w-[20%] 
          ">
          <h2 className="title max-w-[245px] ssm:ml-6">{title}</h2>
          <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
          <div className="hidden lg:flex items-center border-2 p-2 ml-2 bg-orange-500 rounded-md">
            <a className=" border-primary lg:items-center font-medium transition-all" href="#">{link}</a>
            <div className="text-3xl">
              {icon}
            </div>
          </div>
         
          </div>
           {/* slider */}
           <div className="lg:w-[75%] xl:w-[70%] lg:right-24 ">
        <NewItemsSlider />
           </div>
        </div> 
      </div>
    </section>
  );
};

export default NewItems;