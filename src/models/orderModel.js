




class Order {
    constructor(name, surname, country, adress, locality, region, zip, tel, email, inscription, dataOrder, allPrice, completed, timeOrder) {
        this.name = name;
        this.surname = surname;
        this.country = country;
        this.adress = adress;
        this.locality = locality;
        this.region = region;
        this.zip = zip;
        this.tel = tel;
        this.email  = email;
        this.inscription = inscription;
        this.dataOrder = dataOrder;
        this.allPrice = allPrice;
        this.completed = completed;
        this.timeOrder = new Date();
    }
}

export default Order;