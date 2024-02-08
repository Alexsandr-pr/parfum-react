import { useState } from "react";
import HeaderMale from "../header-male/header-male";


import "./header-catalog-select.scss";

const HeaderCatalogSelect = () => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(active => !active);
    }
    const changeActive = () => {
        setActive(false);
    }
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
                    <HeaderMale changeActive={changeActive}/>
                </div>
            </div>
        </>
        
    )
}

export default HeaderCatalogSelect;