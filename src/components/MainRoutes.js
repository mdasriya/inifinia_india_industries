import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleProducts from "../pages/SingleProducts";
import Flyash_Brick_Pallets from "../pages/Flyash_Brick_Pallets";
import Boards_Panels from "../pages/Boards_Panels";
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
import FormData from "./FormData";
import PrivateRoutes from "./PrivateRoutes";
import { AnimatePresence } from "framer-motion";
import Image_Event from "./Image_Event";

import Privacy_Policy from '../pages/Privacy_Policy';
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
      <Route path="/Boards_panels" element={<Boards_Panels />}/>
      <Route path="/Shuttering_formwork" element={<Shuttering_formwork />} />
      <Route
        path="/Roofing_Flooring_Solution"
        element={<Roofing_Flooring_solutions />}/>
      <Route path="/jails" element={<Jails />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/bricks" element={<Bricks />} />
      <Route path="/ecomagix" element={<Ecomagix />} />
      <Route path="/claymagix" element={<Claymagix />} />
      <Route path="/woodmagix" element={<Woodmagix />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/events" element={<Image_Event />} />
      <Route path="/privacy" element={<Privacy_Policy />} />

      <Route path="/formData" element={<PrivateRoutes><FormData /></PrivateRoutes>} />
      
      <Route path="/*" element={<NotFound />} />
    </Routes>
 </AnimatePresence>
  );
};

export default MainRoutes;
