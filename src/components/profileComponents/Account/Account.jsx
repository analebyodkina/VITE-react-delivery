import "./Account.scss";

const Account = (props) => {
  return ( 
     <div className="account">
        <div className="title account__title">{props.title}</div>
        <div className="account__field">
            <div className="account__subtitle">{props.subtitle}</div>
        </div>
     </div>
  )
}

export default Account