import { Link } from "react-router-dom";
import BoxIcon from "../../icons/BoxIcon";
import Avatar from "/src/assets/avatar.png";
import Logo from "/src/assets/logo.svg";
import Input from "../Input/Input";

import style from "./Header.module.scss"


const Header = () => {
    return ( 
        <div className="container">
            <header className={style.header}>
            <div className={style.header__logo}>
            <img src={Logo} alt="food delivery" />
            </div>
            <div className={style.header__serch}>
                <Input />
            </div>
            <nav className={style.header__nav}>
                <ul className={style.header__ul}>
                    <li className={style.header__li}>
                        <Link to={'/'}>Restaurants</Link>
                    </li>
                    <li className={style.header__li}><Link to={'/'}>Deals</Link></li>
                    <li className={style.header__li}><Link to={'/'}>My orders</Link></li>
                </ul>
            </nav>
            <div className={style.header__btn}>
                <div className={style.headerBusket}>
                    <BoxIcon />
                    <div className={style.headerBusket__counter}>4</div>
                </div>
                <div className={style.header__profile}></div>
                <img src={Avatar} alt="avatar" />
            </div>

        <Link to={'/'}>Home              
       </Link> 
       <Link to={'/profile'}>Profile              
       </Link> 

       
       
            </header>

        </div>
        
    )
}

export default Header