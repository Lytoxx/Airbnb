import React from 'react';
import "../index.css"
import Airbnb from "../images/airbnb.png"
export default  function Header() {
    return (
            <div className='Header'>
                  <img src={Airbnb} className="Logo" alt=''/>
                  <h3 className='Brand'>airbnb</h3>
            </div>
        )
}