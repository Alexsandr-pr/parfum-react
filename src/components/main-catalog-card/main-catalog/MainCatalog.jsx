import { useState } from "react";


import numberWithSpace from "../../buttons/numberWithSpace/numberWithSpace"
import CheckMlList from "../../buttons/check-ml-list/check-ml-list";
import MainCurrent from "../../main-current/main-current"
import MainMore from "../main-more/main-more";
import Button from "../../buttons/button/Buttons";
import Title from "../../user/title/Title"
import "./main-catalog.scss";
import CartModel from "../../../models/cartModel";


const MainCatalog = ({
    post, 
    cardNumber, 
    onAddToCart, 
    setActive
}) => {

    const {id,imageSrc,imageAlt, title, price,description} = post;
    
    const [valueMl, setValueMl] = useState(100);

    const [current, setCurrent] = useState(1);

    const onChangeValue = (value) => setValueMl(value);

    const onChangeCurrent = (i) => {
        if(current >= 100) {
            return setCurrent(100)
        }
        if(current  <= 1 ) {
            setCurrent(1)
        }
        setCurrent(prev => prev + i)
    }

    let salePrice = (Math.floor((price * valueMl) / 100)) * current;
    let quantity = current;

    const onClickButton =  (e) => {
        e.preventDefault()
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
            <section className="main__catalog main-catalog ">
                <div className="main-catalog__graniza">
                    <div className="main-catalog__body">
                        <div className="main-catalog__image">
                            <img src={imageSrc} alt={imageAlt}/>
                        </div>
                        <div className="main-catalog__content">
                            <Title title={title}/>
                            
                            <form className="main-catalog__form">
                                <div className="main-catalog__sub-title">
                                    <p>Объем мл.</p>
                                </div>
                                <div className="main-catalog__labels ">
                                    <CheckMlList name={id} valueMl={valueMl} onChangeValue={onChangeValue}/>
                                </div>
                                <div className="main-catalog__current">
                                    <MainCurrent
                                        title={"Кол - во"}
                                        onChangeCurrent={onChangeCurrent}
                                        current={current} 
                                    />
                                </div>
                                <div className="main-catalog__item mobile-none">
                                    <div className="main-catalog__sum cart-sum mobile-440-desktop">
                                        <div className="cart-sum__cost ">
                                            <p>Стоимость:</p>
                                        </div>
                                        <div className="cart-sum__total">
                                            <span>{numberWithSpace(salePrice) + " ₴"}</span>
                                        </div>
                                    </div>
                                    <div className="main-catalog__button desktop-btn">
                                        <Button disabled={ current === 0 } onClickButton={onClickButton}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="main-catalog__item mobile-sum">
                        <div className="main-catalog__sum cart-sum mobile-440">
                            <div className="cart-sum__cost">
                                <p>Стоимость:</p>
                            </div>
                            <div className="cart-sum__total">
                                <span>{numberWithSpace(salePrice) + " ₴"}</span>
                            </div>
                        </div>
                        <div className="main-catalog__button">
                            <Button disabled={ current === 0 } onClickButton={onClickButton}/>
                        </div>
                    </div>
                    <MainMore setActive={setActive} cardNumber={cardNumber} description={description}/>
                </div>
            </section>
        </>
    )
}




export default MainCatalog;