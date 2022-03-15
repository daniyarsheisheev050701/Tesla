import { Carousel } from 'bootstrap'
import React from 'react'
import "./style/Headset.css"
import '../../src/Components/UI/Example'
import Example from '../../src/Components/UI/Example'
import wolna__video from '../../src/video/wolna.webm'
import jopa_video from '../../src/video/jopa-video.webm'
import Map from '../../src/Components/UI/Map'
import Specs from '../Components/UI/Specs'
// import modal_s from  '../../src/images/interior-Modal-s.jpg'
function Headset() {
  return (
    <div>
        <header className='header-item'>
          <div className='text-model-s'>
          <h1>
            Model S
            </h1>
            <p>Plaid</p>
          </div>
          <div className='text-model-s2'>
            <h3>396mi</h3>
            <span>Range (EPA est.)</span>
            <h3>1.99s</h3>
            <span>0-60 mph*</span>
            <h3>200mph</h3>
            <span>Top Speed†</span>
            <h3>1,020hp</h3>
            <span>Peak Power</span>
            <button className='model-s-btn'>ORDER NOW</button>
          </div>
        </header>
        <section className='interior-model-s'>
          <div>
            <h2>Interior of the Future</h2>
          </div>
        </section>
        <section className='img_modal_s'>
          <div>
            {/* <img src={modal_s}/> */}
          </div>
        </section>
        <section>
          <div>
          </div>
        </section>
        <Example/>       
        <section className='wolna-models'>
        <div className='text-model-sss'>
          <div className='text-model-ss'>
          </div>
          <div className='tex-h1'>
          <h1>Stay Connected</h1>
            <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
          </div>
        </div>
        <div className='glavny-text'>
        <div className='text-wolna'>
          <h1>Immersive Sound</h1>
          <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
        </div>
        <div className='vide-wolna'>
          <video autoPlay preload='auto' muted loop src={wolna__video}></video>
        </div>
        </div>
        <div className='wolna-textxx'>
          <div className='imgss-wolna'>
            <img>

              </img>
          </div>
          <div className='text-wolnaa'>
            <h1>Room for Everything</h1>
            <p>With front and rear trunks and fold-flat seats you can fit
               your bike without taking the wheel off—and your luggage too.</p>
          </div>
        </div>
        </section>
        <section>
          <div className='img-wolna2'>

          </div>
          <div className='class-wolna'>
          <div>
            <h4>Exterior</h4>
            <h1>Designed for Efficiency</h1>
            <button className='wolna-btn'>ORDER NOW</button>
          </div>
          <div>
            <p>With a drag coefficient of just .208 Cd, the lowest
               on the planet, Model S is built for speed, endurance
                and range. Improved aerodynamics and a wider chassis
                 offer more responsive performance so you can take 
                 corners quicker and with more confidence.</p>
          </div>
          </div>
        </section>
        <section className='wolna-s'>
          <div className='text-wolna4'>
            <h3>Relentless Performance</h3>
            <p>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
          </div>
          <div className='img-wolna3'>
          </div>
        </section>
        <section className='jopa'>
        <div className='jopa-wolna'>
            <div className='img-jopa'>
            
            </div>
            <div className='p-jopa'>
            <h3>Optimized Aerodynamics</h3>  
            <p>Attention to detail on all exterior surfaces makes Model 
              S the most aerodynamic production car on Earth.</p>  
            </div>            
          </div>
        </section>
        <section className='jopa5-text'>
          <div>
            <p>
            Refined Styling
            </p>
            <p>An iconic silhouette meets refreshed, elegant proportions.</p>
          </div>
          <div className='jopa-5'>

          </div>
        </section>
        <section className='jopa8'>
          <div className='jopa-video'>
            <video autoPlay preload='auto' muted loop src={jopa_video}></video>
          </div>
          <div className='jopa7-text'>
            <p>Range</p>
            <h1>Go Anywhere</h1>
            <p>Travel farther on a single charge than any 
              other electric vehicle—and keep going with 
              access to 30,000+ Superchargers globally. By
               combining up to 405 miles of estimated range
                with Tesla fast charging technology, you’ll 
                spend less time charging and even more time on the road.</p>
                <button className='jopa-btn2'>ORDER NOW</button>
          </div>
        </section>
        <section>
         <Map/>
        </section>
        <section className='toolbar-inner'>
            <div className='toolbar-img'></div>
          <div>
            <Specs/>
          </div>
        </section>
        </div>
  )
}

export default Headset