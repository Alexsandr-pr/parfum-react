
import { useEffect, useState } from "react"
import { login } from "../../action/user";
import { useDispatch } from "react-redux";
import Label from "../forms/label/Label";
import LabelPassword from "../forms/label-password/LabelPassword";
import Title from "../user/title/Title";
import ParentModal from "../modals/parent-modal/ParentModal"
import ModalRe from "../modals/modal-re/ModalRe";

const Login = () => {
    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    
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
                    <ul className="re-catcha pol-list">
                        <li className="pol-list__item">
                            <label onClick={() => onActiveModal()} className="pol-list__label">
                                <input type="checkbox" required checked={checked} name="pol" className="pol-list__input"/>
                                <span className="pol-list__span"></span>
                                <p className="pol-list__p">Я не робот</p>
                            </label>
                        </li>
                    </ul>
                    <ul className="login-block__pol-list pol-list">
                        <li className="pol-list__item">
                            <label className="pol-list__label">
                                <input type="checkbox" name="pol"  className="pol-list__input"/>
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
                                dispatch(login(email, password))
                            }}
                            type="submit" 
                            className="login-block__btn button-add-to-cart"><span>Войти</span></button>
                    </div>
                    <a className="login-block__link" href="#">Забыли свой пароль?</a>
                </form>
            </div>
            <ParentModal active={active} close={true}>
                <ModalRe onActive={onActive} setSumm={setSumm} disabled={disabled} number1={number1} number2={number2} />
            </ParentModal>
        </>
    )
}


export default Login