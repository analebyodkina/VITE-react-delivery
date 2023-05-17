

import rest1 from "/src/assets/restaurant-1.png";
import rest2 from "/src/assets/restaurant-2.png";
import rest3 from "/src/assets/restaurant-3.png";


import "./Restaurants.scss";
import RestrnItem from "../RestrnItem/RestrnItem";

const Restaurants = () => {
    return ( 
        <div className="restaurants container">
            <div className="title restaurants__title">Nearby restaurants</div>
            <div className="restaurants__row"> 
                <RestrnItem title="Royal Sushi House" bg={rest1} time="30-40 min" price="$32 min sum" />  
                <RestrnItem title="Burgers & Pizza" bg={rest2} time="40-60 min" price="$24 min sum" />  
                <RestrnItem title="Ninja sushi"  bg={rest3} time="20-40 min" price="$40 min sum" />  
                <RestrnItem title="Ninja sushi" bg={rest3} time="20-40 min" price="$40 min sum" />  
                <RestrnItem title="Ninja sushi" bg={rest3} time="20-40 min" price="$40 min sum" />  
                
                
            </div>
        </div>
    )
  }
  
  export default Restaurants