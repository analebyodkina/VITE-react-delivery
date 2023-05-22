import AvatarImg from "/src/assets/avatar.png";

import "./Avatar.scss";
import Button from "../../UI/Button/Button";
import { useState } from "react";

const Avatar = () => {
  const [items, setItem] = useState ([
    {
        id:20,
        text:"Change"
                    
    },
    {
        id:21,
        text:"Remove",
        color:"greyNoBorder"
                    
    },

])
  return ( 
    <div className="avatar">
        <h4 className="heading avatar__title">Avatar</h4>
        <div className="avatar__row">
            <div className="avatar__image">
                <img src={AvatarImg} alt="avatar" />
            </div>
            {/* <Button text="Change" />
            <Button text="Remove" color="greyNoBorder" /> */}

            {items && items.map((item,index) => {
                return (
                    <Button key={index} text={item.text} color={item.color} />
                )
              }
            )}
        </div>
    </div>
  )
}

export default Avatar