import CardIcon from "../../icons/CardIcon";
import PointIcon from "../../icons/PointIcon";
import ShieldIcon from "../../icons/Shieldicon";
import UserIcon from "../../icons/UserIcon";
import SettingsItem from "../SettingsItem/SettingsItem";
import "./Settings.scss";
import { useState } from "react";

const Settings = () => {
  const [items, setItem] = useState ([
    {
        id:16,
        title:"Account",
        desc:"Personal information",      
        
                    
    },
    {
        id:17,
        title:"Address",
        desc:"Shippings addresses",
                    
    },
    {
      id:18,
      title:"Payment method",
      desc:"Connected credit cards",
                  
  },
  {
    id:19,
    title:"Security",
    desc:"Password, 2FA",
                
},

])
  return ( 
     <div className="settings">
        <div className="title settings__title">Settings</div>
        <div className="settings__list" >
          <SettingsItem title="Account" desc="Personal information" icon={<UserIcon />}/>


          <SettingsItem title="Address" desc="Shippings addresses" icon={<PointIcon />}/>
          <SettingsItem title="Payment method" desc="Connected credit cards" icon={<CardIcon />}/>
          <SettingsItem title="Security" desc="Password, 2FA" icon={<ShieldIcon />} />
        </div>
    </div>
  )
}

export default Settings