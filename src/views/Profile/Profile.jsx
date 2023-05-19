import Account from "../../components/profileComponents/Account/Account";
import Settings from "../../components/profileComponents/Settings/Settings";

import "./Profile.scss";

const Profile = () => {
  return ( 
     <div className="profile container">
      <div className="profile__settings">
        <Settings />
      </div>
      <div className="profile__account">
        <Account title="Account" subtitle="Personal information"/>
      </div>

     </div>
  )
}

export default Profile

