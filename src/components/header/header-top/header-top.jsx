
import { NavLink } from "react-router-dom";


import "./header-top.scss"
import mouse from "./img/mouse-pointer.svg"
import phone from "./img/phone.svg"
const HeaderTop = () => {
    return (
        
        <>
            <button className="header-top__select"> 
            <span><img src={mouse} alt="mouse-pointer" /></span>
            Ваш город: Харьков</button>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item menu__item-mobile-2">
                        <NavLink to="/bonus" className="menu__link">Бонусы</NavLink>
                    </li>
                    <li className="menu__item menu__item-mobile-3">
                        <NavLink to="document" className="menu__link animated-text">Документация</NavLink>
                    </li>
                    <li className="menu__item menu__item-mobile-4">
                        <NavLink to="/about" className="menu__link">О нас</NavLink>
                    </li>
                    <li className="menu__item menu__item-mobile-1">
                        <a href='tel:79371367766' className="menu__link menu__link-tel">
                            <span>
                                <img src={phone} alt="phone" />
                            </span>(937) 136 - 77 - 66
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderTop;