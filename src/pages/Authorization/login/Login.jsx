import "../auth.scss"
import { useState } from "react"
import { login } from "../../../action/user";
import { useDispatch } from "react-redux";
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
  return (
    <>
        <div className="main__login-block login-block">
            <div className="login-block__container">
            <div className="login-block__item">
                <div className="login-block__title title-24">
                    <h3>Вход</h3>
                </div>
                <form className="login-block__form">
                    <label  className="login-block__label input-block">
                        <p className="login-block__text input-block__text">Имя пользователя или Email *</p>
                        <input 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" 
                        className="login-block__input input-block__input" 
                        required 
                        placeholder="Enter your email"/>
                    </label>
                    <label className="login-block__label input-block">
                        <p className="login-block__text input-block__text">Пароль <span>*</span></p>
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            id="password-login" 
                            name="password" 
                            autocomplete="off"  
                            type="password" 
                            className=" login-block__input input-block__input"
                            required/>
                        <div  data-password="password-login" className="password">
                            <img  src="@img/icon/password.svg" alt="password"/>
                        </div>
                    </label>
                    <div className="login-block__button button-add-to-cart-obol">
                        <button 
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
            </div>
        </div>

    </>
  )
}

/*
<ul className="re-catcha pol-list">
                        <li className="pol-list__item">
                            <label className="pol-list__label">
                                <input type="checkbox" required name="pol" className="pol-list__input"/>
                                <span className="pol-list__span"></span>
                                <p className="pol-list__p">Я не робот</p>
                            </label>
                        </li>
                    </ul>
                    <ul className="login-block__pol-list pol-list">
                        <li className="pol-list__item">
                            <label className="pol-list__label">
                                <input type="checkbox" name="pol" required className="pol-list__input"/>
                                <span className="pol-list__span"></span>
                                <p className="pol-list__p">Запомнить меня</p>
                            </label>
                        </li>
                    </ul>
*/

export default Login