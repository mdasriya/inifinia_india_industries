// import React, { useEffect } from 'react';
// import Swiper from 'swiper';
// // import 'swiper/swiper-bundle.min.css';
// import './Slider.css'; // Import your custom CSS if needed

// const TrandingSlider = () => {
//   useEffect(() => {
//     const trandingSlider = new Swiper('.tranding-slider', {
//       effect: 'coverflow',
//       grabCursor: true,
//       centeredSlides: true,
//       loop: true,
//       slidesPerView: 'auto',
//       coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 2.5,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }
//     });
//     // Clean up Swiper instance when component unmounts
//     return () => trandingSlider.destroy();
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <section id="tranding">
//       <div className="container">
//         <h3 className="text-center section-subheading">- popular Delivery -</h3>
//         <h1 className="text-center section-heading">Tranding food</h1>
//       </div>
//       <div className="container">
//         <div className="swiper tranding-slider">
//         <div class="swiper-slide tranding-slide">
//               <div class="tranding-slide-img">
//                 <img src="images/tranding-food-2.png" alt="Tranding"/>
//               </div>
//               <div class="tranding-slide-content">
//                 <h1 class="food-price">$20</h1>
//                 <div class="tranding-slide-content-bottom">
//                   <h2 class="food-name">
//                     Meat Ball
//                   </h2>
//                   <h3 class="food-rating">
//                     <span>4.5</span>
//                     <div class="rating">
//                       <ion-icon name="star"></ion-icon>
//                       <ion-icon name="star"></ion-icon>
//                       <ion-icon name="star"></ion-icon>
//                       <ion-icon name="star"></ion-icon>
//                       <ion-icon name="star"></ion-icon>
//                     </div>
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           <div className="tranding-slider-control">
//             <div className="swiper-button-prev slider-arrow">
//               <ion-icon name="arrow-back-outline"></ion-icon>
//             </div>
//             <div className="swiper-button-next slider-arrow">
//               <ion-icon name="arrow-forward-outline"></ion-icon>
//             </div>
//             <div className="swiper-pagination"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrandingSlider;

import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './Slider.css'; // Import your custom CSS if needed

const TrandingSlider = () => {
  useEffect(() => {
    const trandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50, // Adjust the rotate value for the coverflow effect
        stretch: 0,
        depth: 100,
        modifier: 1,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // Clean up Swiper instance when component unmounts
    return () => trandingSlider.destroy();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- popular Delivery -</h3>
        <h1 className="text-center section-heading">Tranding food</h1>
      </div>
      <div className="container">
        <div className="swiper tranding-slider">
          <div className="swiper-wrapper">
            {/* Add your swiper slides here */}
          </div>
          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrandingSlider;

