
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../pages/myContext/MyContext";

import "./search-header.scss"

const SearchHeader = ({
    active,
    data, 
    onResetValue,
    isFocused
}) => {

    const {onChangeCardNumber} = useContext(Context)
    
    const elements = data.slice(0, 4).map(({id, title}) => {
        return (
            <li key={id} className="filter__item">
                <Link to="/card" onClick={() => {
                    onChangeCardNumber(id)
                    onResetValue()
                }} className="filter__link">{title}</Link>
            </li>
        )
    })
    
    return (
        isFocused ? <div  className={active ? "header-filters__search _active" : "header-filters__search"}>
                        <ul className="filter__list">
                            { Object.values(elements).length > 0 ? elements : <Replacemente/>}  
                        </ul>
                    </div> : null
    )
}

const Replacemente = () => {
    return(
        <li className="filter__item">
            <p className="filter__link">"Такого товара не найдено"</p>
        </li>
    )
}

export default SearchHeader;