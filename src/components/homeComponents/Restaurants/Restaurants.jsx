import rest1 from "/src/assets/restaurant-1.png";
import rest2 from "/src/assets/restaurant-2.png";
import rest3 from "/src/assets/restaurant-3.png";

import "./Restaurants.scss";
import RestrnItem from "../RestrnItem/RestrnItem";
import { useState } from "react";

const Restaurants = () => {
    const [items, setItem] = useState ([
        {
            id:9,
            title:"Royal Sushi House",            
            bg:"/src/assets/restaurant-1.png",
            time:"30-40 min",
            price:"$32 min sum"             
        },
        {
            id:10,
            title:"Burgers & Pizza",            
            bg:"/src/assets/restaurant-2.png",
            time:"40-60 min",
            price:"$32 min sum"                         
        },
        {
            id:11,
            title:"Ninja sushi",            
            bg:"/src/assets/restaurant-3.png",
            time:"20-40 min",
            price:"$40 min sum"                         
        },
        {
            id:12,
            title:"Ninja sushi",            
            bg:"/src/assets/restaurant-3.png",
            time:"20-40 min",
            price:"$40 min sum"                         
        },
        {
            id:13,
            title:"Ninja sushi",            
            bg:"/src/assets/restaurant-3.png",
            time:"30-40 min",
            price:"$40 min sum"                         
        },

    ])
    return ( 
        <div className="restaurants container">
            <div className="title restaurants__title">Nearby restaurants</div>
            <div className="restaurants__row"> 
                {/* <RestrnItem title="Royal Sushi House" bg={rest1} time="30-40 min" price="$32 min sum" />  
                <RestrnItem title="Burgers & Pizza" bg={rest2} time="40-60 min" price="$24 min sum" />  
                <RestrnItem title="Ninja sushi"  bg={rest3} time="20-40 min" price="$40 min sum" />  
                <RestrnItem title="Ninja sushi" bg={rest3} time="20-40 min" price="$40 min sum" />  
                <RestrnItem title="Ninja sushi" bg={rest3} time="20-40 min" price="$40 min sum" /> */}

                {items && items.map((item,index) => {
                    return (
                        <RestrnItem key={index} title={item.title} bg={item.bg} time={item.time} price={item.price} />
                    )
                }
                )}   
                
            </div>
        </div>
    )
  }
  
  export default Restaurants