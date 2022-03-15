import React from 'react'
import "./style/Home.css"
function Home() {
  return (
    <div>
      <header className='header-inner'>
          <div className='text'>
            <h1>
            Model 3
            </h1>
            <p>Order Online for Touchless Delivery</p>
          </div>
      </header>
      <section className='tesla-y'>
        <div className='tesla-text'>
          <h1>
          Model Y
          </h1>
          <p>Order Online for Touchless Delivery</p>
        </div>
      </section>
      <section>
        <div className='tesla-s'>
          <div className='tesla-text-s'>
          <h1>Model S</h1>
          <p>Order Online for Touchless Delivery</p>
          </div>
        </div>
      </section>
      <section>
        <div className='tesla-x'>
          <div className='text-x'>
          <h1>Model X</h1>
          <p>Order Online for Touchless Delivery</p>
          </div>
        </div>
      </section>
      <section className='tesla-solar'>
        <div className='tesla-solar-text'>
          <h1>Solar Panels</h1>
          <p>Lowest Cost Solar Panels in America</p>
        </div>
      </section>
      <section className='tesla-roof'>
        <div className='tesla-roof-text'>
          <h1>Solar Roof</h1>
          <p>Produce Clean Energy From Your Roof</p>
        </div>
      </section>
    </div>
  )
}

export default Home