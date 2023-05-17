import Pizza from "/src/assets/icons/pizza.svg";
import Hamburger from "/src/assets/icons/burger.svg";
import Meat from "/src/assets/icons/meat.svg";
import Sushi from "/src/assets/icons/sushi.svg";
import Broccoli from "/src/assets/icons/broccoli.svg";
import Dessert from "/src/assets/icons/cake.svg";

import SiteSection from "../../SiteSection/SiteSection";
import "./Sections.scss";

const Sections = () => {
    return ( 
        <div className="siteSections container">
            <div className="siteSections__row"> 
                <SiteSection image={Pizza} alt="pizza icon" title="Pizza"/> 
                <SiteSection image={Hamburger} alt="burger icon" title="Burger"/> 
                <SiteSection image={Meat} alt="meat icon" title="BBQ"/> 
                <SiteSection image={Sushi} alt="sushi icon" title="Sushi"/> 
                <SiteSection image={Broccoli} alt="broccoli icon" title="Vegan"/> 
                <SiteSection image={Dessert} alt="dessert icon" title="Desserts"/>               
                

                            
                
            </div>
        </div>
    )
  }
  
  export default Sections