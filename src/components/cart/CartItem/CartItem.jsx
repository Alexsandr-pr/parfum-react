import { useEffect, useState } from "react";
import numberWithSpaces from "../../buttons/numberWithSpace/numberWithSpace"
import MainCurrent from "../../main-current/main-current";

import "./CartItem.scss"

const CartItem = ({data, onDeleteItemInCart, onChangeCurrentOnClick}) => {
    
    const {id,imageSrc, title, salePrice, valueMl, quantity} = data

    const [current, setCurrent] = useState(quantity);

    const onChangeCurrent = (i) => {

        if(current >= 100) {
            return setCurrent(100)
        }
        if(current  <= 1 ) {
            setCurrent(1)
        }
        setCurrent(prev => prev + i)
    }

    useEffect(() => {
        onChangeCurrentOnClick(current, id)
    }, [current])

    return (
        
            <div key={id} className="tovar-in-cart ">
                <div className="tovar-in-cart__body">
                    <div  className="tovar-in-cart__chek">
                        <label className="pol-list__label">
                            <input type="checkbox" name="check" className="pol-list__input"/>
                            <span className="pol-list__span"></span>
                        </label>
                    </div>
                    <div className="tovar-in-cart__image">
                        <img src={imageSrc} alt="Image"/>
                    </div>
                </div>  
                <div className="tovar-in-cart__info">
                    <div className="tovar-in-cart__header">
                        <h3 className="tovar-in-cart__title">{title},  {valueMl + " ml"} </h3>
                        <button onClick={() => onDeleteItemInCart(id, valueMl)} className="tovar-in-cart__delete">Удалить <i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="tovar-in-cart__slesh">
                        <span className="tovar-in-cart__input">{numberWithSpaces(salePrice * current) + " ₴"}</span>
                        <div className="tovar-in-cart__current ">  
                            <MainCurrent 
                                onChangeCurrent={onChangeCurrent} 
                                current={current}/>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default CartItem;