import React from 'react'
import '../pages/style/Model_x.css'
import Slider from '../Components/UI/Slider';
import monitor from '../../src/images/monitor.jpg'
import mon from '../../src/images/mon-2.jpg'
import mons from '../../src/images/mons.jpg'
import Crossfade from '../Components/UI/Crossfade';
import Electrik from '../Components/UI/Electrik'
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


function Model3() {
  return (
    <div>
        <header className='header-model-x'>
        <motion.div variants={variants} className='tesla-xxx'
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.2}}>
          <h1>Model X</h1>
        </motion.div>
        <motion.div variants={variants} className='speed'
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.2}}>
            <h1>333mi<p>Range (EPA est.)</p></h1>
            <h1>
              <h1>2.5s<p>0-60 mph*</p></h1>
            </h1>
            <h1>9.9s<p>1/4 Mile</p></h1>
            <h1>1,020hp<p>Peak Power</p></h1>
            {/* <button className='x-btn'>ORDER NOW</button> */}
          </motion.div>
        </header>
        <motion.section variants={variants} className='inter'
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.2}}>
        <h1>All-New Interior</h1>
          <div className='interior'>
          </div>
        </motion.section>
        <section className=''>
        <Slider />
        </section>
        <section className='mon'>
          <div className='monitors'>
            <img src={monitor}/>
            <motion.div variants={variants} className='text-xx'
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>
            <h3>Wireless Gaming</h3>
              <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’
                s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
            </motion.div>
          </div>
          <div className='mon-2'>
            <motion.div variants={variants} className='text-mon-2'
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>
            <h3>Stay Connected</h3>
            <p>Multi-device Bluetooth, wireless and USB-C charging 
              for every passenger, with enough power to fast-charge 
              your tablets and laptop.</p>
            </motion.div>
              <img src={mon}/>
          </div>
          <div className='mons'>
            <div className='text-mons'>
              <img src={mons}/>
              <motion.div variants={variants} className='text-m'
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.2}}>
              <h3>Your Best Audio System</h3>
              <p>A 22-speaker, 960-watt audio system with Active Road Noise 
                Reduction offers the best listening experience wherever you are.</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className='inner'>
          <motion.div variants={variants} className='logo-car'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
          <h3>1,020hp</h3>
          <h3>9.9s</h3>
          <h3>2.5s</h3>
          </motion.div>
          <motion.div variants={variants} className='logo-p'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
          <p>Peak power</p>
          <p>1/4 mile</p>
          <p>0-60 mph*</p>
          </motion.div>
        </section>
        <section className='logo-inner'>
          <motion.div variants={variants} className='logo-text'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
            <h6>Plaid</h6>
            <h3>Beyond Ludicrous</h3>
            <button className='btn-inner'>ORDER NOW</button>
          </motion.div>
          <motion.p variants={variants}  initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2}}>With the most power and quickest acceleration of any SUV, Model
               X Plaid is the highest performing SUV ever built. All Model X powertrains,
               with updated battery architecture, can deliver instant torque at any speed.</motion.p>
        </section>
        <section className='electric'>
          <motion.div variants={variants} className='text-elctric'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
            <h3>Electric Powertrain</h3>
            <p>Model X platforms unite powertrain and battery technologies
               for unrivaled performance, range and efficiency. New module and
                pack thermal architecture allows faster charging and gives you
                 more power and endurance in all conditions.</p>
          </motion.div>
         <section>
           <div>

           </div>
         </section>
        </section>
        <section >
          <div className='box-6xxx'>
          <div className='box-66'>
            <motion.h5 variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>Utility</motion.h5>
            <motion.h1 variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>Even More Capable</motion.h1>
            <motion.p variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>With the most storage space and towing capacity
               of any electric SUV, and seating for up to seven
                adults, Model X delivers maximum utility. Front
                 doors open and close automatically, Falcon Wing
                  doors allow for easier loading and a standard 
                  trailer hitch lets you bring your gear anywhere
                   you go.</motion.p>
                   <motion.button variants={variants} className='box-btn-x'
                    initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2}}>ORDER NOW</motion.button>
          </div>
          <div>
          <div className='box-6x'>
                   <motion.h3 variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2}}>91ft³</motion.h3>
                   <motion.h3 variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2}}>5,000lbs</motion.h3>
                   <motion.p variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2}}>Storage capacity</motion.p>
                   </div>
          </div>
          </div>
          <section>
            <Electrik/>
          </section>
        </section>
        <section>
          <div className='disigne-box'>
            <motion.div variants={variants} className='box-textt'
             initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2}}>
            <p>New wheels and improved handling</p>
            <h3>0.24</h3>
            <p>Lowest-drag SUV on Earth</p>
            <p>Refined exterior styling</p>
            </motion.div>
          </div>
        </section>
        <section>
          <div className='safety-box'>
          <div>
            <motion.h3 variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>Safety</motion.h3>
            <motion.h1 variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>Built for Safety</motion.h1>
            <motion.p variants={variants}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>Model X is built from the ground 
              up as an electric vehicle, with a 
              high-strength architecture and floor-mounted
               battery pack for incredible occupant protection
                and low rollover risk. Every Model X includes
                 Tesla’s latest active safety features, such
                  as Automatic Emergency Braking, at no extra cost.</motion.p>
                  <motion.button variants={variants} className='safety-btn'
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ amount: 0.2}}>ORDER NOW</motion.button>
          </div>
          <div className='satfey'>

          </div>
          </div>
        </section>
        <section className='auto-boxxxs'>
          <motion.div variants={variants} className='autopilot'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
              <h3>Autopilot</h3>
              <h1>Future of Driving</h1>
              <button className='auto-btn'>ORDER NOW</button>
          </motion.div>
          <motion.div variants={variants} className='text-pp'
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.2}}>
          <p>Autopilot enables your car to steer,
                 accelerate and brake automatically
                  within its lane under your active 
                  supervision, assisting with the most
                   burdensome parts of driving. With 
                   over-the-air software updates, the latest
                    enhancements are available instantly.</p>
          </motion.div>
          </section>
          <section className='video-auto'>
         <Crossfade/>
          </section>
<video ></video>
          <section>
          </section>


        </div>
  )
}

export default Model3