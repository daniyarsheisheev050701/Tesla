import React from 'react'
import '../pages/style/Model_x.css'
import Slider from '../Components/UI/Slider';
import monitor from '../../src/images/monitor.jpg'
import mon from '../../src/images/mon-2.jpg'
import mons from '../../src/images/mons.jpg'
import Babel from '../Components/UI/Babel';
import video from '../../src/video/video-1.webm'
import Crossfade from '../Components/UI/Crossfade';
import { Carousel } from 'bootstrap';
var isScrolling = false;
 
var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   
 
function dealWithScrolling(e) {
    // do epic stuff    
}
// import vides from '../../src/images/auto-pilot-2.webm'
function Model3() {
  return (
    <div>
        <header className='header-model-x'>
        <div className='tesla-xxx'>
          <h1>Model X</h1>
          <p>Plaid</p>
        </div>
        <div className='speed'>
            <h1>333mi<p>Range (EPA est.)</p></h1>
            <h1>
              <h1>2.5s<p>0-60 mph*</p></h1>
            </h1>
            <h1>9.9s<p>1/4 Mile</p></h1>
            <h1>1,020hp<p>Peak Power</p></h1>
            <button className='x-btn'>ORDER NOW</button>
          </div>
        </header>
        <section className='inter'>
        <h1>All-New Interior</h1>
          <div className='interior'>

          </div>

        </section>
        <section className=''>
        <Slider />
        </section>
        <section className='mon'>
          <div className='monitors'>
            <img src={monitor}/>
            <div className='text-xx'>
            <h3>Wireless Gaming</h3>
              <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’
                s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
            </div>
          </div>
          <div className='mon-2'>
            <div className='text-mon-2'>
            <h3>Stay Connected</h3>
            <p>Multi-device Bluetooth, wireless and USB-C charging 
              for every passenger, with enough power to fast-charge 
              your tablets and laptop.</p>
            </div>
              <img src={mon}/>
          </div>
          <div className='mons'>
            <div className='text-mons'>
              <img src={mons}/>
              <div className='text-m'>
              <h3>Your Best Audio System</h3>
              <p>A 22-speaker, 960-watt audio system with Active Road Noise 
                Reduction offers the best listening experience wherever you are.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='inner'>
          <div className='logo-car'>
          <h3>1,020hp</h3>
          <h3>9.9s</h3>
          <h3>2.5s</h3>
          </div>
          <div className='logo-p'>
          <p>Peak power</p>
          <p>1/4 mile</p>
          <p>0-60 mph*</p>
          </div>
        </section>
        <section className='logo-inner'>
          <div className='logo-text'>
            <h6>Plaid</h6>
            <h3>Beyond Ludicrous</h3>
            <button className='btn-inner'>ORDER NOW</button>
          </div>
          <p>With the most power and quickest acceleration of any SUV, Model
               X Plaid is the highest performing SUV ever built. All Model X powertrains,
               with updated battery architecture, can deliver instant torque at any speed.</p>
        </section>
        <section className='electric'>
          <div className='text-elctric'>
            <h3>Electric Powertrain</h3>
            <p>Model X platforms unite powertrain and battery technologies
               for unrivaled performance, range and efficiency. New module and
                pack thermal architecture allows faster charging and gives you
                 more power and endurance in all conditions.</p>
          </div>
          <div className='mix'>
          </div>
          <div className='box-10'>
          <h4>Model X</h4>
            <p>Dual Motor All-Wheel Drive platform has the longest range, 
              and now delivers incredible power and acceleration.</p>
          <h3>3.8 s</h3>
              <h3>348 mi</h3>
              <h3>670 hp</h3>
              <h3>0-60 mph</h3>
              <p>range (EPA est.)</p>
              <p>peak power</p>
          </div>
          <div className='box-6'>
          <h4>Model X</h4>
            <p>Dual Motor All-Wheel Drive platform has the longest range, 
              and now delivers incredible power and acceleration.</p>
          <h3>3.8 s</h3>
              <h3>348 mi</h3>
              <h3>670 hp</h3>
              <h3>0-60 mph</h3>
              <p>range (EPA est.)</p>
              <p>peak power</p>
          </div>
          <div className='text-box-6'>
          <p>* With rollout subtracted</p>
          </div>
        </section>
        <section >
          <div className='box-6xxx'>
          <div className='box-66'>
            <h5>Utility</h5>
            <h1>Even More Capable</h1>
            <p>With the most storage space and towing capacity
               of any electric SUV, and seating for up to seven
                adults, Model X delivers maximum utility. Front
                 doors open and close automatically, Falcon Wing
                  doors allow for easier loading and a standard 
                  trailer hitch lets you bring your gear anywhere
                   you go.</p>
                   <button className='box-btn-x'>ORDER NOW</button>
          </div>
          <div>
          <div className='box-6x'>
                   <h3>91ft³</h3>
                   <h3>5,000lbs</h3>
                   <p>Storage capacity</p>
                   </div>
          </div>
          </div>
        </section>
        <section>
          <div className='disigne-box'>
            <div className='box-textt'>
            <p>New wheels and improved handling</p>
            <h3>0.24</h3>
            <p>Lowest-drag SUV on Earth</p>
            <p>Refined exterior styling</p>
            </div>
          </div>
        </section>
        <section>
          <div className='safety-box'>
          <div>
            <h3>Safety</h3>
            <h1>Built for Safety</h1>
            <p>Model X is built from the ground 
              up as an electric vehicle, with a 
              high-strength architecture and floor-mounted
               battery pack for incredible occupant protection
                and low rollover risk. Every Model X includes
                 Tesla’s latest active safety features, such
                  as Automatic Emergency Braking, at no extra cost.</p>
                  <button className='safety-btn'>ORDER NOW</button>
          </div>
          <div className='satfey'>

          </div>
          </div>
        </section>
        <section className='auto-boxxxs'>
          <div className='autopilot'>
              <h3>Autopilot</h3>
              <h1>Future of Driving</h1>
              <button className='auto-btn'>ORDER NOW</button>
          </div>
          <div className='text-pp'>
          <p>Autopilot enables your car to steer,
                 accelerate and brake automatically
                  within its lane under your active 
                  supervision, assisting with the most
                   burdensome parts of driving. With 
                   over-the-air software updates, the latest
                    enhancements are available instantly.</p>
          </div>
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