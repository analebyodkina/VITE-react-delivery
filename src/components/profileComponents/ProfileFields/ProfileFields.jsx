import TextInput from "../../UI/TextInput/TextInput";
import "./ProfileFields.scss";
import { useState } from "react";

const ProfileFields = () => {
  const [items, setItem] = useState ([
    {
        id:28,
        title:"First name",
        type:"text",
        placeholder:"Jane"                  
    },
    {
        id:29,
        title:"Last name",
        type:"text",
        placeholder:"Robertson"               
    },
    {
      id:30,
      title:"Email",
      type:"email",
      placeholder:"jane.robertson@example.com"               
    },
    {
      id:31,
      title:"Phone number",
      type:"tel",
      placeholder:"(217) 555-0113"              
  },

])
  return ( 
     <div className="profileFields">
        {/* <TextInput title="First name" type="text" placeholder="Jane"/>
        <TextInput title="Last name" type="text" placeholder="Robertson"/>
        <TextInput title="Email" type="email" placeholder="jane.robertson@example.com"/>
        <TextInput title="Phone number" type="tel" placeholder="(217) 555-0113"/> */}

        {items && items.map((item,index) => {
            return (
                <TextInput key={index} title={item.title} type={item.type} placeholder={item.placeholder} />
            )
        }
        )}
        
    </div>
  )
}

export default ProfileFields