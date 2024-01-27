import { useContext, useEffect, useState } from "react";
import HeaderLogo from "../header-logo/header-logo";
import HeaderCatalogSelect from "../header-catalog-select/header-catalog-select"
import HeaderSearchDesktop from "../header-search/header-search-desktop/header-search-desktop";
import HeaderSearchMobile from "../header-search/header-search-mobile/HeaderSearchMobile"

import "./header-main.scss";
import carddesctop from "./img/cartdesctop.svg"
import userdesctop from "./img/userdesctop.svg"

import { NavLink, Link } from "react-router-dom";
import HeaderTop from "../header-top/header-top";
import HeaderMale from "../header-male/header-male";
import { Context } from "../../../pages/myContext/MyContext";

const Header = () => {
    const [activeMobile, setActiveMobile] = useState( false );
    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(0)
    const {dataCart} = useContext(Context)
    
    let scroll;
    let widt ;
    useEffect(() => {
        scroll = window.scrollY;
        setOffset(scroll)
        widt = window.innerWidth;
        setWidth(widt)
        window.addEventListener("scroll", () => {
            scroll = window.scrollY
            setOffset(scroll)
        })
        window.addEventListener("resize", () => {
            widt = window.innerWidth;
            setWidth(widt)
        })
    }, [])

    function changeActiveMobile () {
        setActiveMobile( (activeMobile) => !activeMobile)
    }

    return (
        <>
            <header className={activeMobile ? "header fix-offset active" : "header fix-offset"}>
                <div className="header__container">
                    <div className="header__desktop">
                        {   width > 768 ? 
                            <div style={{'display' : (offset > 50) ? "none" :  'flex'}} className="header__top header-top">
                                <HeaderTop/>
                            </div> : null
                        }
                        
                        <div className="header__bottom header-bottom">
                            <Link to="/" className="header__logo">
                                <HeaderLogo/>
                            </Link>
                            <div className="header-bottom__form">
                                <div className="header-ds">
                                    <HeaderCatalogSelect/>
                                    <HeaderSearchDesktop/>
                                </div>
                                <div onClick={changeActiveMobile} className="trigger-mobilke header-bottom__button">
                                    <span  className="icon-menu">
                                        <span></span>
                                    </span>
                                </div>
                                <div className="header-search-mobile">
                                    <HeaderSearchMobile/>
                                </div>
                            </div>
                            <div className="header-bottom__items">
                                <NavLink to="/user" className="header-bottom__item">
                                    <img src={userdesctop} alt="User"/>
                                </NavLink>
                                <NavLink to="/cart" className="header-bottom__item header-bottom__item-2">
                                    <img src={carddesctop}  alt="Cart"/> 
                                    <span>{Object.values(dataCart).length}</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="header-hidden">
                        <Link to="/" className="header__logo-mobile">
                            <HeaderLogo/>
                        </Link>
                        <HeaderMale/>
                        <div className="header__menu-mobile">
                            <HeaderTop/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;