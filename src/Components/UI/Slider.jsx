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
    <Carousel.Caption>
    <h3>17” Cinematic Display</h3>
      <p>With 2200x1300 resolution, ultra bright, true colors and exceptional responsiveness, the new center display is the best screen to watch anywhere.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='img-1'>
    <img
      className="d-block w-70"
      src={rool}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Focus on Driving</h3>
      <p>The ultimate focus on driving: no stalks, no shifting. Model X is the best SUV to drive, and the best SUV to be driven in.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='img-1'>
    <img
      className="d-block w-100"
      src={roolss}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Perfect Environment</h3>
      <p>Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className='img-1'>
    <img
      className="d-block w-100"
      src={roolssss}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Spacious Cabin</h3>
      <p>Model X offers a spacious cabin with the world's largest panoramic windshield and seating for up to seven.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  
    </div>
   
  )
}

export default Slider