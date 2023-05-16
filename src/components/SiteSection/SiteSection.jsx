
import "./SiteSection.scss";



const SiteSection = (props) => {
  return ( 
      <>
        <a href="/" className="SiteSection__item">
            <div className="SiteSection__image">
                <img src={props.image} alt={props.alt} />
            </div>            
            <div className="SiteSection__title">{props.title}</div>
                        
        </a>
        
      </>
  )
}

export default SiteSection