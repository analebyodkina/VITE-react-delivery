import SearchIcon from "../../icons/Searchicon"
import "./Input.scss";

const Input = () => {
    return ( 
       <label className="input">
        <input type="search" placeholder="Search" />
            <span><SearchIcon /></span> 
       </label>
    )
  }
  
  export default Input