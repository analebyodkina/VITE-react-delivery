import Category from "../../UI/Category/Category";
import BoxIcon from "../../icons/BoxIcon";
import ClockIcon from "../../icons/ClockIcon";
import "./RestrnItem.scss";
import { useState } from "react";

import Pizza from "/src/assets/icons/pizza.svg";
import Hamburger from "/src/assets/icons/burger.svg";
import Meat from "/src/assets/icons/meat.svg";
import Sushi from "/src/assets/icons/sushi.svg";
// import Broccoli from "/src/assets/icons/broccoli.svg";
// import Dessert from "/src/assets/icons/cake.svg";
const RestrnItem = (props) => { 

    const tags = [
        { 
            id: 1, 
            icon: Sushi, 
            title: "Sushi", 
            alt: "sushi icon" 
        },
        { 
            id: 2, 
            icon: Pizza, 
            title: "Pizza", 
            alt: "Pizza icon" 
        },
        { 
            id: 3, 
            icon: Hamburger, 
            title: "Burger", 
            alt: "burger icon" 
        },
        
      ];

  return ( 
    <>
        <div className="restrnItem">
            <div className="restrnItem__image">
                <img src={props.bg} alt="cafe img" />
            </div> 
            <div className="restrnItem__info">
                <div className="restrnItem__header">
                    <div className="restrnItem__title">{props.title}</div>
                    <div className="restrnItem__busket">
                        <BoxIcon />
                    </div>
                </div> 
                <div className="restrnItem__desc">
                    <div className="restrnItem__icon"><ClockIcon /></div>
                    <p className="restrnItem__time">{props.time}</p>
                    <p className="restrnItem__price">{props.price}</p>
                </div>

                {tags && tags.map((e) => {
                    return (
                        <Category 
                        key={e.id}
                        icon={e.icon} 
                        title={e.title} 
                        alt={e.alt}/>
                    );

                })}


                

                {/* <Category icon={Sushi} title="Sushi" alt="sushi icon"/> */}
                
                
                

            </div>  
        </div>
    </>    
      
  )
}

export default RestrnItem