import React, { useEffect, useState } from 'react'
import {Carousel} from 'react-bootstrap'
import video_1 from '../../video/video-1.webm'
import video_2 from '../../video/video-2.webm'
import video_3 from '../../video/video-3.webm'
import video_4 from '../../video/video-4.webm'
import '../../Components/UI/style.css/Crossfade.css'



function Crossfade() {
  const [change, setChange] = useState(video_1)
  const boton = () => {
    setChange(change)
  }
  return (
      <div>
        <div>
        <div className='videouse'>
          <video autoPlay preload='auto' muted loop src={change} alt="" />
        </div>
        </div>
        <div className='btn_css'>
        <button className='btn_c' onClick={() => setChange(video_1)}><h6>San Francisco to Los Angeles</h6><p>383 miles</p></button>
         <button className='btn_c' onClick={() => setChange(video_2)}><h6>Berkeley to Lake Tahoe</h6><p>178 miles</p></button>
         <button className='btn_c' onClick={() => setChange(video_3)}><h6>Berkeley to Lake Tahoe</h6><p>178 miles</p></button>
         <button className='btn_c' onClick={() => setChange(video_4)}><h6>Berkeley to Lake Tahoe</h6><p>178 miles</p></button> 
        </div>
       
    </div>
  )
}

export default Crossfade