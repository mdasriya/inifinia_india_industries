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
  { name: '1. EM01 Boards & Panels', description1: '1.1 EM01A RRP Panels -regular Variants - Sizes', description2: '1.2 EM01B RRP Panels UHD Varient -Size,colours',href:'/DoorFrams'},
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
            <h3 className="text-5xl font-extrabold tracking-normal text-center z-1  text-white ">Ecomagix  </h3>
          </div>
        </div>
      )}

      <Products /> 

 </div>

  
)
}

export default Transition(Ecomagix)