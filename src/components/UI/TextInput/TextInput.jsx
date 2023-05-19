
import "./TextInput.scss";

const TextInput = (props) => {
    return ( 
       <label className="textInput">
          <span className="heading">{props.title}</span>       
          <input type={props.type} required className="textInput__field" placeholder={props.placeholder}/>             
       </label>
    )
  }
  
  export default TextInput