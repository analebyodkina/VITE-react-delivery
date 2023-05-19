
import CheckIcon from "../../icons/CheckIcon";
import "./Checkbox.scss";

const Checkbox = (props) => {
    return ( 
      <label className="checkbox">        
         <span className="checkbox__text">{props.title}</span>
         <input type="checkbox" className="checkbox__input" />
         <span className="checkbox__mark"><CheckIcon /></span>
            
      </label>  
    )
  }
  
  export default Checkbox