import Pizza from "/src/assets/icons/pizza.svg";
import Hamburger from "/src/assets/icons/burger.svg";
import Meat from "/src/assets/icons/meat.svg";
import Sushi from "/src/assets/icons/sushi.svg";
import Broccoli from "/src/assets/icons/broccoli.svg";
import Dessert from "/src/assets/icons/cake.svg";

import { useState } from "react";
import SiteSection from "../SiteSection/SiteSection";
import "./Sections.scss";


const Sections = () => {
    const [items, setItem] = useState ([
        {
            id:3, 
            image:"/src/assets/icons/pizza.svg",
            alt:"pizza icon", 
            title:"Pizza"           
        },
        {
            id:4,
            image:"/src/assets/icons/burger.svg",
            alt:"burger icon", 
            title:"Burger"             
        },
        {
            id:5,
            image:"/src/assets/icons/meat.svg",
            alt:"meat icon", 
            title:"BBQ"             
        },
        {
            id:6,
            image:"/src/assets/icons/sushi.svg",
            alt:"sushi icon", 
            title:"Sushi"             
        },
        {
            id:7,
            image:"/src/assets/icons/broccoli.svg",
            alt:"broccoli icon", 
            title:"Vegan"             
        },
        {
            id:8,
            image:"/src/assets/icons/cake.svg",
            alt:"dessert con", 
            title:"Desserts"             
        }
    ])
    return ( 
        <div className="siteSections container">
            <div className="siteSections__row"> 
                {/* <SiteSection image={Pizza} alt="pizza icon" title="Pizza"/> 
                <SiteSection image={Hamburger} alt="burger icon" title="Burger"/> 
                <SiteSection image={Meat} alt="meat icon" title="BBQ"/> 
                <SiteSection image={Sushi} alt="sushi icon" title="Sushi"/> 
                <SiteSection image={Broccoli} alt="broccoli icon" title="Vegan"/> 
                <SiteSection image={Dessert} alt="dessert icon" title="Desserts"/>  */}

                {items && items.map((item,index) => {
                    return (
                        <SiteSection key={index} title={item.title} alt={item.alt} image={item.image} />
                    )
                }
                )}        
                
            </div>
        </div>
    )
  }
  
  export default Sections