import CardIcon from "../../icons/CardIcon";
import PointIcon from "../../icons/PointIcon";
import ShieldIcon from "../../icons/Shieldicon";
import UserIcon from "../../icons/UserIcon";

import "./Settings.scss";


const Settings = () => {  
 
  return ( 
     <div className="settings">
        <div className="title settings__title">Settings</div>
        <div className="settings__list" >
          <div className="block settings__block">
            <div className="block__icon">{<UserIcon />}</div>
            <div className="block__info">
                <div className="block__title">Account</div>
                <div className="block__desc">Personal information</div>
            </div>
          </div>
          <div className="block settings__block">
            <div className="block__icon">{<PointIcon />}</div>
            <div className="block__info">
                <div className="block__title">Address</div>
                <div className="block__desc">Shippings addresses</div>
            </div>
          </div>
          <div className="block settings__block">
            <div className="block__icon">{<CardIcon />}</div>
            <div className="block__info">
                <div className="block__title">Payment method</div>
                <div className="block__desc">Connected credit cards</div>
            </div>
          </div>
          <div className="block settings__block">
            <div className="block__icon">{<ShieldIcon />}</div>
            <div className="block__info">
                <div className="block__title">Security</div>
                <div className="block__desc">Password, 2FA</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Settings