import { useEffect, useState } from "react"
import Label from "../../../../forms/label/Label"
import Title from "../../../title/Title"


import "./adress-main.scss"



const dataForm = [
    {name: "country", text: "Страна / регион", type: "text"},
    {name: "adress", text: "Адрес", type: "text"},
    {name: "locality", text: "Населённый пункт", type: "text"},
    {name: "region", text: " Область / район", type: "text"},
    {name: "index", text: "Почтовый индекс", type: "zip"},
    {name: "tel", text: "Телефон", type: "tel"},
    {name: "email", text: "Email", type: "email"},
]

class NewUser{
    constructor(object) {
        this.name = object.name;
        this.surname = object.surname
    }
}

const AdressMain = () => {
    const [adress, setAdress] = useState(false);
    const [form, setForm] = useState(false);
    const [object, setObject] = useState({});
    const [timerId, setTimerId] = useState(false)
    const onChangeFormEditing = () => {
        setForm(true)
    }

    const onCloseForm = () => {
        setForm(false)
    }
    const formData = (e) => {
        const forms = e.target
        e.preventDefault()
        const formData = new FormData(forms);
        formData.forEach(function(value, key) {
            object[key] = value
        });
        onCloseForm();
        setAdress(true)
        setTimerId(true)
        timer()
    }
    
    const timer = () => {
        const timers = setInterval(() => {
            setTimerId(false)
            if(!timerId) {
                clearInterval(timers)
            }
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
                    adress ? null : 
                        <div className="user-content__button">
                            <button onClick={() => onChangeFormEditing()} className="user-content__link">Добавить</button>
                        </div>
                }
            </div> 
            {
                form ? 
                        <form onSubmit={(e) => formData(e)}  className="user-content__form ">
                            <div className="user-content__form-items">
                                <Label  name={"name"} text={"Имя"} type={"text"}/>
                                <Label  name={"surname"} text={"Фамилия"} type={"text"}/>
                            </div>
                            {
                                dataForm.map(({name, text,type}, i) => {
                                    return (
                                        <Label key={i}  name={name} text={text} type={type}/>
                                    )
                                })
                            }
                            <div className="user-content__button">
                                <div className="button-add-to-cart-obol">
                                    <button  type="submit" className="user-content__btn button-add-to-cart"><span>Сохранить</span></button>
                                </div>
                            </div>
                        </form> : null
            }

            {   
                    ( Object.keys(object).length > 0) ? 
                    <div className="user-content__adress">
                        {
                            timerId ?  <SucsessMessage/> : null
                        }
                        <Adress data={object}/>
                        <div className="user-content__button">
                            <button onClick={() => onChangeFormEditing()}  className="user-content__link">Изменить</button>
                        </div>
                    </div> : null
                
            }
        </>
    )
}

const Adress = ({data}) => {
    return (
        <div className="adress-user__items">
            {
                Object.values(data).map((item, i) => {
                    const param = item + ","
                    return (
                        <p className="adress-user" key={i}>{param}</p> 
                    )
                })
            }
        </div>
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