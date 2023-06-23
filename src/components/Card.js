import React from 'react';
import "../index.css"
export default function Card(props) {
    // props=props.item
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "online") {
        badgeText = "Online" 
    }
    return (
        <div className='Card'>
            { badgeText && <div className='OpenSpots'>{badgeText}</div> }
            <img src={require(`../images/${props.item.img}`)} className="CardImg" alt=''/>
            <div className='Rating'>⭐{props.item.rating}<span className='gray'>({props.item.reviewCount}) - {props.item.country}</span></div>
            <p className='Legend'>{props.item.legend}</p>
            <p className='Pricing'><span className='dollar gray'>From ${props.item.price}</span> /person</p>
        </div>
    )
}
