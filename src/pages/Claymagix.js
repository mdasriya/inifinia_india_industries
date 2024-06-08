/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/img/shuttering.jpg';
import image2 from '../assets/img/2.Terracotta 280 x 286px (1).jpg'
import image3 from '../assets/img/Screenshot 2024-03-04 112054.png'
import image4 from '../assets/img/1. Terracotta 280 x 286px.jpg'
import Transition from '../components/Transition';
// import AOS from 'aos';
// import "aos/dist/aos/css";

const features = [
  { name: '1. CM01 Roofing Tiles', description1: '1.1 CM01A Mangalore Pattern', description2: '1.2 CM01B ClayMagix Penta', description3: '1.3 CM01C Sloping Tiles' },
  { name: '2. CM02 Construction Blocks', description1: '2.1 CM02A Solid Bricks', description2: '2.2 CM02B Hollow Bricks', description3: '2.3 CM02C Slab Filler Blocks' },
  { name: '3. CM03 Wall Claddings', description1: '3.1 CM03A Brick Claddings', description2: '3.2 CM03B Cladding Louvre', description3: '3.3 CM03C Cladding Flouted' },
  { name: '4. CM04 Ceiling Tiles' },
  { name: '5. CM05 Flooring', description1: '5.1 CM05A Floor Tiles', description2: '5.2 CM05B Pavers' },
  { name: '6. CM06 Jali', description1: '6.1 CM06A Petal', description2: '6.2 CM06B Lily', description3: '6.3 CM06C Camp' },
]



function Claymagix() {


  return (
    <div className="bg-white con-bg">
      <div className='flex items-center w-auto text-center door clay'>
        <h3 className="text-5xl font-extrabold tracking-normal text-center z-1 text-white">Claymagix</h3>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Claymagix</h2>
          <p className="mt-4 text-gray-500">
            Claymagix appears to offer a comprehensive range of clay-based construction materials suitable for various building applications. These materials combine traditional craftsmanship with modern design and functionality, catering to both aesthetic and practical requirements in construction project
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 p-3 shadow-2">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description1}</dd>
                <dd className="mt-2 text-sm text-gray-500">{feature.description2}</dd>
                <dd className="mt-2 text-sm text-gray-500">{feature.description3}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={image}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src={image2}
            alt="Top down view of walnut card tray with embedded magnets and card."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src={image3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
            src={image4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow img"
          />
        </div>
      </div>
    </div>
  )
}

export default Transition(Claymagix)
