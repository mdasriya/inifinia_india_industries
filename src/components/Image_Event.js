import React from 'react'
import styled from 'styled-components';
import image1 from "../assets/events/01.jpeg"
import image2 from "../assets/events/02.jpeg"
import image3 from "../assets/events/03.jpeg"
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
const Image_Event = () => {
  return (
  <>
<DIV className="grid grid-template-rows: repeat(4, minmax(0, 1fr)) w-full">

 <div className="parent-container mt-[60px] mb-3">
<div className='flex'>

</div>
 <div className="p-5 sm:p-8">
  <div className='flex border-b-2 mb-4 border-gray-400'>

 <h2 className='text-4xl'>Media And</h2><h3 className="text-4xl ml-2">Events</h3>

  </div>
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src={image9} className='cover-fit'/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image4}/>
        <img src={image5}/>
        <img src={image6}/>
        <img src={image7}/>
        <img src={image8}/>
        <img src={image1}/>
        <img src={image10}/>
        <img src={image11}/>
        <img src={image12}/>
        <img src={image13}/>
        <img src={image14}/>
        <img src={image15}/>
        <img src={image16}/>
    </div>
</div>

  </div> 

 





    </DIV>
    </> 
  )
}

export default Image_Event;

const DIV = styled.div`

.parent-container, .child-container {
  display: flex;
}
.parent-container {
  width: 100%;
  justify-content: center;
  gap: 30px 30px;
}
.child-container {
  width: 30%;
  height: auto;
  gap: 30px 30px;
  flex-direction: column;
}
.child-container img {
  transition: all 1s ease-in-out 0s;
 box-shadow: 2px 2px 20px gray, inset 2px 2px 10px lightgray;
}
.child-container img:hover {
  box-shadow: 4px 4px 25px black, inset 2px 2px 2px 10px rgb(0, 0, 20);
 
}

.greeting {
  text-align: center;
  color: lightblue;
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
}
.fa-brands {
  font-size: 50px;
}
.greeting, .fa-brands {
  text-shadow: 2px 2px 10px lightgray;
  
}
`