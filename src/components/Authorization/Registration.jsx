
import { useEffect, useState } from "react";
import BonusUser from "../../models/bonusModal";
import { registration } from "../../action/user";
import Label from "../forms/label/Label";
import LabelPassword from "../forms/label-password/LabelPassword";
import Title from "../user/title/Title"
import CheckedPol from "../forms/checked-pol/CheckedPol";
import ModalExit from "../modals/ModalExit/ModalExit";


import Robots from "../robots/Robots";
import LoadingButton from "../Loading/LoadingButton/LoadingButton";

const Registration = () => {
    const [modal, setModal] = useState(false)

    const [loading, setLoading] = useState(false)

    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male")
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true)

    const [activeModalRobots, setActiveRobots] = useState(false);

    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")

    const onChangeModalRobots = (arg) =>  setActiveRobots(arg)

    const registrationUser = (e) => {
        setLoading(true)
        setDisabled(true);
        e.preventDefault();
        const balls = 100;
        const reason = "Регистрация"
        const obj = new BonusUser(balls, reason)
        registration(email, password, gender, obj).then(res => {
                
                setTitle("Нажмите, чтобы вернуться назад")
                setMessage("Спасибо, что зарегистрировались.")
            }).catch((e) => {
                setTitle("Пользователь с таким email уже существует")
                setMessage("Ошибка!!!")
            }).finally(() => {
                setLoading(false)
                setModal(true)
                setPassword("");
                setEmail("");
                setChecked(false);
            })
    }

    const onActiveThank = () => {
        setModal(false)
    }

    useEffect(() => {
        if(checked && email.length > 2 && gender && password.length >= 3) {
            setDisabled(false);
        }
    }, [checked,email,gender,password ])

    return (
        <>
            <div className="login-block__item">
                <Title title={"Регистрация"}/>
                <form className="login-block__form">
                    <div className="login-block__text">
                        <p>При регистрации вы получите 100 бонусных баллов</p>
                    </div>
                    <div className="login-block__label">
                        <Label 
                            setValue={setEmail}  
                            required 
                            value={email} 
                            placeholder={"Enter your email"} 
                            type={"email"} 
                            name={"email"} 
                            text={"Email"}
                        /> 
                    </div>
                    <div className="login-block__label">
                        <LabelPassword 
                            value={password}   
                            setValue={setPassword} 
                            text={"Пароль"} 
                            name={"password"}
                        />
                    </div>
                    <div className="login-block__text">
                        <p>Пол</p>
                    </div>
                    <CheckedPol setGender={setGender} gender={gender}/>
                    <Robots 
                        setChecked={setChecked} 
                        noActive={() => onChangeModalRobots(false)} 
                        setActive={() => onChangeModalRobots(true)} 
                        checked={checked} 
                        active={activeModalRobots}
                    />
                    <div className="login-block__button button-add-body">
                        <button
                        disabled={disabled}
                        onClick={(e) => registrationUser(e)}
                        className="login-block__btn button-add-to-cart"><span>{loading ? <LoadingButton/>: "Регистрация"}</span></button>
                    </div>
                </form>
            </div>
            <ModalExit to={""} text={message} cb={onActiveThank} titleButton={"Назад"} titleH={title} active={modal} onActive={onActiveThank}/>
        </>
    )
}




export default Registration;