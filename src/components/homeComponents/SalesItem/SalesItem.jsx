import Cake from "/src/assets/cake.png";
import Burger from "/src/assets/burger.png";
import "./SalesItem.scss";


const SalesItem = (props) => {
  return ( 
      <>
        <a href="/" className="sales__card card">
            <div className="card__image">
                <img src={props.img} alt="cupcake" />
            </div>
            <div className="card__info">
                <div className="title card__title">{props.title}</div>
                <div className="card__discount">{props.discount}</div>
                <div className="card__subtitle">{props.subtitle}</div>
            </div>                        
        </a>
        
      </>
  )
}

export default SalesItem