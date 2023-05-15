import Cake from "/src/assets/cake.png";
import Burger from "/src/assets/burger.png";
import "./sales.scss";

const Sales = () => {
    return ( 
        <div className="sales container">
            <div className="sales__row">
                <div className="sales__item card">
                    <div className="card__image">
                        <img src={Cake} alt="cupcake" />
                    </div>
                    <div className="card__info">
                        <div className="title card__title">All deserts</div>
                        <div className="card__discount">20% OFF</div>
                        <div className="card__subtitle">Deserty</div>
                    </div>
                    
                </div>


                <div className="sales__item card">
                    <div className="card__image">
                        <img src={Burger} alt="burger" />
                    </div>
                    <div className="card__info">
                        <div className="title card__title">Big Burgers</div>
                        <div className="card__discount">50% OFF</div>
                        <div className="card__subtitle">Fooddies</div>
                    </div>
                    
                </div>               
                
            </div>
        </div>
    )
  }
  
  export default Sales