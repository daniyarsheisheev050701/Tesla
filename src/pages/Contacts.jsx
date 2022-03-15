import React from 'react'
import { Carousel } from 'bootstrap'
import './style/Contacts.css'
import Utility from '../../src/Components/UI/Utility'
import 'animate.css';
function Contacts() {
  return (
    <div className='phone'>
      <div className='text-y'>
      <h2 className='animate__animated animate__backInUp animate__delay-1s'>Model Y</h2>
      </div>
        <header className='header-phone'>
            <div className='y'>
            <h3 className='animate__animated wow animate__fadeInUp animate__delay-1s'>76cu ft</h3>
            <p className='animate__animated  wow animate__fadeInUp animate__delay-1s'>Cargo Space</p>
            <h3 className='animate__animated animate__fadeInUp animate__delay-1s'>330mi</h3>
            <p className='animate__animated animate__fadeInUp animate__delay-1s'>Range (EPA est.)</p>
            <h3 className='animate__animated animate__fadeInUp animate__delay-1s'>AWD</h3>
            <p className='animate__ animate__delay-1s'>Dual Motor</p>
            </div>
            <div className='animate__animated animate__bounce animate__infinite	infinite'>
            <button className='btn-y'>ORDER NOW</button>
            </div>
        </header>
        <section>
          <div className='text-utility'>
          <div className=''>
            <h4 className='animate__repeat-4 animate__fadeInUp animate__delay-2s'>Utility</h4>
            <h2 className='animate__repeat-4 animate__fadeInUp animate__delay-2s'>A Place For Everything</h2>
            <button className='animate__repeat-4 animate__fadeInUp animate__delay-3s'>ORDER NOW</button>
          </div>
          <div>
            <p >Model Y provides maximum versatility—able 
              to carry 7 passengers and their cargo. Each
               second row seat folds flat independently, 
               creating flexible storage for skis, furniture,
                luggage and more. The liftgate opens to a low 
                trunk floor that makes loading and unloading easy and quick.</p>
          </div>
          </div>
          <div>
         <Utility/>
          </div>
        </section>
    </div>
  )
}

export default Contacts