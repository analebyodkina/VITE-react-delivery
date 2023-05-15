import { Link } from "react-router-dom";
import BoxIcon from "../../icons/BoxIcon";
import Avatar from "/src/assets/avatar.png";
import Logo from "/src/assets/logo.svg";


const Header = () => {
    return ( 
        <header className="header">
            <div className="header__logo">
            <img src={Logo} alt="logo" />
            </div>
            <div className="header__serch"></div>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__li">
                        <Link to={'/'}>Restaurants</Link>
                    </li>
                    <li><Link to={'/'}>Deals</Link></li>
                    <li><Link to={'/'}>My orders</Link></li>
                </ul>
            </nav>
            <div className="header__btn">
                <div className="headerBusket">
                    <BoxIcon />
                    <div className="headerBusket__counter">4</div>
                </div>
                <div className="header__profile"></div>
                <img src={Avatar} alt="avatar" />
            </div>

        <Link to={'/'}>Home              
       </Link> 
       <Link to={'/profile'}>Profile              
       </Link> 

       
       
        </header>
    )
}

export default Header