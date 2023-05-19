import AvatarImg from "/src/assets/avatar.png";

import "./Avatar.scss";

const Avatar = () => {
  return ( 
    <div className="avatar">
        <h4 className="avatar__title">Avatar</h4>
        <div className="avatar__row">
            <div className="avatar__image">
                <img src={AvatarImg} alt="avatar" />
            </div>
            <button className="avatar__button _primary">Change</button>
            <button className="avatar__button">Remove</button>
        </div>
    </div>
  )
}

export default Avatar