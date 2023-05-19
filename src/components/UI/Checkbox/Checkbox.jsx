
import "./Checkbox.scss";

const Checkbox = (props) => {
    return ( 
      <label className="checkbox">
         <span className="checkbox__mark"></span>
         <span className="checkbox__text">New deals</span>
         <input type="checkbox" className="checkbox__input"/>
            
      </label>  
    )
  }
  
  export default Checkbox