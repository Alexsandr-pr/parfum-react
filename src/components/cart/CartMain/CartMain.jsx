import Breadcrumbs from "../../breadcrumbs/BreadCrumbs";
import CartWindow from "../CartWindow/CartWindow";
import CartItem from "../CartItem/CartItem";
import CartModal from "../CartModal/CartModal";


import "./CartMain.scss"
import ParentFromReplace from "../../ParentFromReplace/ParentFromReplace";




const CartMain = ({dataCart, onDeleteItemInCart, onChangeCurrentOnClick}) => {
    
    
    
    return (
        <>
            <Breadcrumbs page={"Корзина"}/>
            <div className="main__items-in-cart items-in-cart">
                <div className="items-in-cart__container">
                    <div className="items-in-cart__label cart-preview">
                        <CartWindow/>
                        <div className="cart-preview__items">
                            {
                                Object.values(dataCart).length > 0 ?
                                dataCart.map(item => {  
                                    const {id, valueMl} = item                             
                                    return (
                                        <CartItem   onChangeCurrentOnClick={onChangeCurrentOnClick} key={id+valueMl} onDeleteItemInCart={onDeleteItemInCart} data={item}/>
                                    )
                                }) :    <ParentFromReplace>
                                            "Вперед к покупкам. Ваша корзина пуста!!"
                                        </ParentFromReplace>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            <CartModal dataCart={dataCart}/>
        </>
    )
}




export default CartMain;