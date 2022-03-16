import React, { useState } from 'react' 
import '../../Components/UI/style.css/Specs.css'
function Specs() {
    
    const [menu, setMenu] = useState()
    const aaa =()=> {
        setMenu(
            <div className='setname'>
                <div>
                <h3>
                Range (EPA est.)
                <p>396 mi</p>
                </h3>
                <h3>
                1/4 Mile
                <p>9.23@155 mph trap speed</p>
                </h3>
                <h3>
                Peak Power
                <p>1,020 hp</p>
                </h3>
                <h3>
                Wheels
                <p>19" or 21"</p>
                </h3>
                <h3>
                Cargo
                <p>28 cu ft</p>
                </h3>
                </div>


                <div>
                <h3>
              Acceleration
                <p>1.99 s 0-60 mph**with rollout subtracted</p>
                </h3>
                <h3>
                Top Speed200 mph†
                <p>†when equipped with paid hardware upgrades</p>
                </h3>
                <h3>
                Drag Coefficient
                <p>0.208 Cd</p>
                </h3>
                <h3>
                Powertrain
                <p>Tri Motor</p>
                </h3>
                <h3>
                Supercharging Max
                <p>250 kW</p>
                </h3>
                </div>
            </div>
        )
    }
     const boton =() => {
         setMenu (
             <div className='setmenu'>
                 <div>
                <h3>
                Range (EPA est.)
                <p>405 mi</p>
                </h3>
                <h3>
                Peak Power
                <p>670 hp</p>
                </h3>
                <h3>
                Wheels
                <p>19" or 21"</p>
                </h3>
                <h3>
                Cargo
                <p>28 cu ft</p>
                </h3>
                <h3>
                Acceleration
                <p>3.1 s 0-60 mph</p>
                </h3>
                </div>


                <div>
                <h3>
                Top Speed
                <p>155 mph</p>
                </h3>
                <h3>
                Drag Coefficient
                <p>4,561 lbs</p>
                </h3>
                <h3>
                Weight
                <p>4,561 lbs</p>
                </h3>
                <h3>
                Powertrain
                <p>Dual Motor</p>
                </h3>
                <h3>
                Supercharging Max
                <p>250 kW</p>
                </h3>
                </div>
             </div>   

         )
     }
  return (
      
    <div>
        <div className='wrap'>
        <button className='btn-Specs' onClick={ () => setMenu(aaa) } >Model S Plaid</button>
         <button className='btn-Specs' onClick={()=>  setMenu (boton)}>Model S</button>
        </div>
        <div>
            {menu}
        </div>

    </div>
  )
}

export default Specs