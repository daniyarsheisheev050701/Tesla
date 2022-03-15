import React, { useEffect, useState } from 'react'
import {Carousel} from 'react-bootstrap'
import video_1 from '../../video/video-1.webm'
import video_2 from '../../video/video-2.webm'
import video_3 from '../../video/video-3.webm'
import video_4 from '../../video/video-4.webm'

import '../../Components/UI/Crossfade.css'



function Crossfade() {
  // const [menu,setMenu] = useState ('')
  // const [change, setChange] = useState()

  // const buttons=() => {
  //   setChange(

  //   )
  //   setChange(
  //     <div>
  //       <video autoPlay preload='auto' src={video_2}></video>
  //     </div>
  //   )
    
  // }
  // const buton = () => {
  //   setMenu (
  //     <div>
  //       <video autoPlay preload='auto' src={video_1}></video>
  //     </div>
  //   )
  return (
      <div>
        {/* <div>
          {setMenu}
        </div>
        <div>
          <button onClick={() => setChange(video_1)}>first</button>
          <button onClick={() => setChange(video_2)}>second</button>
          <button onClick={() => setChange(video_3)}>third</button>
          <button onClick={() => setChange(video_4)}>fourth</button>
        </div>
        <div>
        {change}
        </div> */}
        <div className='autopilots-video'>
        <Carousel>
      <Carousel.Item>
       <video autoPlay preload='auto' muted loop src={video_1}></video>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay preload='auto' muted loop src={video_2}></video>
      </Carousel.Item>
      <Carousel.Item>
       <video autoPlay preload='auto' muted loop src={video_3}></video>
      </Carousel.Item>
      <Carousel.Item>
       <video autoPlay preload='auto' muted loop src={video_4}></video>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
  )
}

export default Crossfade