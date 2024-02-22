
import { NavLink } from "react-router-dom";


import "./header-top.scss"

const HeaderTop = () => {

    return (
        <>
            <button className="header-top__select"> 
                
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={20} viewBox="0 0 448 512">
                        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/>
                    </svg>
                
                Ваш город: Харьков
            </button>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 512 512">
                                <path  d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z " />
                            </svg>
                            </span>(937) 136 - 77 - 66
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderTop;