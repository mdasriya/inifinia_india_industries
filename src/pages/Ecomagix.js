// import image1 from '../assets/img/2. RRP Ecomagix 280 x 286px.jpg';
// import image2 from '../assets/img/3. RRP Ecomagix 280 x 286px.jpg';
// import image3 from '../assets/img/flyashbrick.jpg'
// import image4 from '../assets/img/Formwork.jpg'
// import Door from "../assets/img/doors.jpg"
// import upper from "../assets/img/1500 x 400px.jpg"
import Transition from '../components/Transition';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
const features = [
  { name: '1. EM01 Boards & Panels', description1: '1.1 EM01A RRP Panels -regular Variants - Sizes', description2: '1.2 EM01B RRP Panels UHD Varient -Size,colours'},
  { name: '2. EM02 RRP Doors', description1: '2.1 EM02A Panel Doors', description2:'2.2 EM02B Flush Doors'  },
  { name: '3. EM03 RRP Door Frames', description1: '3.1 EM03A 3x2', description2:'3.2 EM03B 4x2', description3:'3.3 EM03C 4x2.5',
  description4:'3.4 EM03D 5x2.5',
 },
  { name: '4. EM04 RRP Window Profiles',
description1:'4.1 EM04A 3x2', description2:'4.2 EM04B 4x2', description3:'4.3 EM04C Shutter 50x18' },
  { name: '5. EM05 RRP Claddings', description1: '5.1 EM05A Wall Panels', description2:'5.2 EM05B Partition Walls' },
  { name: '6. EM06 Planks & Battens', description1: '6.1 EM06A', },
  { name: '7.1 EM07 Flyash Bricks/Pavers Pallets',},
  {
    name:'8. EM08 RRP Storage Pallets',
    description1:'8.1 EM08A Warehouse storage pallets (stationery)',
    description2: '8.2 EM08B Warehouse storage pallets (Dynamic)',
  },
  {
    name:'9. EM09 RRP Shuttering Formwork',
    description1:'9.1 EM09A Column/Beam Panel',
    description2: '9.2 EM09B Slab Panel',
  }
]

function Ecomagix() {

  const location = useLocation()
  console.log(location)

return (
  <div>
      {location.pathname !== "/ecomagix" && (
        <div className="bg-white con-bg">
          <div className='flex items-center w-auto text-center door'>
            <h3 className="text-5xl font-extrabold tracking-normal text-center z-1 text-white "></h3>
          </div>
        </div>
      )}

      <Products /> {/* Assuming this is a custom component */}
{/*     
   <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
     <div>
       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-right">Ecomagix</h2>
       <p className="mt-4 text-gray-500">
       Each category seems to have different variants or types of products within them, ranging from panels, doors, door frames, window profiles, claddings, planks, pallets, storage solutions, formwork, and porta cabins. If you need more detailed information about any specific product or category, feel free to ask.
       </p>
      
       <dl className="mt-1 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
         { features.map((feature) => (
           <div key={feature.name} className="border-t border-gray-200  p-3 shadow-2">
             <dt className="font-medium text-gray-900">{feature.name}</dt>
             <dd className="mt-1 text-sm text-gray-500">{feature.description1}</dd>
             <dd className="mt-1 text-sm text-gray-500">{feature.description2}</dd>
             <dd className="mt-1 text-sm text-gray-500">{feature.description3}</dd>
           </div>
         ))}
       </dl>
     </div>
     <div className="grid grid-cols-2 grid-rows-2 gap-4 m-auto mt-11 sm:gap-6 lg:gap-8">
       <img
         src={image1}
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
   </div> */}
 </div>

  
)
}

export default Transition(Ecomagix)