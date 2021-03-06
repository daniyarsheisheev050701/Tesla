import React, { useState } from 'react'
import foto_1 from '../../images/mp11.png'
import foto_2 from '../../images/mp12.png'
import foto_3 from '../../images/mp13.png'
import foto_4 from '../../images/mp14.png'
import '../../Components/UI/style.css/Map.css'
import { motion } from 'framer-motion'

const  variants ={
  hidden: {
    x: -200,
    opacity: 0,
    amount: 0.2
  },
  visible: {
    x:3,
    opacity:1,
    amount: 0.2
  },
  viewport:{
    amount: 0.2
  }
}

function Map() {
    const [change, setChange] = useState(foto_1)
    
    const boton = () => {
      setChange(change)
    }
    return (
    <motion.div variants={variants}   
     initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>
       <div className='tex-mp'>
                <h1>Freedom to Travel</h1>
                <p>Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.</p>
            </div>
        <div className="img-map">
          <img src={change} alt="" />
        </div>
        <div className='btn_mather'>
        <button className='btn_maps' onClick={() => setChange(foto_1)}><h6>San Francisco to Los Angeles</h6><p>383 miles</p></button>
        <button className='btn_maps' onClick={() => setChange(foto_2)}><h6>Berkeley to Lake Tahoe</h6><p>178 miles</p></button>
        <button className='btn_maps' onClick={() => setChange(foto_3)}><h6>Manhattan to Boston</h6><p>211 miles</p></button>
        <button className='btn_maps' onClick={() => setChange(foto_4)}><h6>Fort Lauderdale to Orlando</h6><p>195 miles</p></button>
        </div>
       
        <section>
           
        </section>
    </motion.div>
  )
}

export default Map