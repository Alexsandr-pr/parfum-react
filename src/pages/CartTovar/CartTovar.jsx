import CartMain from "../../components/cart/CartMain/CartMain";


const CartTovar = ({dataCart, onDeleteItemInCart, onChangeCurrentOnClick}) => {
    return (
        <>
            <CartMain 
                
                onChangeCurrentOnClick={onChangeCurrentOnClick} 
                onDeleteItemInCart={onDeleteItemInCart} 
                dataCart={dataCart}/>
        </>
    )
}

export default CartTovar;