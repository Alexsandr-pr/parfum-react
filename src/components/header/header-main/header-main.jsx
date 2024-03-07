import { lazy, useContext, useEffect, useState } from "react";
import { Context } from "../../../pages/myContext/MyContext";
import { NavLink, Link, useLocation } from "react-router-dom";

import HeaderLogo from "../header-logo/header-logo";
import carddesctop from "./img/cartdesctop.svg"
import userdesctop from "./img/userdesctop.svg"

import "./header-main.scss";

import  HeaderCatalogSelect  from "../header-catalog-select/header-catalog-select";
const HeaderSearchDesktop = lazy(() => import("../header-search/header-search-desktop/header-search-desktop"));
const HeaderSearchMobile =  lazy(() => import("../header-search/header-search-mobile/HeaderSearchMobile"));
const HeaderTop = lazy(() => import("../header-top/header-top"));
const HeaderMale = lazy(() => import("../header-male/header-male"));


const Header = () => {
    const [activeMobile, setActiveMobile] = useState( false );
    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(0)
    const {quantity} = useContext(Context)
    
    let scroll;
    let widt ;
    useEffect(() => {
        scroll = window.scrollY;
        setOffset(scroll)
        widt = window.innerWidth;
        setWidth(widt)
        window.addEventListener("scroll", () => {
            setOffset(window.scrollY)
        })
        window.addEventListener("resize", () => {
            setWidth(widt = window.innerWidth)
        })
    }, [])

    function changeActiveMobile () {
        setActiveMobile(activeMobile => !activeMobile)
    }

    const [active, setActive] = useState(false);
    const changeActive = () => {
        setActive(false);
    }
    const {pathname} = useLocation()

    useEffect(() => {
        setActiveMobile(false)
    }, [pathname])


    return (
        <>
            <header className={activeMobile ? "header fix-offset active" : "header fix-offset"}>
                <div className="header__container">
                    <div className="header__desktop">
                        {   width > 767.98 ? 
                            <div style={{'display' : (offset > 50) ? "none" :  'flex'}} className="header__top header-top">
                                <HeaderTop />
                            </div> : null
                        }
                        <div className="header__bottom header-bottom">
                            <Link to="/" className="header__logo">
                                <HeaderLogo/>
                            </Link>
                            <div className="header-bottom__form">
                                <div className="header-ds">
                                    <HeaderCatalogSelect active={active} setActive={setActive} changeActive={changeActive}/>
                                    <HeaderSearchDesktop/>
                                </div>
                            {
                                width < 767.98  &&     <>
                                                        <div onClick={changeActiveMobile} className="trigger-mobilke header-bottom__button">
                                                            <span  className="icon-menu">
                                                                <span></span>
                                                            </span>
                                                        </div>
                                                        <div className="header-search-mobile">
                                                            <HeaderSearchMobile/>
                                                        </div>
                                                    </>
                            }
                            </div>
                            <div className="header-bottom__items">
                                <NavLink to="/user" className="header-bottom__item">
                                    <img src={userdesctop} alt="User"/>
                                </NavLink>
                                <NavLink to="/cart" className="header-bottom__item header-bottom__item-2">
                                    <img src={carddesctop}  alt="Cart"/> 
                                    <span>{quantity}</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="header-hidden">
                        <Link to="/" className="header__logo-mobile">
                            <HeaderLogo/>
                        </Link>
                        <HeaderMale changeActive={() => setActiveMobile(false)}/>
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