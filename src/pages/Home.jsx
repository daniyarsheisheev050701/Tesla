import React from 'react'
import "./style/Home.css"
import {motion, transform} from 'framer-motion'
const  texAnimation ={
  hidden: {
    x: -200,
    opacity: 0,
    amount: 0.2
  },
  visible: {
    x:10,
    opacity:1,
    amount: 0.2
  },
  viewport:{
    amount: 0.2
  }
}
function Home() {
  return (
    <div>
      <header className='header-inner'>
          <motion.div variants={texAnimation} className='text'
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.2}}
          >
            <h1>
            Model 3
            </h1>
            <p>Order Online for Touchless Delivery</p>
          </motion.div>
      </header>
      <section className='tesla-y'>
        <motion.div variants={texAnimation} className='tesla-text'
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>
          <h1>
          Model Y
          </h1>
          <p>Order Online for Touchless Delivery</p>
        </motion.div>
      </section>
      <section>
        <div className='tesla-s'>
          <motion.div variants={texAnimation} className='tesla-text-s'
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.2}}>
          <h1>Model S</h1>
          <p>Order Online for Touchless Delivery</p>
          </motion.div>
        </div>
      </section>
      <section>
        <div className='tesla-x'>
          <motion.div variants={texAnimation} className='text-x'
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.2}}>
          <h1>Model X</h1>
          <p>Order Online for Touchless Delivery</p>
          </motion.div>
        </div>
      </section>
      <section className='tesla-solar'>
        <motion.div variants={texAnimation} className='tesla-solar-text'
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>
          <h1>Solar Panels</h1>
          <p>Lowest Cost Solar Panels in America</p>
        </motion.div>
      </section>
      <section className='tesla-roof'>
        <motion.div variants={texAnimation} className='tesla-roof-text'
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2}}>
          <h1>Solar Roof</h1>
          <p>Produce Clean Energy From Your Roof</p>
        </motion.div>
      </section>
    </div>
  )
}

export default Home