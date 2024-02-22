import { Suspense } from "react";
import CartMain from "../../components/cart/CartMain/CartMain";


const CartTovar = ({
    dataCart, 
    onDeleteItemInCart, 
    onChangeCurrentOnClick, 
    onToggleOrder
}) => {
    
    return (
        <>
            <Suspense>
                <CartMain 
                    onToggleOrder={onToggleOrder}
                    onChangeCurrentOnClick={onChangeCurrentOnClick} 
                    onDeleteItemInCart={onDeleteItemInCart} 
                    dataCart={dataCart}
                />
            </Suspense>
        </>
    )
}

export default CartTovar;