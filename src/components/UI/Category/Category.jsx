// import SearchIcon from "../../icons/Searchicon"
import "./Category.scss";

const Category = (props) => {
    return ( 
        <a href="/" className="category">                
            <div className="category__image">
                <img src={props.icon} alt={props.alt} />
            </div>            
            <div className="category__title">{props.title}</div>                        
        </a> 
       
    )
  }
  
  export default Category