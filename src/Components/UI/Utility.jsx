import React from 'react'
import { Carousel } from 'react-bootstrap'
import modely1 from '../../img-model-y/modely2.jpg'
import modely2 from '../../img-model-y/Modely3.jpg'
import '../../Components/UI/style.css/Utility.css'
function Utility() {
  return (
    <div className='model-yy'>
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={modely1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={modely2}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Utility