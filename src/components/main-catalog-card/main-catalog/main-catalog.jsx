import { useState } from "react";

import numberWithSpace from "../../buttons//numberWithSpace/numberWithSpace"
import CheckMlList from "../../buttons/check-ml-list/check-ml-list";
import MainCurrent from "../../main-current/main-current"
import MainMore from "../main-more/main-more";

import "./main-catalog.scss";

const MainCatalog = ({post, cardNumber, onActive, onAddToCart}) => {
    const {id,imageSrc,imageAlt, title, price,description} = post
    const [valueMl, setValueMl] = useState(100);
    const [current, setCurrent] = useState(2);

    const onChangeValue = (value) => {
        setValueMl(value)
    }

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
    let quantity = current
    const onClickButton = (e) => {
        e.preventDefault()
        onAddToCart({id,imageSrc, title, salePrice, valueMl, quantity}, id, valueMl)
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
                            <div className="main-catalog__title title-24">
                                <h2>{title}</h2>
                            </div>
                            <form className="main-catalog__form">
                                <div className="main-catalog__sub-title">
                                    <p>Объем мл.</p>
                                </div>
                                <div className="main-catalog__labels ">
                                    <CheckMlList name={id} onChangeValue={onChangeValue}/>
                                </div>
                                <div className="main-catalog__current">
                                    <MainCurrent
                                        title={"Кол - во"}
                                        onChangeCurrent={onChangeCurrent}
                                        current={current} 
                                        />
                                </div>
                                <div className="main-catalog__item">
                                    <div className="main-catalog__sum cart-sum">
                                        <div className="cart-sum__cost">
                                            <p>Стоимость:</p>
                                        </div>
                                        <div className="cart-sum__total">
                                            <span>{numberWithSpace(salePrice) + " ₴"}</span>
                                        </div>
                                    </div>
                                    <div className="main-catalog__button button-add-to-cart-obol">
                                        <button onClick={(e) => onClickButton(e)}  className="cart-item__btn button-add-to-cart"><span>в корзину</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <MainMore onActive={onActive} cardNumber={cardNumber} description={description}/>
                </div>
            </section>
        </>
    )
}


export default MainCatalog;