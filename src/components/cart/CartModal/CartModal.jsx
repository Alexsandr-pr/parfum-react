import { useContext, useEffect, useState } from "react";

import numberWithSpaces from "../../buttons/numberWithSpace/numberWithSpace";

import "./CartModal.scss"
import { Context } from "../../../pages/myContext/MyContext";


const CartModal = ({childrenLink, childrenPay, text}) => {
    
    const {dataCart, sale, allPrice} = useContext(Context);
    

    return (
        <div className="cart__block-right _container">
            <div className="cart__block">
                <div className="cart-modal">
                    <div className="cart-modal__item item-order">
                        <div className="item-order__title title-24">
                            <h3>
                                {dataCart.filter(item => item.order).length + " товаров на сумму:"}   
                            </h3>
                            <input type="text" disabled value={numberWithSpaces(allPrice) + " ₴"} readOnly/>
                        </div>
                        <ul className="item-order__list">
                            <li className="item-order__item">
                                <p>Доставка</p>
                                <p>{text}</p>
                            </li>
                            <li className="item-order__item">
                                <p>Скидка</p>
                                <p>{sale} баллов</p>
                            </li>
                            <li className="item-order__item">
                                <p>Кэшбэк</p>
                                <p>{Math.floor(allPrice / 100)} баллов</p>
                            </li> 
                            {
                                childrenPay
                            }           
                        </ul>
                        <p className="item-order__text">Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей политика конфиденциальности</p>
                        <div className="item-order__title title-24">
                            <h3>К оплате: </h3>
                            <input type="text" disabled value={((allPrice - sale) < 0 ? 0 : allPrice - sale) + " ₴"} readOnly/>
                        </div>
                        {
                            childrenLink
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal;