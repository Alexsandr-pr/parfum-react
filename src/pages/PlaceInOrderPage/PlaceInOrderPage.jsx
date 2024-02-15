import {  useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Label from "../../components/forms/label/Label";
import ParentModal from "../../components/modals/parent-modal/ParentModal";
import ModalOrder from "../../components/modals/modalOrder/ModalOrder";
import CartModal from "../../components/cart/CartModal/CartModal";
import { useContext } from "react";
import { Context } from "../myContext/MyContext";
import { addOrderMongoUser } from "../../action/user";
import { useSelector } from "react-redux";

import BonusUser from "../../models/bonusModal";

import Order from "../../models/orderModel";

import "./place-in-order-page.scss";

const PlaceInOrderPage = () => {


    const {dataCart, setDataCart} = useContext(Context)
    const {sale} = useContext(Context)
    const currentUser = useSelector(state => state.user.currentUser)
    const isAuth = useSelector(state => state.user.isAuth);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [country, setCountry] = useState("");
    const [adress, setAdress] = useState("");
    const [locality, setLocality] = useState("");
    const [region, setRegion] = useState("");
    const [zip, setZip] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [inscription, setInscription] = useState("");

    const [disabled, setDisabled] = useState(false)
    const dataOrder = dataCart.filter(item => item.order);
    const {allPrice} = useContext(Context);

    const formData = async (e) => {
        e.preventDefault()
        if(Object.values(dataOrder).length > 0) {

            const completed = true;

            const obj = await new Order(
                name,
                surname,
                country, 
                adress, 
                locality, 
                region, 
                zip, 
                tel, 
                email, 
                inscription, 
                dataOrder, 
                allPrice, 
                completed,
            )
            let balls = Math.floor((allPrice * currentUser.cachback) / 100);
            let reason = "Покупки"
            
            if(!isAuth) {
                balls = 0;
            }
            const bonus = new BonusUser(balls, reason)
            
            addOrderMongoUser(obj, sale, currentUser.email, bonus );
        

            setName("");
            setSurname("");
            setCountry("");
            setAdress("");
            setLocality("");
            setRegion("");
            setZip("");
            setTel("");
            setEmail("");
            setInscription("");
            setDataCart([]);
            setActive(true);
            
        }
    }
    
    const [active, setActive] = useState(false);

    const onActive = (e) => {
        if(e.target.classList.contains("close")) {
            setActive(false)
        }
    }

    return (

        <>
            <Breadcrumbs page={"Оформление заказа"}/>
            <div className="main__cart-order cart-order">
                    <form onSubmit={(e) => formData(e)} id="form-order" className="cart-order__container">
                        <div className="cart-order__body">
                            <div className="user-content__title title-24">
                                <h2>Оплата и доставка</h2>
                            </div>
                            <div className="cart-order__form ">
                                <div className="cart-order__form-items">
                                    <Label setValue={setName} disabled={disabled} required value={name} type={"text"} name={"name"} text={"Имя"}/>
                                    <Label setValue={setSurname} disabled={disabled} required value={surname} type={"text"} name={"surname"} text={"Фамилия"}/>
                                </div>
                                <div className="cart-order__form-items">
                                    <Label setValue={setCountry} disabled={disabled}  required value={country} type={"text"} name={"country"} text={"Страна / регион"}/>
                                    <Label setValue={setAdress} disabled={disabled} required value={adress} type={"text"} name={"adress"} text={"Адрес"}/>
                                </div>
                                <div className="cart-order__form-items">
                                    <Label setValue={setLocality} disabled={disabled} required value={locality} type={"text"} name={"locality"} text={"Населённый пункт"}/>
                                    <Label setValue={setRegion} disabled={disabled} required value={region} type={"text"} name={"region"} text={"Область / район"}/>
                                </div>
                                <div className="cart-order__form-items">
                                    <Label setValue={setZip} disabled={disabled} required value={zip} type={"text"} name={"zip"} text={"Почтовый индекс"}/>
                                    <Label setValue={setTel} disabled={disabled} required value={tel} type={"tel"} name={"tel-phone"} text={"Телефон"}/>
                                </div>
                                    <Label setValue={setEmail} disabled={disabled} required value={email} type={"email"} name={"email"} text={"Email"}/>
                                <div className="cart-order__titles title-24">
                                    <h2>Детали заказа</h2>
                                </div>
                                <Label setValue={setInscription} disabled={disabled}  value={inscription} type={"text"} name={"inscription"} text={"Что бы вы хотели, чтобы мы написали на флаконе? (необязательно)"}/>
                            </div>
                        </div>
                        <CartModal 
                            text={"УКР Почта "}
                            childrenPay={
                                <li className="item-order__item">
                                    <p>Способ оплаты</p>
                                    <p>Наложенный платеж</p>
                                </li>
                            }
                            childrenLink={
                                <div className="button-add-body">
                                    <button onSubmit={(e) => formData(e)} type="submit" className="button-add-to-cart add"><span className="add">Подтвердить и оплатить заказ </span></button>
                                </div>
                            }
                        />
                    </form>
            </div> 
            <ParentModal onActive={onActive}  active={active} close={true}>
                <ModalOrder onActive={onActive} title={"Поздравляем! Заказ успешно оформлен!"} setActive={setActive}/>
            </ParentModal> 
        </>
    )
}

export default PlaceInOrderPage