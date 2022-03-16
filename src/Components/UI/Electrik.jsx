
import React, { useState } from 'react'
import '../UI/style.css/Electrik.css'
import imgs from '../../model-sss/electrik1.jpg'
import imgs2 from '../../model-sss/electrik2.jpg'

function Electrik() {
    const [change, setChange] = useState(imgs)
    
    const boton = () => {
      setChange(change)
    }
  return (
    <div>
          <div className='imgs2'>
          <img src={change} alt="" />
        </div>
        <div>
        <button className='btn_maps' onClick={() => setChange(imgs)}><h6>Berkeley to Lake Tahoe</h6><p>178 miles</p></button>
        <button className='btn_maps' onClick={() => setChange(imgs2)}><h6>Berkeley to Lake Tahoe</h6><p>178 miles</p></button>

        </div>
    </div>
  )
}

export default Electrik