import {Link} from "react-router-dom"
import CheckMlList from "../buttons/check-ml-list/check-ml-list";
import Button from "../buttons/button/Buttons";
import numberWithSpaces from "../buttons/numberWithSpace/numberWithSpace"

import {  useState, useEffect } from "react";
import CartModel from "../../models/cartModel";

import image from "./img/image.webp"

import "./card.scss"

const Card = ({
    data, 
    onChangeCardNumber, 
    onAddToCart
}) => {

    const {id,imageSrc,imageAlt, title, price, rating} = data
    const [valueMl, setValueMl] = useState(100);
    const [salePrice, setSalePrice] = useState(0);
    const onChangeValue = (value) => {
        setValueMl(value)
    }

    useEffect(() => {
        setSalePrice(Math.floor((price * valueMl) / 100));
    }, [price, valueMl]);

    const onClickButton = (e) => {
        e.preventDefault()
        let quantity = 1;
        const obj = new CartModel(
            id,
            imageSrc, 
            quantity,
            title,
            salePrice, 
            valueMl
        )
        onAddToCart(obj, id, valueMl)
    }
    return (
        <>
            <article  key={id} className="cart-item">
                <Link 
                    onClick={() => onChangeCardNumber(id)}
                    to="/card" 
                    className="cart-item__image">
                    <img loading="lazy"  src={imageSrc ? imageSrc : image} alt={imageAlt}/>
                </Link>
                
                <div className="cart-item__title">
                    <h3>{title}</h3>
                </div>
                <div className="cart-item__rating-this">
                    <div className="cart-item__star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 576 512">
                            <path fill="#BEAE97" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                        </svg>
                    </div>
                    <div className="cart-item__text">{rating}</div>
                </div>
                <form className="cart-item__form">
                    <div className="cart-item__sub-title">
                        <p>Объем мл.</p>
                    </div>
                    <div className="cart-item__labels">
                        <CheckMlList onChangeValue={onChangeValue} name={id} valueMl={valueMl}/>
                    </div>
                    <div className="cart-item__sum cart-sum">
                        <div className="cart-sum__cost">
                            <p>Стоимость:</p>
                        </div>
                        <div className="cart-sum__total">
                            <span value={salePrice}>{numberWithSpaces(salePrice)  + " ₴"}</span>
                        </div>
                    </div>
                    <div className="cart-item__button">
                        <Button onClickButton={onClickButton} />
                    </div>
                </form>
            </article>
        </>
    )
}



export default  Card;