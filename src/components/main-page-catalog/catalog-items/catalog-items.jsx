
import Card from "../../card/card";
import "./catalog-items.scss";

const CatalogItems = ({currentCountry, loading, onChangeCardNumber, onAddToCart}) => {
    

    
    return ( 
        <div className="main-cart__content cart-content">
            <div className="cart-content__items">
                {
                    currentCountry.map(item => {
                        const {id} = item
                        return (
                            <Card  
                            onAddToCart={onAddToCart}
                            key={id}
                            onChangeCardNumber={onChangeCardNumber}
                            data={item}   
                            loading={loading}/>
                        )
                    })
                }
                
            </div>
		</div>
    )
}

export default CatalogItems;