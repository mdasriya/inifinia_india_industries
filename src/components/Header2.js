import React, { useEffect, useState } from "react";

import Logo from "../assets/img/INFINIA_LOGO.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Fragment } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    name: "Doors & Door Frames",
    description: "Get a better understanding of your traffic",
    href: "/DoorFrams",
    icon: ChartPieIcon,
  },
  {
    name: "Sliding window profiles & Window Frames",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Fly-ash Brick Pallets",
    description: "Your customers’ data will be safe and secure",
    href: "/Flyash_Brick_pallets",
    icon: FingerPrintIcon,
  },
  {
    name: "Warehouse Pallets",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Boards & Panels",
    description: "Build strategic funnels that will convert",
    href: "/Boards_panels",
    icon: ArrowPathIcon,
  },
  {
    name: "Jalis",
    description: "Build strategic funnels that will convert",
    href: "/jails",
    icon: ArrowPathIcon,
  },
  {
    name: "Planks & Battens",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Furniture",
    description: "Build strategic funnels that will convert",
    href: "/furniture",
    icon: ArrowPathIcon,
  },
  {
    name: "Shuttering & Formwork",
    description: "Build strategic funnels that will convert",
    href: "/Shuttering_formwork",
    icon: ArrowPathIcon,
  },
  {
    name: "Roofing & Flooring solutions",
    description: "Build strategic funnels that will convert",
    href: "/Roofing_Flooring_Solution",
    icon: ArrowPathIcon,
  },
  {
    name: "Construction Blocks",
    description: "Build strategic funnels that will convert",
    href: "/bricks",
    icon: ArrowPathIcon,
  },
  {
    name: "Combustion Fuel",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const brands = [
  {
    name: "Ecomagix",
    href: "/ecomagix",
    icon: ChartPieIcon,
  },
  {
    name: "Claymagix",
    href: "/claymagix",
    icon: FingerPrintIcon,
  },
  {
    name: "Woodmagix",
    href: "/woodmagix",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Skyace",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: "ProFuels",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Propanels",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
];

const Header2 = () => {
  const [bg, setBg] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const navigate = useNavigate();
  console.log("location", location.pathname);

  // useEffect(() => {
  //   if (location.pathname !== "/") {
  //     setBg(true);
  //   }

  //   window.addEventListener("scroll", () => {
  //     return window.scrollY > 50 ? setBg(true) : setBg(false);
  //   });
  // });


  const boxvariants = {
    hidden:{
      x:"-100vw",
  
    },
    visible:{
      x:0,
      transition:{
        delay:0.5,
        when:"beforeChildren",
        staggerChildren:0.3
      }
    }
  }
  const listvariants = {
    hidden:{
      x:-10,
      opacity:0
    },
    visible:{
      x:0,
   opacity:1,

  
    }
  }

  return (
    <header
      drag
      dragConstraints={{
        right: 0,
        left: 0,
        top: 0,
        bottom: "-30px"
      }}
      className={`${
        bg
          ? "bg-white py-2 lg:px-10  ms:px-6 mv:px-2 ssm:px-4 shadow-md"
          : "bg-none"
      } fixed left-0 w-full  z-10 transition-all duration-200 px-10`}
    >
      <DIV className="contianer mx-auto">
        <div id="#nav" className="flex justify-between items-center ">
          {/* logo */}
          <a href="/">
            <img className={`${bg ? "h-12" : "h-12"}`} src={Logo} alt="" />
          </a>
          <div
            onClick={() => setMobileMenuOpen(true)}
            className="text-2xl  md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? (
              <CgClose />
            ) : (
              <CgMenuRight
                style={{
                  color: "#F3A445",
                  border: "1px solid #F3A445",
                  borderRadius: "50%",
                  padding: "5px",
                  width: "40px",
                  height: "40px",
                }}
              />
            )}
          </div>
          <nav
            className="hidden md:flex"
            style={{
              transform: "translateY(-100)",
              transition: "opacity 0.3s ease",
              transform: "0.3s ease",
            }}
          >
            <ul className="md:flex md:gap-x-12">
              <NavLink
                className={`active ${
                  location.pathname === "/"
                    ? "border-b-4 border-orange-400 text-[#F3A445] "
                    : ""
                }  capitalize transition-all`}
                to={"/"}
                activeClassName="home-active"
              >
                Home
              
              </NavLink>
              <NavLink
                className={`active ${
                  location.pathname === "/about"
                    ? "border-b-4 border-orange-400 text-[#F3A445]"
                    : ""
                } capitalize transition-all`}
                to={"/about"}
                exact
                activeClassName="active"
              >
                About Us
              </NavLink>

              <Menu as="div" className="relative inline-block text-left"
                initial="hidden"
                variants={boxvariants}
                animate="visible"
              
              >
                <motion.div whileTap={{ scale: 0.97 }}>
                  <Menu.Button
                    className={`inline-flex w-full justify-center gap-x-1.5  capitalize   transition-all`}
                  >
                    <a
                      className={`${
                        location.pathname === "/ecomagix" ||
                        location.pathname === "/claymagix" ||
                        location.pathname === "/woodmagix"
                          ? "border-b-4 border-orange-400 text-[#F3A445]"
                          : ""
                      } `}
                    >
                      Brands
                    </a>
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </motion.div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items   className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 border-red-500"
                   
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/ecomagix"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Ecomagix
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/claymagix"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Claymagix
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/woodmagix"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Woodmagix
                          </a>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/woodmagix"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                          Profules
                          </a>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/woodmagix"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Skyace
                          </a>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/woodmagix"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Propanels
                          </a>
                        )}
                      </Menu.Item> */}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className={`${
                      bg ? "text:black" : "text-white"
                    } inline-flex w-full justify-center gap-x-1.5 capitalize  transition-all`}
                  >
                    <a
                      className={`${
                        location.pathname === "/DoorFrams" ||
                        location.pathname === "/Flyash_Brick_pallets" ||
                        location.pathname === "/Boards_panels" ||
                        location.pathname === "/jails" ||
                        location.pathname === "/furniture" ||
                        location.pathname === "/Shuttering_formwork" ||
                        location.pathname === "/Roofing_Flooring_Solution" ||
                        location.pathname === "/Roofing_Flooring_Solution" ||
                        location.pathname === "/bricks"
                          ? "border-b-4 border-orange-400 text-[#F3A445]"
                          : ""
                      } `}
                    >
                      Products
                    </a>
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 border-red-500">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/DoorFrams">
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Doors & Door Frames
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Sliding window profiles & Window Frames
                          </a>
                        )}
                      </Menu.Item> */}

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/Flyash_Brick_pallets">
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Fly-ash Brick Pallets
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link to="">
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Warehouse Pallets
                          </a>
                          </Link>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/Boards_panels">
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Boards & Panels
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/jails">
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Jali
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Planks & Battens
                          </a>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/furniture">
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Furniture
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/Shuttering_formwork">
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Shuttering & Formwork
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to={"/Roofing_Flooring_Solution"}>
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Roofing & Flooring solutions
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/bricks">
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Construction Blocks
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Combustion Fuel
                          </a>
                        )}
                      </Menu.Item> */}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <li>
                <a
                  href="/blogs"
                  className={`active ${
                    location.pathname === "/blogs"
                      ? "border-b-4 border-orange-400 text-[#F3A445]"
                      : ""
                  } capitalize transition-all hover:cursor-pointers`}
                >
                  {/*  */}
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className={`active ${
                    location.pathname === "/events"
                      ? "border-b-4 border-orange-400 text-[#F3A445]"
                      : ""
                  } capitalize transition-all hover:cursor-pointers`}
                >
                  {/*  */}
                 Media and events
                </a>
              </li>
              <li className=" px-2 text-center self-center">
                <a
                  href="/contact"
                  className={`active ${
                    location.pathname === "/contact"
                      ? "border-b-4 border-orange-400 text-[#F3A445]"
                      : ""
                  } capitalize transition-all hover:cursor-pointers mt-[5px]`}
                >
                  {/*  */}
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          {/* nav mobile  */}
          {/* <div className={`${mobileNav ? 'left-0' : '-left-full'}
 md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
  <NavMobile />
 </div> */}
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  bg-white px-6  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className={` ${bg ? "h-20" : "h-20 mt-2"} `}
                    src={Logo}
                    alt=""
                  />
                  {/* <h1 className="title mt-2 text-4xl">Infinia</h1> */}
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Home
                    </a>

                    <a
                      href="/about"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      About
                    </a>
                    {/* <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Brands
                    </a> */}
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Brands
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...brands].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Product
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="/blogs"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Media and events
                    </a>
                    <a
                      href="/blogs"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Blogs
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </DIV>
    </header>
  );
};

export default Header2;

const DIV = styled.div`
  .home-active {
    color: #f3a445;
  }
  .active:after {
    display: block;
    content: "";
    border-bottom: solid 3px #f3a445;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
  }

  .active:hover:after {
    transform: scaleX(1);
  }

  .active.fromright:after {
    transform-origin: 100% 50%;
  }

  .active.fromleft:after {
    transform-origin: 0 50%;
  }
`;
