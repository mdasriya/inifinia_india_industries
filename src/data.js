// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/TERRACOTTA 1.jpg';
import BedImg from './assets/img/UPR 1.jpg';
import CupboardImg from './assets/img/SPF 1.jpg';
import LightingImg from './assets/img/rrp 1.jpg';
import Product1Img from './assets/img/products/RRP Board & Panels (1).jpg';
import Product2Img from './assets/img/products/plain-brown-pvc-panel-1000x1000-removebg-preview.png';
import Product3Img from './assets/img/products/RRP_Door__1_-removebg-preview.png';
import Product4Img from './assets/img/products/wooden-flush-doors-1000x1000-removebg-preview.png';
import Product5Img from './assets/img/products/RRP Door Frame (1).jpg';
import Product6Img from './assets/img/products/wpc-door-frame-250x250-removebg-preview.png';
// import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/RRP Window.jpg';
import Product9Img from './assets/img/products/aluminium-shutter-profile-removebg-preview.png';
import Product10Img from './assets/img/products/product-10.png'
import Product14Img from './assets/img/products/RRP Cladding.jpg'
import Product13Img from './assets/img/products/wall-partition-works-500x500.jpg'
import Product16Img from './assets/img/products/RRP Planks & Battens.jpg'
import Product15Img from './assets/img/products/1. RRP Ecomagix 280 x 286px (1) (1).jpg'
import Product17Img from './assets/img/products/RRP Storage Pallets.jpg'
import Product18Img from './assets/img/products/product-jpeg-1000x1000-removebg-preview.png'
import Product19Img from './assets/img/products/RRP Shuttering Formwork (3).jpg'
import Product20Img from './assets/img/products/Uc6d2306ed83b408da0f4ad4756fcc2d2N.jpg_300x300.jpg'
import TestimonialImg from './assets/img/testimonial.jpg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';
import Slider_1 from "./assets/img/wpc 1.jpg"

export const navigation = [
  {
    name: 'home',
    href: '/',
    drop: false,
  },
  {
    name: 'about us',
    href: 'about',
    drop: false,
  },
];

export const hero = {
  title: 'Welcome to  Infinia Industries Private Limited',
  subtitle:
    "Infinia Industries Pvt Ltd  Central India's Premier Manufacturer of Innovative Building Solutions!we take pride in being the forefront of innovation, carving a niche as the leading manufacturer of Wood Polymer Composite Regenerated Plastic  and Terra Cotta products in Central India",
  buttonText: 'Shop Now',
};

export const stats = [
  {
    value: 25,
    text: 'Year of sustainable innovations',
  },
  {
    value: 100,
    text: 'Dealers & Distributors across India',
  },
  {
    value: 1,
    text: 'trees saved from being cut for wood',
  },
  {
    value: 50,
    text: 'unique product offerings',
  },  
];

export const features = {
  image: <Features1Img />,
  title: 'Join our Network ',
  subtitle:
    'Furniture power is a software as services for multipurpose business management system',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Valuation Services',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Development of Furniture Models',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Recycel plastic sheets WPC Door frames and Particle Boards',
    subtitle:
      'We are counted amongst the known manufacturer of Recycel plastic sheets WPC Door frames and Wood Polymer Composite, Recycled Regenerated Plastic and Terracotta Clay Products etc. We offer these products at most affordable prices. always Ready to give services to our all customers.',
  },
};

export const newInStore = {
  title: 'Our Material Offering',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'WPC',
      image: <Slider_1 />,
    },
    {
      name: 'UPR',
      image: <BedImg />,
    },
    {
      name: 'SPF',
      image: <CupboardImg />,
    },
    {
      name: 'RRP',
      image: <LightingImg />,
    },
    {
      name: 'Terracotta',
      image: <ChairImg />,
    },
    {
      name: 'WPC',
      image: <BedImg />,
    },
    {
      name: 'SPF',
      image: <CupboardImg />,
    },
    {
      name: 'RRP',
      image: <LightingImg />,
    },
    {
      name: 'Terracotta',
      image: <ChairImg />,
    },
  ],
};

export const products = {
  title: 'Ecomagix',
  subtitle:
    'Each category seems to have different variants or types of products within them, ranging from panels, doors, door frames, window profiles, claddings, planks, pallets, storage solutions, formwork, and porta cabins. If you need more detailed information about any specific product or category, feel free to ask.',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          image1: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'EM01 Boards & Panels',
          point1: "EM01A RRP Panels -regular Variants - Sizes",
          point2: "EM01B RRP Panels UHD Varient -Size,colours",
          point3: "",
          count:[1,2]
        },
        {
          image: <Product3Img />,
          image1: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'EM02 RRP Doors',
          point1: "EM02A Panel Doors",
          point2: "EM02B Flush Doors",
          point3: "",
          count:[1,2]
        },
        {
          image: <Product5Img />,
          image1: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'EM03 RRP Door Frames',
          point1: "EM03A 3x2",
          point2: "EM03B 4x2",
          point3: "",
          count:[1,2,3]
        },
        {
          image: <Product8Img />,
          image1: <Product8Img />,
          image2: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'EM04 RRP Window Profiles',
          point1: "EM04A 3x2",
          point2: "EM04B 4x2",
          point3: "EM04C Shutter 50x18",
          count:[1,2,3]
        },
        {
          image: <Product14Img />,
          image1: <Product13Img />,
          image2: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'EM05 RRP Claddings',
          point1: "EM05A Wall Panels",
          point2: "EM05B Partition Walls",
          count:[1,2]
        },
        {
          image: <Product16Img />,
          image1: <Product18Img />, 
          icon: <IoMdAddCircle />,
          name: 'EM06 Planks & Battens',
          point1: "EM06A",
          count:[]
        },
        {
          image: <Product15Img />,
          image1: <Product18Img />, 
          icon: <IoMdAddCircle />,
          name: 'EM07 Flyash Bricks/Pavers Pallets',
          point1: "EM07A",
          count:[]
        },
        // {
        //   image: <Product16Img />,
        //   image1: <Product18Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'EM07 Flyash Bricks/Pavers Pallets',
        //   point1: "",
        //   point2: "",
        //   point3: "",
        //   count:[1]
        // },
        {
          image: <Product17Img />,
          image1: <Product18Img />,
          icon: <IoMdAddCircle />,
          name: 'EM08 RRP Storage Pallets',
          point1: "EM08A Warehouse storage pallets",
          point2: "EM08B Warehouse storage pallets",
          point3: "",
          count:[1,2]
        },
        {
          image: <Product19Img />,
          image1: <Product19Img />,
          icon: <IoMdAddCircle />,
          name: 'EM09 RRP Shuttering Formwork',
          point1: "EM09A Column/Beam Panel",
          point2: "EM09B Slab Panel",
          count:[1,2]
        }
      
     
      ],
    },
    // {
    //   productList: [
    //     {
    //       image: <Product1Img />,
    //       icon: <IoMdAddCircle />,http://localhost:3000/
    //       name: 'EM01 Boards & Panels',
    //       point1: "EM01A RRP Panels -regular Variants - Sizes",
    //       point2: "EM01B RRP Panels UHD Varient -Size,colours",
    //       point3: ""
    //     },
    //     {
    //       image: <Product2Img />,
    //       icon: <IoMdAddCircle />,
    //       name: 'EM02 RRP Doors',
    //       point1: "EM02A Panel Doors",
    //       point2: "EM02B Flush Doors",
    //       point3: ""
    //     },
    //     {
    //       image: <Product3Img />,
    //       icon: <IoMdAddCircle />,
    //       name: 'EM03 RRP Door Frames',
    //       point1: "EM03A 3x2",
    //       point2: "EM03B 4x2",
    //       point3: "EM03C 4x2.5"
    //     },
    //     {
    //       image: <Product4Img />,
    //       icon: <IoMdAddCircle />,
    //       name: 'EM04 RRP Window Profiles',
    //       point1: "EM04A 3x2",
    //       point2: "EM04B 4x2",
    //       point3: "EM04C Shutter 50x18"
    //     },
    //     {
    //       image: <Product5Img />,
    //       icon: <IoMdAddCircle />,
    //       name: 'EM05 RRP Claddings',
    //       point1: "EM05A Wall Panels",
    //       point2: "EM05B Partition Walls",
    //       point3: ""
    //     },
    //     {
    //       image: <Product6Img />,
    //       icon: <IoMdAddCircle />,
    //       name: 'EM06 Planks & Battens',
    //       point1: "EM06A",
    //       point2: "",
    //       point3: ""
    //     },
    //     {
    //       image: <Product9Img />,
    //       icon: <IoMdAddCircle />,
    //       name: 'EM07 Flyash Bricks/Pavers Pallets',
    //       point1: "",
    //       point2: "",
    //       point3: ""
    //     },
    //     {
    //       image: <Product7Img />,
    //       icon: <IoMdAddCircle />,
    //       name: 'EM08 RRP Storage Pallets',
    //       point1: "EM08A Warehouse storage pallets",
    //       point2: "EM08B Warehouse storage pallets",
    //       point3: ""
    //     },
    //     {
    //       image: <Product8Img />,
    //       icon: <IoMdAddCircle />,
    //       name: 'EM09 RRP Shuttering Formwork',
    //       point1: "EM09A Column/Beam Panel",
    //       point2: "EM09B Slab Panel",
    //       point3: ""
    //     }
    //     // {
    //     //   image: <Product7Img />,
    //     //   icon: <IoMdAddCircle />,
    //     //   name: 'XORA corner desk',
    //     //   price: 320,
    //     //   oldPrice: 325,
    //     // },
    //     // {
    //     //   image: <Product8Img />,
    //     //   icon: <IoMdAddCircle />,
    //     //   name: 'Black Forest Series Wood',
    //     //   price: 225,
    //     //   oldPrice: 240,
    //     // },
    //     // {
    //     //   image: <Product9Img />,
    //     //   icon: <IoMdAddCircle />,
    //     //   name: 'Papper Cupboard',
    //     //   price: 105,
    //     //   oldPrice: 120,
    //     // },
    //     // {
    //     //   image: <Product10Img />,
    //     //   icon: <IoMdAddCircle />,
    //     //   name: 'Ole Gundorse Spring',
    //     //   price: 75,
    //     //   oldPrice: 82,
    //     // },
    //   ],
    // },
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Mayuri Yerche',
      occupation: 'Nagpur, Maharashtra',
      date: '06-February-24',
      message:
        '“Best quality products at a reasonable”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Pallavi Rawte',
      occupation: 'Nagpur, Maharashtra',
      date: '08-April-23',
      message:
        '“Thanks INFINIAFOR YOUR RESPONSE,RATE & SERVICE”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Ankit Meshram',
      occupation: 'Nagpur, Maharashtra',
      date: '13-June-23',
      message:
        '“Thank you,sir give a best solution for me and pleaser to talked to you”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: 'https://www.youtube.com/@InfiniaIndia',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },

    {
      icon: <IoLogoFacebook />,
      href: 'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.infiniaindia.in%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=mr_IN',
    },
  ],
  copyright: 'FurniShop 2022 - All Rights Reserved.',
};
