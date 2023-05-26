import Cake from "/src/assets/cake.png";
import Burger from "/src/assets/burger.png";
import SalesItem from "../SalesItem/SalesItem"
import "./Sales.scss";
import { useState } from "react";

const Sales = () => {
    const [items, setItem] = useState ([
        {
            id:1,
            title:"All deserts",
            discount:"20% OFF",
            subtitle:"Deserty",
            alt:"cupcake",
            img:"/src/assets/cake.png"             
        },
        {
            id:2,
            title:"Big Burgers",
            discount:"50% OFF",
            subtitle:"Fooddies",
            alt:"burger",
            img:"/src/assets/burger.png"             
        },

    ])
    return ( 
        <div className="sales container">
            <div className="sales__row">
                {/* <SalesItem title="All deserts" discount="20% OFF" subtitle="Deserty" alt="cupcake" img={Cake} />
                <SalesItem title="Big Burgers" discount="50% OFF" subtitle="Fooddies" alt="burger" img={Burger} /> */}

                {items && items.map((item,index) => {
                    return (
                        <SalesItem key={index} title={item.title} discount={item.discount} subtitle={item.subtitle} alt={item.alt} img={item.img} />
                    )
                }
                )}
                
            </div>
        </div>
    )
  }
  
  export default Sales