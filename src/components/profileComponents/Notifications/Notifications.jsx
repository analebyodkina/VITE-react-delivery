import Checkbox from "../../UI/Checkbox/Checkbox";

import "./Notifications.scss";

const Notifications = () => {
  return ( 
     <div className="notifications">
      <div className="title notifications__title">Email notifications</div>
      <div className="notifications__row">
        <Checkbox title="New deals"/>
        <Checkbox title="Password changes"/>
        <Checkbox title="New restaurants"/>
        <Checkbox title="Special offers"/>
        <Checkbox title="Order statuses"/>
        <Checkbox title="Newsletter"/>
      </div>
      
        
        
    </div>
  )
}

export default Notifications