// import React from 'react'
// import styled from 'styled-components';
// import image1 from "../assets/events/01.jpeg"
// import image2 from "../assets/events/02.jpeg"
// import image3 from "../assets/events/03.jpeg"
// import image4 from "../assets/events/04.jpeg"
// import image5 from "../assets/events/05.jpeg"
// import image6 from "../assets/events/06.jpeg"
// import image7 from "../assets/events/07.jpeg"
// import image8 from "../assets/events/08.jpeg"
// import image9 from "../assets/events/09.jpeg"
// import image10 from "../assets/events/10.jpeg"
// import image11 from "../assets/events/11.jpeg"
// import image12 from "../assets/events/12.jpeg"
// import image13 from "../assets/events/13.jpeg"
// import image14 from "../assets/events/14.jpeg"
// import image15 from "../assets/events/15.jpeg"
// import image16 from "../assets/events/16.jpeg"
// const Image_Event = () => {
//   return (
//   <>
// <DIV className="grid grid-template-rows: repeat(4, minmax(0, 1fr)) w-full">

//  <div className="parent-container mt-[60px] mb-3">
// <div className='flex'>

// </div>
//  <div className="p-5 sm:p-8">
//   <div className='flex border-b-2 mb-4 border-gray-400'>

//  <h2 className='text-4xl'>Media And</h2><h3 className="text-4xl ml-2">Events</h3>

//   </div>
//     <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
//         <img src={image9} alt='INFINIA EVENTS' className='cover-fit'/>
//         <img src={image2} alt='INFINIA EVENTS'/>
//         <img src={image3} alt='INFINIA EVENTS'/>
//         <img src={image4} alt='INFINIA EVENTS'/>
//         <img src={image5} alt='INFINIA EVENTS'/>
//         <img src={image6} alt='INFINIA EVENTS'/>
//         <img src={image7} alt='INFINIA EVENTS'/>
//         <img src={image8} alt='INFINIA EVENTS'/>
//         <img src={image1} alt='INFINIA EVENTS'/>
//         <img src={image10} alt='INFINIA EVENTS'/>
//         <img src={image11} alt='INFINIA EVENTS'/>
//         <img src={image12} alt='INFINIA EVENTS'/>
//         <img src={image13} alt='INFINIA EVENTS'/>
//         <img src={image14} alt='INFINIA EVENTS'/>
//         <img src={image15} alt='INFINIA EVENTS'/>
//         <img src={image16} alt='INFINIA EVENTS'/>
//     </div>
// </div>

//   </div> 

//     </DIV>
//     </> 
//   )
// }

// export default Image_Event;

// const DIV = styled.div`

// .parent-container, .child-container {
//   display: flex;
// }
// .parent-container {
//   width: 100%;
//   justify-content: center;
//   gap: 30px 30px;
// }
// .child-container {
//   width: 30%;
//   height: auto;
//   gap: 30px 30px;
//   flex-direction: column;
// }
// .child-container img {
//   transition: all 1s ease-in-out 0s;
//  box-shadow: 2px 2px 20px gray, inset 2px 2px 10px lightgray;
// }
// .child-container img:hover {
//   box-shadow: 4px 4px 25px black, inset 2px 2px 2px 10px rgb(0, 0, 20);
 
// }

// .greeting {
//   text-align: center;
//   color: lightblue;
//   font-family: 'Open Sans', sans-serif;
//   font-size: 30px;
// }
// .fa-brands {
//   font-size: 50px;
// }
// .greeting, .fa-brands {
//   text-shadow: 2px 2px 10px lightgray;
  
// }
// `

import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/events/01.jpeg";
import image2 from "../assets/events/02.jpeg";
import image3 from "../assets/events/03.jpeg";
import image4 from "../assets/events/04.jpeg"
import image5 from "../assets/events/05.jpeg"
import image6 from "../assets/events/06.jpeg"
import image7 from "../assets/events/07.jpeg"
import image8 from "../assets/events/08.jpeg"
import image9 from "../assets/events/09.jpeg"
import image10 from "../assets/events/10.jpeg"
import image11 from "../assets/events/11.jpeg"
import image12 from "../assets/events/12.jpeg"
import image13 from "../assets/events/13.jpeg"
import image14 from "../assets/events/14.jpeg"
import image15 from "../assets/events/15.jpeg"
import image16 from "../assets/events/16.jpeg"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '40%',
    maxHeight: '90%',
    overflow: 'hidden',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  }
};

const Image_Event = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <button className="slick-prev fa-solid fa-arrow-left" style={{color: "black"}} aria-label="Prev"></button>,
    nextArrow: <button className="slick-next fa-solid fa-arrow-right" aria-label="Next"></button>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const properties = [
    {
      imgSrc: image8,
      title: "Title Here",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      imgSrc: image2,
      title: "Title Here",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      imgSrc: image3,
      title: "Title Here",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      imgSrc: image10,
      title: "Title Here",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      imgSrc: image5,
      title: "Title Here",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      imgSrc: image6,
      title: "Title Here",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      imgSrc: image7,
      title: "Title Here",
      description: "Lorem ipsum dolor sit amet"
    }
  ];

  return (
    <DIV>
      <div className="w-full overflow-hidden">
        <div className="property-wrapper mx-auto max-w-[1330px]">
          <span>Sample Gallery</span>
          <h1>Featured Images</h1>
          <Slider {...settings}>
            {properties.map((property, index) => (
              <div className="property-item" key={index}>
                <a href="#" onClick={() => openModal(property.imgSrc)}>
                  <div className="property-img">
                    <img src={property.imgSrc} alt="Featured Property" />
                  </div>
                  <div className="property-details">
                    <strong>{property.title}<br />{property.description}</strong><br />
                    <span>+ view gallery</span>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* {isDesktop && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <button onClick={closeModal} style={{ float: 'right', background: 'none', border: 'none', fontSize: '1.5rem' }}>&times;</button>
          <img src={modalImage} alt="Modal" className='lg:w-[80%] lg:h-[40%] lg:ml-[50px]' />
        </Modal>
      )} */}
    </DIV>
  );
};

export default Image_Event;

const DIV = styled.div`
a:link,
a:visited,
a:hover,
a:active,
a:focus {
  text-decoration: none;
  outline: none;
}

.slick-track * {
  outline: none;
}

.property-wrapper {
  text-align: center;
  padding: 50px 0 75px;
}

.property-wrapper h1 {
  font: 400 40px "Playfair Display", serif;
  color: #e1ab35;
  text-transform: uppercase;
}

.property-wrapper span {
  font: 500 13px/21px "Roboto", sans-serif;
  color: #680909;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.property-slide {
  margin: 0 -7px;
}

.property-slide:not(.slick-initialized) .property-item:nth-child(n + 4) ~ div {
  display: none;
}

.property-item {
  display: inline-block;
  vertical-align: middle;
  width: calc(100% / 4);
  padding: 0 7px;
}

.property-item a {
  display: block;
  position: relative;
}

.property-slide {
  padding: 38px 0 0;
}

.property-slide button.slick-arrow {
  display: inline-block;
  position: absolute;
  width: 41px;
  height: 41px;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: translateY(-40px);
  border: none;
  outline: none;
}

.property-slide button:before {
  font-family: inherit !important;
  color: #000 !important;
  font-size: 30px;
}

.property-slide button.slick-prev {
  left: -50px;
}

.property-slide button.slick-next {
  right: -50px;
}

.property-item .property-img:before {
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(153, 126, 67, 0.3);
  opacity: 0;
  outline: 1px solid #ffffff;
  outline-offset: -10px;
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s;
  -o-transition: all 0.6s;
  -ms-transition: all 0.6s;
  transition: all 0.6s;
}

.property-item .property-img:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  background: rgba(255, 255, 255, 0.5);
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s;
  -o-transition: all 0.6s;
  -ms-transition: all 0.6s;
  transition: all 0.6s;
}

.property-img {
  position: relative;
}

.property-img img {
  display: inline-block;
  width: 100%;
  height: auto;
}

.property-details {
  padding: 20px 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.property-details strong {
  font: 500 20px "Roboto", sans-serif;
  color: #2f2f2f;
}

.property-item:hover .property-img:before,
.property-item:hover .property-img:after {
  opacity: 1;
}

.property-item a:hover .property-details {
  opacity: 1;
}
`;
