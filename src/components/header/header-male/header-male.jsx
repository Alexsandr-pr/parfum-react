
import { Link } from "react-router-dom";


const HeaderMale = ({changeActive}) => {
    return (
        <>
            <ul  className="header-button__list">
                <li className="header-button__link">
                    <Link onClick={() => changeActive()} to="/male" className="header-button__item">Мужские</Link>
                </li>
                <li className="header-button__link">
                    <Link onClick={() => changeActive()} to="/registration" className="header-button__item ">Женские</Link>
                </li>
                <li className="header-button__link">
                    <Link onClick={() => changeActive()} to="/login" className="header-button__item">Унисекс</Link>
                </li> 
            </ul>
        </>
    )
}


export default HeaderMale;