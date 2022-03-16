import React from 'react'
import '../../Components/UI/style.css/Modelss.css'
import { Carousel} from 'react-bootstrap'

function Modelss() {
  return (
    <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.tesla.com/assets/img/ms_fb_s.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>



        </div>
  )
}

export default Modelss