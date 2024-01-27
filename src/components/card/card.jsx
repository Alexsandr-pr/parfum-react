import {Link} from "react-router-dom"
import CheckMlList from "../buttons/check-ml-list/check-ml-list";
import Button from "../buttons/button/Buttons";
import numberWithSpaces from "../buttons/numberWithSpace/numberWithSpace"

import "./card.scss"
import {  useState } from "react";


const Card = ({data, onChangeCardNumber, onAddToCart}) => {
    const {id,imageSrc,imageAlt, title, price, rating} = data

    const [valueMl, setValueMl] = useState(100);
    const onChangeValue = (value) => {
        setValueMl(value)
    }

    let salePrice = Math.floor((price * valueMl) / 100)
    let quantity = 1
    const onClickButton = (e) => {
        e.preventDefault()
        onAddToCart({id,imageSrc, title, salePrice, valueMl, quantity}, id, valueMl)
    }

    return (
        <>
            <article  key={id} className="cart-item">
                <Link 
                    onClick={() => onChangeCardNumber(id)}
                    to="/card" 
                    className="cart-item__image">
                    <img src={imageSrc} alt={imageAlt}/>
                </Link>
                <div className="cart-item__title">
                    <h3>{title}</h3>
                </div>
                <div className="cart-item__rating-this">
                    <div className="cart-item__star"> <i className="fa-solid fa-star"></i></div>
                    <div className="cart-item__text">{rating}</div>
                </div>
                <form className="cart-item__form">
                    <div className="cart-item__sub-title">
                        <p>Объем мл.</p>
                    </div>
                    <div className="cart-item__labels">
                        <CheckMlList onChangeValue={onChangeValue} name={id} />
                    </div>
                    <div className="cart-item__sum cart-sum">
                        <div className="cart-sum__cost">
                            <p>Стоимость:</p>
                        </div>
                        <div className="cart-sum__total">
                            <span value={salePrice}>{numberWithSpaces(salePrice)  + " ₴"}</span>
                        </div>
                    </div>
                    <div  className="cart-item__button">
                        <Button onClickButton={onClickButton} />
                    </div>
                </form>
            </article>
        </>
    )
}



export default  Card;