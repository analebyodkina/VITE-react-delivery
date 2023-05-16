import Cake from "/src/assets/cake.png";
import Burger from "/src/assets/burger.png";
import SalesItem from "../../views/components/SalesItem/SalesItem"
import "./sales.scss";

const Sales = () => {
    return ( 
        <div className="sales container">
            <div className="sales__row">
                <SalesItem title="All deserts" discount="20% OFF" subtitle="Deserty" alt="cupcake" img={Cake} />
                <SalesItem title="Big Burgers" discount="50% OFF" subtitle="Fooddies" alt="burger" img={Burger} />
            </div>
        </div>
    )
  }
  
  export default Sales