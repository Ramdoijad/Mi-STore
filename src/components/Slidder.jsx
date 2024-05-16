import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Slidder({start}) {
    console.log("start",start)
  return (
    <Carousel fade prevLabel="" nextLabel="">
   
    {
        start.map((item,index)=>
            <Carousel.Item key={index} >
        <img src={item}  className='d-block w-100' alt="First Slide" />
    </Carousel.Item>
     
        )
    }
  </Carousel>
  )
}

export default Slidder
