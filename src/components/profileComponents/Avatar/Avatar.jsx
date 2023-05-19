import AvatarImg from "/src/assets/avatar.png";

import "./Avatar.scss";
import Button from "../../UI/Button/Button";

const Avatar = () => {
  return ( 
    <div className="avatar">
        <h4 className="heading avatar__title">Avatar</h4>
        <div className="avatar__row">
            <div className="avatar__image">
                <img src={AvatarImg} alt="avatar" />
            </div>
            <Button text ="Change" />
            <Button text ="Remove" color="greyNoBorder" />
        </div>
    </div>
  )
}

export default Avatar