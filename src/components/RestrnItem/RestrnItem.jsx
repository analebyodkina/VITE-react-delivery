import BoxIcon from "../icons/BoxIcon";
import ClockIcon from "../icons/ClockIcon";
import "./RestrnItem.scss";

import restaur from "/src/assets/restaurant-1.png";

const RestrnItem = (props) => {
  return ( 
    <>
        <div className="restrnItem">
            <div className="restrnItem__image">
                <img src={restaur} alt="cafe img" />
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
                <a href="/" className="restrnItem__section category">                
                    <div className="category__image">
                        <img src={props.icon} alt={props.alt} />
                    </div>            
                    <div className="category__title">{props.name}</div>                        
                </a> 
            </div>          
          
        </div> 

    </>      
        
    
    
           
      
  )
}

export default RestrnItem