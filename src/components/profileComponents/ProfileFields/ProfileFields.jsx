
import TextInput from "../../UI/TextInput/TextInput";
import "./ProfileFields.scss";

const ProfileFields = () => {
  return ( 
     <div className="profileFields">
        <TextInput title="First name" type="text" placeholder="Jane"/>
        <TextInput title="Last name" type="text" placeholder="Robertson"/>
        <TextInput title="Email" type="email" placeholder="jane.robertson@example.com"/>
        <TextInput title="Phone number" type="tel" placeholder="(217) 555-0113"/>
        
    </div>
  )
}

export default ProfileFields