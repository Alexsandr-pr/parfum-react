import { useState } from "react";
import "./header-catalog-select.scss";
import HeaderMale from "../header-male/header-male";





const HeaderCatalogSelect = () => {
    const [active, setActive] = useState(false)

    function toggleActive(){
        setActive((active) => !active);
    }
    return (
        
        <>
            <div className={ active ? "header-button active" : "header-button"}>
                <button onClick={toggleActive}  id="button-icon-menu" className="header-bottom__button ">
                    <span className="icon-menu">
                        <span></span>
                    </span>
                    <span className="icon-menu-text">Каталог</span>
                </button>
                <div className="header-button__block">
                    <HeaderMale/>
                </div>
            </div>
        </>
        
    )
}

export default HeaderCatalogSelect;