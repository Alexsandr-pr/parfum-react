import imagefon from "./img/imagefon.png"
import {Link} from "react-router-dom"
import Title from "../user/title/Title"
import "./main-cash.scss"

const MainCash = () => {
    return (
        <>
            <div className="main__cash main-cash">
                <div className="main-cash__container">
                    <div className="main-cash__title ">
                        <Title title={"Бонусы от покупок"}/>
                    </div>
                </div>
                <div className="main-cash__body cash-body">
                    <div className="cash-body__container">
                        <div className="cash-body__content">
                            <div className="cash-body__title">
                                <h2>Получайте кэшбэк за покупки</h2>
                            </div>
                            <div className="cash-body__sub-title">
                                <p>Бонусные баллы за регистрацию и покупки</p>
                            </div>
                            <Link to="/bonus" className="cash-body__buttons">
                                <div className="cash-body__button button-add-to-cart"><span>Узнать подробнее</span></div>
                            </Link>
                        </div>    
                    </div>
                    <div className="cash-body__image _ibg">
                        <img src={imagefon} alt="Image fon "/>
                    </div>
                </div>
			</div>
        </>
    )
}

export default MainCash;