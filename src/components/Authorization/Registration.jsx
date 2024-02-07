
import { useState, useEffect } from "react";
import { registration } from "../../action/user";
import Label from "../forms/label/Label";
import LabelPassword from "../forms/label-password/LabelPassword";
import Title from "../user/title/Title"
import ParentModal from "../modals/parent-modal/ParentModal";
import ModalRe from "../modals/modal-re/ModalRe";

const Registration = () => {
    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [active, setActive] = useState(false);
    const [number1, setNubmer1] = useState(0);
    const [number2, setNubmer2] = useState(0);
    const [summ, setSumm] = useState(0);
    const [disabled, setDisabled] = useState(true)

    function getRandomNumber() {
        return Math.floor(Math.random() * 51); 
    } 

    const onActive = (e) => {
        setActive(false)
        setNubmer1(0)
        setNubmer2(0)
        setSumm(0)
        setChecked(true)
    } 

    const onActiveModal = () => {
        !checked &&  setNubmer1(getRandomNumber())
        !checked &&  setNubmer2(getRandomNumber())
        !checked &&  setActive(true)
    }

    const onChangeSumm = () => {
        if(summ == number2 + number1 && summ !== 0) {
            setDisabled(false)
        }
    }
    useEffect(() => {
        onChangeSumm()
    }, [summ])






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
                            type={"email"} name={"email"} 
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
                    
                    <ul className="re-catcha pol-list">
                        <li className="pol-list__item">
                            <label onClick={() => onActiveModal()} className="pol-list__label">
                                <input type="checkbox" required checked={checked} name="pol" className="pol-list__input"/>
                                <span className="pol-list__span"></span>
                                <p className="pol-list__p">Я не робот</p>
                            </label>
                        </li>
                    </ul>
                    
                    <div className="login-block__button button-add-to-cart-obol">
                        <button
                        disabled={disabled}
                        onClick={(e) => {
                            e.preventDefault();
                            registration(email, password);
                            setPassword("");
                            setEmail("");
                            setChecked(false);
                            setDisabled(true);
                        }}
                        
                        className="login-block__btn button-add-to-cart"><span>Регистрация</span></button>
                    </div>
                </form>
            </div>
            <ParentModal active={active} close={true}>
                <ModalRe onActive={onActive} setSumm={setSumm} disabled={disabled} number1={number1} number2={number2} />
            </ParentModal>
        </>
    )
}

export default Registration;