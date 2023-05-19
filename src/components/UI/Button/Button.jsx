
import "./Button.scss";

const Button = (props) => {
   const btnClass = `btn ${props.color}`; // Assuming the color is passed as props
    return ( 
       <button className={btnClass}>{props.text}</button>
    )
  }
  
  export default Button

  