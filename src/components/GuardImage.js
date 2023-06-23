import React from 'react';
import "../index.css"
import Airbnb from "../images/airbnb2.jpg"
export default function GuardImage() {
    return (
            <div className='About'>
                  <img src={Airbnb} className="Image" alt=''/>
                  <h1 className='Brand'>Online Experiences </h1>
                  <p>Join unique interactive interactive activities led by one of a kind hots all without leaving home.</p>
            </div>
        )
}