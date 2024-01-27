import { useEffect, useState } from "react";
import Button from "../../buttons/button/Buttons";
import numberWithSpaces from "../../buttons/numberWithSpace/numberWithSpace";

import "./CartModal.scss"


const CartModal = ({dataCart}) => {

    const [saleUser, setSaleUser ] = useState(100)
    const [allPrice, setAllPrice] = useState(0)
    const [current, setTovarInCard] = useState(0);

    useEffect(() => {
        setTovarInCard(Object.values(dataCart).length)
    },[dataCart])

    let all = []
    const plusAllPrice = () => {
        dataCart.forEach(item => {
            const {salePrice} = item
            all.push(item.quantity * salePrice)
        })
        setAllPrice(all.reduce((a, b) => a + b, 0));
    }

    useEffect(() => {
        plusAllPrice()
    }, [dataCart])
    return (
        <div className="cart__block-right _container">
            <div className="cart__block">
                <div className="cart-modal">
                    <div className="cart-modal__item item-order">
                        <div className="item-order__title title-24">
                            <h3>
                                {current + " товаров на сумму:"}   
                            </h3>
                            <input type="text" disabled value={numberWithSpaces(allPrice) + " ₴"} readOnly/>
                        </div>
                        <ul className="item-order__list">
                            <li className="item-order__item">
                                <p>Доставка</p>
                                <p>Заказы до 10 000 ₽ доставим бесплатно в Ваш ближайший постамат. если в Вашем регионе их нет, то так же бесплатно доставим в Ваше отделение Почты России. Заказы свыше 10 000₽ доставим курьером до двери.</p>
                            </li>
                            <li className="item-order__item">
                                <p>Скидка</p>
                                <p>100 баллов</p>
                            </li>
                            <li className="item-order__item">
                                <p>Кэшбэк</p>
                                <p>460 баллов</p>
                            </li>            
                        </ul>
                        <p className="item-order__text">Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей политика конфиденциальности</p>
                        <div className="item-order__title title-24">
                            <h3>К оплате: </h3>
                            <input type="text" disabled value={((allPrice - saleUser) < 0 ? 0 : allPrice - saleUser) + " ₴"} readOnly/>
                        </div>
                        <Button type={'submit'} title={"Подтвердить и оплатить заказ"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartModal;