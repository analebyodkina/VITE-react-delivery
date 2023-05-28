import { Link } from "react-router-dom";
import BoxIcon from "../../icons/BoxIcon";
import Avatar from "/src/assets/avatar.png";
import Logo from "/src/assets/logo.svg";
import SearchInput from "../SearchInput/SearchInput";


import style from "./Header.module.scss"


const Header = () => {
  function navToggle() {
    
    var html = document.getElementById("html");
	  html.classList.toggle("overflow-y-hidden")
    var body = document.getElementById("body");
	  body.classList.toggle("overflow-y-hidden");
      var links = document.getElementById('headerUl');
      links.classList.toggle("active");    
  }
    return ( 
        <header className={style.header}>
            <div className={`container ${style.header__container}`}>
                <Link to={'/'} className={style.header__logo}>
                    <img src={Logo} alt="food delivery" />
                </Link>
                <div className={style.header__search}>
                    <SearchInput />
                </div>
                <nav className={style.header__nav}>
                    <ul className={style.header__ul} id='headerUl'>
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
                <div className={style.header__burger}>
                    <span className="material-symbols-outlined" onClick={navToggle}>
                    menu
                    </span>
                </div>
            </div>
       
        </header>

        
        
    )
}

export default Header