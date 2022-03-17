import React from 'react'
import { Carousel } from 'bootstrap'
import './style/Contacts.css'
import Utility from '../../src/Components/UI/Utility'
import 'animate.css';
import videss from '../../src/model-sss/videss.webm'
import {motion} from 'framer-motion'
const  textAnimation ={
  hidden: {
    x: -300,
    opacity: 0,
    amount: 0.5
  },
  visible: {
    x:5,
    opacity:1,
    amount: 0.2
  },
  viewport:{
    amount: 0.2
  }
}
function Contacts() {
  return (
    <div className='phone'>
      <div className='text-y'>
      <motion.h2 variants={textAnimation} className=''
       initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}
    >Model Y</motion.h2>
      </div>
        <header className='header-phone'>
            <div className='y'>
            <motion.h3 variants={textAnimation} className=''
             initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>76cu ft</motion.h3>
            <motion.p  variants={textAnimation}className=''
             initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>Cargo Space</motion.p>
            <motion.h3 variants={textAnimation} className=''
             initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>330mi</motion.h3>
            <motion.p  variants={textAnimation}className=''
             initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>Range (EPA est.)</motion.p>
            <motion.h3 variants={textAnimation} className=''
             initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>AWD</motion.h3>
            <motion.p  variants={textAnimation}className=''
             initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>Dual Motor</motion.p>
            </div>
            <div className=''>
            <motion.button variants={textAnimation} className='btn-y'
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>ORDER NOW</motion.button>
            </div>
        </header>
        <section>
          <div className='text-utility'>
          <div className=''>
            <motion.h4 variants={textAnimation} className=''
             initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>Utility</motion.h4>
            <motion.h2 variants={textAnimation} className=''
             initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2}}>A Place For Everything</motion.h2>
            <motion.button variants={textAnimation} className=''
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>ORDER NOW</motion.button>
          </div>
          <motion.div variants={textAnimation}
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
            <p >Model Y provides maximum versatility—able 
              to carry 7 passengers and their cargo. Each
               second row seat folds flat independently, 
               creating flexible storage for skis, furniture,
                luggage and more. The liftgate opens to a low 
                trunk floor that makes loading and unloading easy and quick.</p>
          </motion.div>
          </div>
          <div>
         <Utility/>
          </div>
        </section>
        <section>
          <div className='img-cloud'>
          <motion.div variants={textAnimation} className='cloud'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
            <h3>2</h3>
            <p>Independent motors digitally control torque to the front and rear wheels</p>
            <h3>3.5s</h3>
            <i class="fa-solid fa-gauge-max"></i>
            <p>Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds</p>
            <i class="fa-solid fa-cloud-sun"></i>
            <p>Capable in rain, snow, mud and off-road with superior traction control</p>
          </motion.div>
          </div>
        </section>
        <section className='viss'>
          <div className='videp'>
            <video autoPlay preload='auto' muted loop src={videss}></video>
          </div>
          <motion.div variants={textAnimation} className='textpp'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
            <h3>Range</h3>
            <h1>Go Anywhere</h1>
            <p>Model Y is fully electric, so you never need to
               visit a gas station again. If you charge overnight
                at home, you can wake up to a full battery every 
                morning. And when you’re on the road, it’s easy to
                 plug in along the way—at any public station or with
                  the Tesla charging network. We currently have over 
                  30,000 Superchargers worldwide, with six new locations
                   opening every week.</p>
          </motion.div>
        </section>
    </div>
  )
}

export default Contacts