import { Carousel } from 'bootstrap'
import React, { Component } from 'react'
import "./style/Headset.css"
import '../../src/Components/UI/Example'
import Example from '../../src/Components/UI/Example'
import wolna__video from '../../src/video/wolna.webm'
import jopa_video from '../../src/video/jopa-video.webm'
import Map from '../../src/Components/UI/Map'
import Specs from '../Components/UI/Specs'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
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

function Headset() {
  return (
    <div>
        <motion.header  className='header-item'
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2}}
        >
          <div className='img-headers'>
             
          </div>
          <div className='text-model-s'>
          <motion.h1 variants={variants} className=''>
            Model S
            </motion.h1>
            <p>Plaid</p>
          </div>
          <motion.div variants={variants} className='text-model-s2'>
            <h3>396mi</h3>
            <h3>1.99s</h3>
            <h3>200mph</h3>
            <h3>1,020hp</h3><br />
            <span>Range (EPA est.)</span>
            <span>0-60 mph*</span>
            <span>Top Speed†</span>
            <span>Peak Power</span>
            <button className='model-s-btn'> <NavLink to='/modelss'>ORDER NOW</NavLink></button>
          </motion.div>
        </motion.header>
        <section className='interior-model-s'>
          <div>
            <motion.h2 variants={variants} 
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>Interior of the Future</motion.h2>
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
        <motion.div variants={variants} className='tex-h1'
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2}}>
          <h1>Stay Connected</h1>
            <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
          </motion.div>
        </div>
        <div className='glavny-text'>
        <motion.div variants={variants} className='text-wolna'
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2}}>
          <h1 >Immersive Sound</h1>
          <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
        </motion.div>
        <div className='vide-wolna'>
          <video autoPlay preload='auto' muted loop src={wolna__video}></video>
        </div>
        </div>
        <div className='wolna-textxx'>
          <div className='imgss-wolna'>
            <img>

              </img>
          </div>
          <motion.div variants={variants} className='text-wolnaa'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
            <h1 className=''>Room for Everything</h1>
            <p>With front and rear trunks and fold-flat seats you can fit
               your bike without taking the wheel off—and your luggage too.</p>
          </motion.div>
        </div>
        </section>
        <motion.section variants={variants} >
          <motion.div variants={variants} className='img-wolna2'>

          </motion.div>
          <motion.div variants={variants} className='class-wolna'>
          <div>
            <motion.h4 variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>Exterior </motion.h4>
            <motion.h1 variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>Designed for Efficiency</motion.h1>
            <motion.button variants={variants} className='wolna-btn'
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>ORDER NOW</motion.button>
          </div>
          <div>
            <motion.p variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>With a drag coefficient of just .208 Cd, the lowest
               on the planet, Model S is built for speed, endurance
                and range. Improved aerodynamics and a wider chassis
                 offer more responsive performance so you can take 
                 corners quicker and with more confidence.</motion.p>
          </div>
          </motion.div>
        </motion.section>
        <motion.section variants={variants} className='wolna-s'
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.2}}>
          <div className='text-wolna4'>
            <h3>Relentless Performance</h3>
            <p>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
          </div>
          <div className='img-wolna3'>
          </div>
        </motion.section>
        <section className='jopa'>
        <motion.div variants={variants} className='jopa-wolna'
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.2}}>
            <div className='img-jopa'>
            
            </div>
            <div className='p-jopa'>
            <h3  className='fadeUp'>Optimized Aerodynamics</h3>  
            <p>Attention to detail on all exterior surfaces makes Model 
              S the most aerodynamic production car on Earth.</p>  
            </div>            
          </motion.div>
        </section>
        <motion.section variants={variants} className='jopa5-text'
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.2}}>
          <div>
            <p>
            Refined Styling
            </p>
            <p>An iconic silhouette meets refreshed, elegant proportions.</p>
          </div>
          <div className='jopa-5'>

          </div>
        </motion.section>
        <section className='jopa8'>
          <div className='jopa-video'>
            <video autoPlay preload='auto' muted loop src={jopa_video}></video>
          </div>
          <motion.div variants={variants} className='jopa7-text'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
            <p>Range</p>
            <h1>Go Anywhere</h1>
            <p>Travel farther on a single charge than any 
              other electric vehicle—and keep going with 
              access to 30,000+ Superchargers globally. By
               combining up to 405 miles of estimated range
                with Tesla fast charging technology, you’ll 
                spend less time charging and even more time on the road.</p>
                <button className='jopa-btn2'>ORDER NOW</button>
          </motion.div>
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