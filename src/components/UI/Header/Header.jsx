import { Link } from "react-router-dom";
import BoxIcon from "../../icons/BoxIcon";
import Avatar from "/src/assets/avatar.png";
import Logo from "/src/assets/logo.svg";
import SearchInput from "../SearchInput/SearchInput";

import style from "./Header.module.scss"


const Header = () => {
    return ( 
        <header className={style.header}>
            <div className={`container ${style.header__container}`}>
                <Link to={'/'} className={style.header__logo}>
                    <img src={Logo} alt="food delivery" />
                </Link>
                <div className={style.header__serch}>
                    <SearchInput />
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
                <div className={style.headerBusket}>
                    <BoxIcon />
                    <div className={style.headerBusket__counter}>4</div>
                </div>
                <Link to={'/profile'} className={style.header__profile}>
                    <img src={Avatar} alt="avatar" />
                </Link>
            </div>
                    
                

        

       
       
        </header>

        
        
    )
}

export default Header