import Pizza from "/src/assets/icons/pizza.svg";
import Hamburger from "/src/assets/icons/burger.svg";
import Meat from "/src/assets/icons/meat.svg";
import Sushi from "/src/assets/icons/sushi.svg";
import Broccoli from "/src/assets/icons/broccoli.svg";
// import Dessert from "/src/assets/icons/cake.svg";


import "./Restaurants.scss";
import RestrnItem from "../RestrnItem/RestrnItem";

const Restaurants = () => {
    return ( 
        <div className="restaurants container">
            <div className="title restaurants__title">Nearby restaurants</div>
            <div className="restaurants__row"> 
                <RestrnItem title="Royal Sushi House" time="30-40 min" price="$32 min sum" alt="sushi icon" icon={Sushi} name="Sushi"/>  
                <RestrnItem title="Burgers & Pizza" time="40-60 min" price="$24 min sum" alt="burger icon" icon={Hamburger} name="Burger"/>  
                <RestrnItem title="Ninja sushi" time="20-40 min" price="$40 min sum" alt="sushi icon" icon={Sushi} name="Sushi"/>  
                <RestrnItem title="Ninja sushi" time="20-40 min" price="$40 min sum" alt="sushi icon" icon={Sushi} name="Sushi"/>  
                <RestrnItem title="Ninja sushi" time="20-40 min" price="$40 min sum" alt="sushi icon" icon={Pizza} name="Sushi"/>  
                <RestrnItem title="Ninja sushi" time="20-40 min" price="$40 min sum" alt="sushi icon" icon={Meat} name="Sushi"/>  
                <RestrnItem title="Ninja sushi" time="20-40 min" price="$40 min sum" alt="sushi icon" icon={Broccoli} name="Sushi"/>                         
                    

                            
                
            </div>
        </div>
    )
  }
  
  export default Restaurants