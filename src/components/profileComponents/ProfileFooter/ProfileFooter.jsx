import Button from "../../UI/Button/Button";

import "./ProfileFooter.scss";

const ProfileFooter = () => {
  return ( 
     <div className="footer">      
      <Button text ="Log out" color="red" />
      <Button text ="Discard changes" color="grey"/>
      <Button text ="Save changes" color="blue"/>
        
        
    </div>
  )
}

export default ProfileFooter