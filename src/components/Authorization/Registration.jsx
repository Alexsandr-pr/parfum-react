
import { useEffect, useState } from "react";
import BonusUser from "../../models/bonusModal";
import { registration } from "../../action/user";
import Label from "../forms/label/Label";
import LabelPassword from "../forms/label-password/LabelPassword";
import Title from "../user/title/Title"
import CheckedPol from "../forms/checked-pol/CheckedPol";
import { useDispatch, useSelector } from "react-redux";
import ModalExit from "../modals/ModalExit/ModalExit";
import { modalTrueNoActive } from "../../reducers/userReducer";
import {modalNoActiveError} from "../../reducers/userReducer";
import Robots from "../robots/Robots";

const Registration = () => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.user.modal);
    const modalFalse = useSelector(state => state.user.modalFalse);

    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male")
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true)

    const [activeModalRobots, setActiveRobots] = useState(false);

    const onChangeModalRobots = (arg) =>  setActiveRobots(arg)

    const registrationUser = (e) => {
        e.preventDefault();
        const balls = 100;
        const reason = "Регистрация"
        const obj = new BonusUser(balls, reason)
        registration(email, password, gender, obj, dispatch );
        setPassword("");
        setEmail("");
        setChecked(false);
        setDisabled(true);
    }

    const onActiveThank = () => {
        dispatch(modalTrueNoActive())
    }
    
    const onActiveErrorModal = () => {
        dispatch(modalNoActiveError())
        setPassword("");
        setEmail("");
        setChecked(false);
        setDisabled(true);
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
                    <div className="login-block__button button-add-to-cart-obol">
                        <button
                        disabled={disabled}
                        onClick={(e) => registrationUser(e)}
                        className="login-block__btn button-add-to-cart"><span>Регистрация</span></button>
                    </div>
                </form>
            </div>
            {
                <ModalExit to={""} text={"Спасибо, что зарегистрировались."} cb={onActiveThank} titleButton={"Назад"} titleH={"Нажмите, чтобы вернуться назад"} active={modal} onActive={onActiveThank}/>
            }
            {
                <ModalExit to={""} text={"Ошибка!!!"} cb={onActiveErrorModal} titleButton={"Назад"} titleH={"Пользователь с таким email уже существует"} active={modalFalse} onActive={onActiveErrorModal}/>
            }
        </>
    )
}




export default Registration;