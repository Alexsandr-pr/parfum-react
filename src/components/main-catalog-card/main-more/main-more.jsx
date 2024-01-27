

import Reviews from "../description/reviews";
import Parent from "../../buttons/parent/Parent";

import "./main-more.scss"



const MainMore = ({description, reviews, cardNumber, onActive}) => {
    

    return (
        <div className="main-catalog__description catalog-description">
            <div  className="catalog-description__body">
                <Parent name={"Описание"}>
                    <div className="catalog-description__text catalog-description__content">
                        <p>{description}</p>
                    </div>
                </Parent>
                <Parent name={"Отзывы"}>
                    <div  className="catalog-description__content">
                        <div className="catalog-description__button">
                            <div className="button-add-to-cart-obol">
                                <button onClick={(e) => onActive(e)} id="review-add" className="button-add-to-cart"> <span>Оставить отзыв</span></button>
                            </div>
                        </div>
                        <Reviews cardNumber={cardNumber} />
                    </div>
                </Parent>
            </div>
        </div>
    )
}



export default MainMore;