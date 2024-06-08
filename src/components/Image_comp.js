import React from 'react'
import image from "../assets/img/full.jpg"
const Image_comp = () => {
  return (
    <div>
      <div className='mt-8 w-[100%] ssm:p-2 ssm:h-[230px] lg:h-[550px]'>
<img className='h-[100%]' src={image} width={"100%"} />
      </div>

  
{/* <img srcset={image} className="w-[100%] lg:mt-10 h-auto ssm:p-2   rounded-lg" alt="image description" /> */}

    </div>
  )
}

export default Image_comp
