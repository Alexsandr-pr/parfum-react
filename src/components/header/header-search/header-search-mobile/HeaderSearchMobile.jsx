
import HeaderSearchDesktop from "../header-search-desktop/header-search-desktop"
import search from "../header-search-desktop/img/search.svg"
import close from "../header-search-desktop/img/close.svg"

import "../header-search-desktop/header-search-desktop.scss"
import { useState } from "react"

const HeaderSearchMobile = () => {
    const [active, setActive] = useState(false)
    const onChangeActive = (e) => {
        e.preventDefault()
        setActive(prev => !prev)
    }

    return (
        <div className={active ? "header-search__content _active" : "header-search__content"}>
            <button onClick={(e) => onChangeActive(e)} className="header-bottom__item">
                <img src={active ? close : search} alt="search" />
            </button>
            <div className="header-search__body">
                <HeaderSearchDesktop/>
            </div>
        </div>
    )
}


export default HeaderSearchMobile