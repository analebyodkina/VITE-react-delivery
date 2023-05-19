import Avatar from "../Avatar/Avatar";
import Notifications from "../Notifications/Notifications";
import ProfileFields from "../ProfileFields/ProfileFields";
import ProfileFooter from "../ProfileFooter/ProfileFooter";
import "./Account.scss";

const Account = (props) => {
  return ( 
     <div className="account">
        <div className="title account__title">{props.title}</div>
        <div className="account__field">
            <div className="account__subtitle">{props.subtitle}</div>
            <Avatar />
            <ProfileFields />
            <Notifications />
            <ProfileFooter />
            

        </div>
        
     </div>
  )
}

export default Account