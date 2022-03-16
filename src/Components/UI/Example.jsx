import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../../Components/UI/style.css/Example.css'
import display_1 from '../../video/display_1.webm'
import display_2 from '../../video/display_2.webm'
import display_3 from '../../video/display_3.webm'
import display_4 from '../../video/display_4.webm'
import display_5 from '../../video/display_5.webm'
function Example() {
  return (
    <div>
      <Carousel variant="dark" className='corusel'>
  <Carousel.Item>
   <video autoPlay preload='auto' muted loop src={display_1}></video>
  </Carousel.Item>
  <Carousel.Item>
  <video autoPlay preload='auto' muted loop src={display_2}></video>
  </Carousel.Item>
  <Carousel.Item>
  <video autoPlay preload='auto' muted loop src={display_3}></video>
  </Carousel.Item>
  <Carousel.Item>
  <video autoPlay preload='auto' muted loop src={display_4}></video>
  </Carousel.Item>
  <Carousel.Item>
  <video autoPlay preload='auto' muted loop src={display_5}></video>
  </Carousel.Item>
</Carousel>
  <div>
    <h1></h1>
  </div>
    </div>
  )
}

export default Example