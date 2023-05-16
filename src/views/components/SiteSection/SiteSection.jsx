import Cake from "/src/assets/cake.png";
import Burger from "/src/assets/burger.png";
import "./SalesItem.scss";



const SiteSection = () => {
  return ( 
      <>
        <div className="SiteSection__item">
            <div className="SiteSection__image">
                <img src={Cake} alt="cupcake" />
            </div>            
            <div className="SiteSection__title">All deserts</div>
                        
        </div>
        
      </>
  )
}

export default SiteSection