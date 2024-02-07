import CartMain from "../../components/cart/CartMain/CartMain";


const CartTovar = ({dataCart, onDeleteItemInCart, onChangeCurrentOnClick, onToggleOrder}) => {
    
    return (
        <>
            <CartMain 
                onToggleOrder={onToggleOrder}
                onChangeCurrentOnClick={onChangeCurrentOnClick} 
                onDeleteItemInCart={onDeleteItemInCart} 
                dataCart={dataCart}/>
        </>
    )
}

export default CartTovar;