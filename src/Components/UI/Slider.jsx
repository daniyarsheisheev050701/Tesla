import React from 'react'
import './style.css/Slider.css'
import {Carousel} from 'react-bootstrap'
import interier from '../../images/ruuls_1.jpg'
import rool from '../../images/ruuls_2.jpg'
import roolss from '../../images/ruuls_3.jpg'
import roolssss from '../../images/ruuls_4.jpg'
function Slider() {
  return (
    <div className='glavny'>
       <Carousel className='carusel'>
  <Carousel.Item className='img-1'>
    <img
      className="d-block w-100"
      src={interier}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item className='img-1'>
    <img
      className="d-block w-70"
      src={rool}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item className='img-1'>
    <img
      className="d-block w-100"
      src={roolss}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item className='img-1'>
    <img
      className="d-block w-100"
      src={roolssss}
      alt="Third slide"
    />
  </Carousel.Item>
  </Carousel>
  
    </div>
   
  )
}

export default Slider