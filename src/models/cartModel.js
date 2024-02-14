

class CartModel {

    constructor(id, imageSrc, quantity ,title, salePrice, valueMl) {
        this.id = id;
        this.imageSrc = imageSrc;
        this.quantity = quantity ;
        this.title = title;
        this.salePrice = salePrice;
        this.valueMl = valueMl;
        this.order = true;
    }
    
}


export default CartModel;