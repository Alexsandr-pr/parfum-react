
import { Link } from "react-router-dom";


const HeaderMale = () => {
    return (
        <>
            <ul  className="header-button__list">
                <li className="header-button__link">
                    <Link to="/male" className="header-button__item">Мужские</Link>
                </li>
                <li className="header-button__link">
                    <a href="/" className="header-button__item ">Женские</a>
                </li>
                <li className="header-button__link">
                    <a href="/" className="header-button__item">Унисекс</a>
                </li> 
            </ul>
        </>
    )
}


export default HeaderMale;