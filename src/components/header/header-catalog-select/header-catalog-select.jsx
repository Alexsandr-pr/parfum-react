
import { Suspense, lazy, useEffect } from "react";

import "./header-catalog-select.scss";
import { useLocation } from "react-router-dom";

const HeaderMale = lazy(() => import("../header-male/header-male"));

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
                    <Suspense>
                        <HeaderMale  changeActive={changeActive}/>
                    </Suspense>
                </div>
            </div>
        </>
        
    )
}

export default HeaderCatalogSelect;