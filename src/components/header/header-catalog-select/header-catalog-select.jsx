
import { useEffect } from "react";
import HeaderMale from "../header-male/header-male";


import "./header-catalog-select.scss";
import { useLocation } from "react-router-dom";

const HeaderCatalogSelect = ({active, setActive, changeActive}) => {

    const toggleActive = () => {
        setActive(prev => !prev);
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setActive(false)
        })
    }, [])
    const {pathname} = useLocation();

    useEffect(() => {
        setActive(false)
    },[pathname])


    return (
        <>
            <div className={ active ? "header-button active" : "header-button"}>
                <button 
                    onClick={toggleActive}  
                    id="button-icon-menu" 
                    className="header-bottom__button"
                >
                    <span className="icon-menu">
                        <span></span>
                    </span>
                    <span className="icon-menu-text">Каталог</span>
                </button>
                <div className="header-button__block">
                    <HeaderMale  changeActive={changeActive}/>
                </div>
            </div>
        </>
        
    )
}

export default HeaderCatalogSelect;