import Account from "../../components/profileComponents/Account/Account";
import Settings from "../../components/profileComponents/Settings/Settings";

import "./Profile.scss";
import { useState } from "react";

const Profile = () => {
  const [items, setItem] = useState ([
    {
        id:15,
        title:"Account",
        subtitle:"Personal information"                     
    }    

])
  return ( 
    <div className="profile container">
      <div className="profile__settings">
        <Settings />
      </div>
      <div className="profile__account">
        {/* <Account title="Account" subtitle="Personal information"/> */}

        {items && items.map((item,index) => {
            return (                        
              <Account key={index} title={item.title} subtitle={item.subtitle}/>
            )
        }
        )}

      </div>
    </div>
  )
}

export default Profile

