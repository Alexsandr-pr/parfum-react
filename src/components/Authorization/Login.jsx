
import { Suspense, lazy, useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import { login } from "../../action/user";

import Label from "../forms/label/Label";
import LabelPassword from "../forms/label-password/LabelPassword";
import Title from "../user/title/Title";

const Robots = lazy(() => import("../robots/Robots"))

const Login = () => {
    const dispatch = useDispatch()

    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [activeModalRobots, setActiveRobots] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const [remember, setRemember] = useState(false)

    const onChangeModalRobots = (arg) =>  setActiveRobots(arg)

    useEffect(() => {
        if(checked && email.length > 2  && password.length >= 3) {
            setDisabled(false);
        }
    }, [checked,email,password ])
    
    return (

        <>
            <div className="login-block__item">
                <Title title={"Вход"}/>
                <form className="login-block__form">
                    <div className="login-block__label">
                        <Label 
                            setValue={setEmail}  
                            required 
                            value={email} 
                            placeholder={"Enter your email"} 
                            type={"email"} name={"email"} 
                            text={"Имя пользователя или Email"}
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
                    <Suspense>
                        <Robots 
                            noActive={() => onChangeModalRobots(false)} 
                            setActive={() => onChangeModalRobots(true)} 
                            checked={checked}
                            active={activeModalRobots}
                            setChecked={setChecked}
                        />
                    </Suspense>
                    <ul className="login-block__pol-list pol-list">
                        <li className="pol-list__item">
                            <label className="pol-list__label">
                                <input type="checkbox" checked={remember} onChange={() => setRemember(prev => !prev)} className="pol-list__input"/>
                                <span className="pol-list__span"></span>
                                <p className="pol-list__p">Запомнить меня</p>
                            </label>
                        </li>
                    </ul>
                    <div className="login-block__button button-add-to-cart-obol">
                        <button 
                            disabled={disabled}
                            onClick={(e) => {
                                e.preventDefault()
                                dispatch(login(email, password, remember))
                            }}
                            type="submit" 
                            className="login-block__btn button-add-to-cart"><span>Войти</span></button>
                    </div>
                    <button type="button" className="login-block__link">Забыли свой пароль?</button>
                </form>
            </div>
        </>
    )
}


export default Login