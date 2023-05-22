import Button from "../../UI/Button/Button";
import { useState } from "react";
import "./ProfileFooter.scss";

const ProfileFooter = () => {
  const [items, setItem] = useState ([
    {
        id:32,
        text:"Log out",
        color:"red"                   
    },
    {
        id:33,
        text:"Discard changes",
        color:"grey"             
    },
    {
      id:33,
      text:"Save changes",
      color:"blue"             
  },

])
  return ( 
     <div className="footer">      
      {/* <Button text="Log out" color="red" />
      <Button text="Discard changes" color="grey"/>
      <Button text="Save changes" color="blue"/> */}
        
      {items && items.map((item,index) => {
          return (
              <Button key={index} text={item.text} color={item.color} />
          )
       }
      )}
    </div>
  )
}

export default ProfileFooter