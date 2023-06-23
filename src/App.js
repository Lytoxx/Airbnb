import React from 'react';
import Header from './components/Header';
import GuardImage from './components/GuardImage';
import Card from './components/Card';
import data from './Data.js'
import Challenge from './components/Challenge';
 
export default function App() {
    const Data = data.map(item => 
         <Card
          key={item.id}
          item={item} 
          // img={item.img} 
          // rating={item.rating} 
          // reviewCount={item.reviewCount} 
          // country = {item.country} 
          // legend ={item.legend} 
          // price ={item.price}
          // openSpots = {item.openSpots}
          // location = {item.location}
          />
    )
         return(
          <>
           <Header />
           <GuardImage/>
           <div className='Cards'>
              {Data}
           </div>
           {/* <Card img={swimmer} rating="5.0" reviewCount={6} country = "USA" legend ="Life lessons with Katie Zaferes" price ={136}/> */}
           {/* <Challenge/> */}
          </>
        )

}