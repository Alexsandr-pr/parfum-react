import Breadcrumbs from "../../breadcrumbs/BreadCrumbs";
import CartWindow from "../CartWindow/CartWindow";
import CartItem from "../CartItem/CartItem";
import CartModal from "../CartModal/CartModal";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom"
import "./CartMain.scss"
import ParentFromReplace from "../../ParentFromReplace/ParentFromReplace";


const CartMain = ({
    dataCart, 
    onDeleteItemInCart, 
    onChangeCurrentOnClick, 
    onToggleOrder, 

}) => {

    const dataOrder = dataCart.filter(item => item.order)
    return (
        <>
            <Breadcrumbs page={"Корзина"}/>
            <div className="main__items-in-cart items-in-cart">
                <div className="items-in-cart__container">
                    <div className="items-in-cart__label cart-preview">
                        <CartWindow disabled={Object.values(dataOrder).length <= 0} />
                        <div className="cart-preview__items">
                            {
                                dataCart.length > 0 ?
                                dataCart.map(item => {  
                                    const {id, valueMl} = item      
                                                        
                                    return (
                                        <CartItem 
                                        onToggleOrder={onToggleOrder}  
                                        onChangeCurrentOnClick={onChangeCurrentOnClick} 
                                        key={id+valueMl} 
                                        onDeleteItemInCart={onDeleteItemInCart} 
                                        data={item}/>
                                    )
                                }) :    <ParentFromReplace>
                                            "Вперед к покупкам. Ваша корзина пуста!!"
                                        </ParentFromReplace>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            {
                dataCart.length > 0 && <CartModal 
                                            text={"Заказы до 10 000 ₽ доставим бесплатно в Ваш ближайший постамат. если в Вашем регионе их нет, то так же бесплатно доставим в Ваше отделение Почты России. Заказы свыше 10 000₽ доставим курьером до двери."}
                                            childrenLink={
                                                    <Link to="/order"  className="button-add-body">
                                                        <button disabled={Object.values(dataOrder).length <= 0} className="button-add-to-cart add"><span className="add">Оформить заказ</span></button>
                                                    </Link>
                                            }/>
            }
        </>
    )
}




export default CartMain;