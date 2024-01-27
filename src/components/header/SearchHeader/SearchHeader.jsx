
import { Link } from "react-router-dom";

import "./search-header.scss"
import { useContext } from "react";
import { Context } from "../../../pages/myContext/MyContext";


const SearchHeader = ({active, data, onResetValue}) => {

    const {onChangeCardNumber} = useContext(Context)
    
    const elements = data.slice(0, 4).map(item => {
        const {id, title} = item;
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
        <div  className={active ? "header-filters__search _active" : "header-filters__search"}>
            <ul className="filter__list">
                { Object.values(elements).length > 0 ? elements : <Replacemente/>}  
            </ul>
        </div>
    )
}

const Replacemente = () => {
    return(
        <li  className="filter__item">
            <p className="filter__link">"Такого товара не найдено"</p>
        </li>
        
    )
}

export default SearchHeader;