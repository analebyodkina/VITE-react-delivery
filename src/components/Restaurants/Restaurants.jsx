import Pizza from "/src/assets/icons/pizza.svg";
import Hamburger from "/src/assets/icons/burger.svg";
import Meat from "/src/assets/icons/meat.svg";
import Sushi from "/src/assets/icons/sushi.svg";
import Broccoli from "/src/assets/icons/broccoli.svg";
import Dessert from "/src/assets/icons/cake.svg";

import SiteSection from "../SiteSection/SiteSection";
import "./Restaurants.scss";
import RestrnItem from "../RestrnItem/RestrnItem";

const Restaurants = () => {
    return ( 
        <div className="restaurants container">
            <div className="title restaurants__title">Nearby restaurants</div>
            <div className="restaurants__row"> 
            <RestrnItem />                          
                

                            
                
            </div>
        </div>
    )
  }
  
  export default Restaurants