
import "./SiteSection.scss";



const SiteSection = (props) => {
  return ( 
      <>
        <div className="SiteSection__item">
            <div className="SiteSection__image">
                <img src={props.image} alt={props.alt} />
            </div>            
            <div className="SiteSection__title">{props.title}</div>
                        
        </div>
        
      </>
  )
}

export default SiteSection