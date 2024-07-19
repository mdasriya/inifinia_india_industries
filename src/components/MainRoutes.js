import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleProducts from "../pages/SingleProducts";
import Flyash_Brick_Pallets from "../pages/Flyash_Brick_Pallets";
import UPR_Sliding_Window from "../pages/UPR_Sliding_Window";
import Jails from "../pages/Jails";
import Furniture from "../pages/Furniture";
import Shuttering_formwork from "../pages/Shuttering_formwork";
import Roofing_Flooring_solutions from "../pages/Roofing_Flooring_solutions";
import Bricks from "../pages/Bricks";
import About from "./About";
import ContactUs from "./ContactUs";
import Ecomagix from "../pages/Ecomagix";
import Claymagix from "../pages/Claymagix";
import Woodmagix from "../pages/Woodmagix";
import Blog from "./Blog";
import NotFound from "../pages/NotFound";
import Login from "./Login";
import { AnimatePresence } from "framer-motion";
import Image_Event from "./Image_Event";

import Privacy_Policy from '../pages/Privacy_Policy';
import Skyace from '../pages/Skyace';
import Material from './Material';
import BlogDetail from './BlogDetail';
import Enquiry from './Enquiry';
import Whatsapp from './Whatsapp';
const MainRoutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
 <AnimatePresence>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DoorFrams" element={<SingleProducts />} />
      <Route path="/Flyash_Brick_pallets" element={<Flyash_Brick_Pallets />} />
      <Route path="/UPR_Sliding_Window" element={<UPR_Sliding_Window />}/>
      <Route path="/Shuttering_formwork" element={<Shuttering_formwork />} />
      <Route
        path="/Roofing_Flooring_Solution"
        element={<Roofing_Flooring_solutions />}/>
      <Route path="/jails" element={<Jails />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/bricks" element={<Bricks />} />
      <Route path="/ecomagix" element={<Ecomagix />} />
      <Route path="/skyace" element={<Skyace />} />
      <Route path="/claymagix" element={<Claymagix />} />
      <Route path="/woodmagix" element={<Woodmagix />} />
      <Route path="/about" element={<About />} />   
      <Route path="/material" element={<Material />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/enquiry" element={<Enquiry />} />
      {/* <Route path="/whatapp" element={<Whatsapp />} /> */}
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/events" element={<Image_Event />} />
      <Route path="/privacy" element={<Privacy_Policy />} />

     
      <Route path="/*" element={<NotFound />} />
    </Routes>
 </AnimatePresence>
  );
};

export default MainRoutes;
