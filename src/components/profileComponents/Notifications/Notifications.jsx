import Checkbox from "../../UI/Checkbox/Checkbox";
import "./Notifications.scss";
import { useState } from "react";

const Notifications = () => {
  const [items, setItem] = useState ([
    {
        id:22,
        title:"New deals"                     
    },
    {
        id:23,
        title:"Password changes"                    
    },
    {
      id:24,
      title:"New restaurants"                    
    },
    {
      id:25,
      title:"Special offers"                     
    },
    {
      id:26,
      title:"Order statuses"                     
    },
    {
      id:27,
      title:"Newsletter"                     
    },
    

])
  return ( 
    <div className="notifications">
      <div className="title notifications__title">Email notifications</div>
      <div className="notifications__row">
        {/* <Checkbox title="New deals"/>
        <Checkbox title="Password changes"/>
        <Checkbox title="New restaurants"/>
        <Checkbox title="Special offers"/>
        <Checkbox title="Order statuses"/>
        <Checkbox title="Newsletter"/> */}

        {items && items.map((item,index) => {
            return (
                <Checkbox key={index} title={item.title} />
            )
         }
        )}
      </div> 
    </div>
  )
}

export default Notifications