import { useState, useEffect } from "react"
import {useSelector} from "react-redux"
import { addUserAdress } from "../../../../../action/user"
import AdressModel from "../../../../../models/adressModel"

import Label from "../../../../forms/label/Label"
import Title from "../../../title/Title"

import "./adress-main.scss"

const AdressMain = () => {

    const adressCurrentUserBD = useSelector(state => state.user.currentUser.adress) || [];
    function convertToArr(obj) {
        let arr = [];
        for (let key in obj) {
            arr.push(obj[key]);
        }
        return arr;
    }
    
    const [adressUserDB, setAdressUserDB] = useState([])

    useEffect(() => {
        setAdressUserDB(convertToArr(adressCurrentUserBD))
    }, [])

    const [adress, setAdress] = useState(false);
    const [form, setForm] = useState(false);
    const [object, setObject] = useState({});
    const [timerId, setTimerId] = useState(false);

    const onChangeFormEditing = () => {
        setForm(true)
    }

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [country, setCountry] = useState("");
    const [adresss, setAdressS] = useState("");
    const [region, setRegion] = useState("");
    const [zip, setZip] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");

    
    const onCloseForm = () => setForm(false)

    const formData = async (e) => {
        e.preventDefault();
        await setObject(new AdressModel(name, surname, country, adresss, region, zip, tel, email));
        onCloseForm();
        setAdress(true);
        setTimerId(true);
        timer();    
    }

    useEffect(() => {
        if(Object.keys(object).length > 0) {
            addUserAdress(object, email);   
        }
    }, [object])

    const timer = () => {
        const timers = setInterval(() => {
            setTimerId(false)
            !timerId && clearInterval(timers)
        }, 3000)
    }

    

    return (
        <>
            <div className="user-content__add">
                <Title title={"Адрес"}/>
                <div className="user-content__text txt-14"> 
                    <p>Следующие адреса будут использованы при оформлении заказов по-умолчанию</p>
                </div>
                <div className="user-content__sub-title">
                    <h3>Платёжный адрес:</h3>
                </div>
                {
                    adressUserDB.length > 0  ? null : 
                        <div className="user-content__button">
                            <button onClick={() => onChangeFormEditing()} className="user-content__link">Добавить</button>
                        </div>
                }
            </div> 

            {
                form ? 
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
                        </form> : null
            }

            {   
                    (adressUserDB.length > 0) ? 
                    <div className="user-content__adress">
                        {
                            timerId ?  <SucsessMessage/> : null
                        }
                        <div className="user-content__text">
                            {
                                adressUserDB.map((item, i) => {
                                    const param = item + ","
                                    return (
                                        <p key={i}>{param}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="user-content__button">
                            <button onClick={() => onChangeFormEditing()}  className="user-content__link">Изменить</button>
                        </div>
                    </div> : null
                
            }
        </>
    )
}
const SucsessMessage = () => {
    return (
        <div className="user-content__block-info block-info">
            <div className="block-info__body">
                <div className="block-info__image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 11.0818V12.0018C21.9988 14.1582 21.3005 16.2565 20.0093 17.9836C18.7182 19.7108 16.9033 20.9743 14.8354 21.5857C12.7674 22.1971 10.5573 22.1237 8.53447 21.3764C6.51168 20.6291 4.78465 19.2479 3.61096 17.4389C2.43727 15.6299 1.87979 13.4899 2.02168 11.3381C2.16356 9.18638 2.99721 7.13814 4.39828 5.49889C5.79935 3.85964 7.69279 2.7172 9.79619 2.24196C11.8996 1.76673 14.1003 1.98415 16.07 2.86182" stroke="#BEAE97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#BEAE97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <p className="block-info__text">Адрес успешно изменен</p>  
            </div>
        </div>
    )
}
export default AdressMain;