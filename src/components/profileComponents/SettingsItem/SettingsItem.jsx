import "./Settingsitem.scss";

const SettingsItem = (props) => {
  return ( 
     <div className="block">
        <div className="block__icon">
        {props.icon}       


    </div>
        <div className="block__info">
            <div className="block__title">{props.title}</div>
            <div className="block__desc">{props.desc}</div>
        </div>
     </div>
  )
}

export default SettingsItem

