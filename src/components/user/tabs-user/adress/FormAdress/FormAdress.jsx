
import AdressModel from "../../../../../models/adressModel";
import { useState } from "react";
import Label from "../../../../forms/label/Label"


const FormAdress = ({setTimerId, onCloseForm, timer, setObject}) => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [country, setCountry] = useState("");
    const [adresss, setAdressS] = useState("");
    const [region, setRegion] = useState("");
    const [zip, setZip] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");

    const formData = (e) => {
        e.preventDefault();
        setObject(new AdressModel(name, surname, country, adresss, region, zip, tel, email));
        onCloseForm();
        setTimerId(true);
        timer();    
    }
    
    return (
        <form onSubmit={(e) => formData(e)}  className="user-content__form ">
            <div className="user-content__form-items">
                <Label setValue={setName} value={name} name={"name"} text={"Имя"} type={"text"}/>
                <Label setValue={setSurname} value={surname} name={"surname"} text={"Фамилия"} type={"text"}/>
            </div>
            <Label setValue={setCountry}  required value={country} type={"text"} name={"country"} text={"Страна / регион"}/>
            <Label setValue={setAdressS}  required value={adresss} type={"text"} name={"adress"} text={"Адрес"}/>
            <Label setValue={setRegion}  required value={region} type={"text"} name={"region"} text={"Область / район"}/>
            <Label setValue={setZip}  required value={zip} type={"text"} name={"zip"} text={"Почтовый индекс"}/>
            <Label setValue={setTel}  required value={tel} type={"tel"} name={"tel-phone"} text={"Телефон"}/>
            <Label setValue={setEmail}  required value={email} type={"email"} name={"email"} text={"Email"}/>
            
            <div className="user-content__button">
                <div className="button-add-to-cart-obol">
                    <button  type="submit" className="user-content__btn button-add-to-cart"><span>Сохранить</span></button>
                </div>
            </div>
        </form>
    )
}

export default FormAdress;