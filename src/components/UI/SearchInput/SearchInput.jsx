import SearchIcon from "../../icons/Searchicon"
import "./SearchInput.scss";

const SearchInput = () => {
    return ( 
       <label className="SearchInput">
        <input type="search" placeholder="Search" />
            <span><SearchIcon /></span> 
       </label>
    )
  }
  
  export default SearchInput