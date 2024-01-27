import { Link } from "react-router-dom";
import "./breadcrumbs.scss"

const Breadcrumbs = ({page}) => {
    return (
        <>
                <div className="main__breadcrumb breadcrumb">
                    <div className="breadcrumb__container">
                        <div className="breadcrumb__title title-30">
                            <h1>{page}</h1>
                        </div>
                        <ul className="breadcrumb__list">
                            <li className="breadcrumb__item">
                                <Link to="/" className="breadcrumb__link">Главная</Link>
                            </li>
                            <li className="breadcrumb__item">
                                <p className="breadcrumb__link">{page}</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default Breadcrumbs;