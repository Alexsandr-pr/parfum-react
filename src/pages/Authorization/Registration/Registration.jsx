
import { useState } from "react";
import "../auth.scss"
import { registration } from "../../../action/user";


const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
      <>
        <div className="main__login-block login-block">
          <div className="login-block__container">
              <div className="login-block__item">
                  <div className="login-block__title title-24">
                      <h3>Регистрация</h3>
                  </div>
                  <form className="login-block__form">
                      <div className="login-block__text">
                          <p>При регистрации вы получите 100 бонусных баллов</p>
                      </div>
                      <label className="login-block__label input-block">
                          <p className="login-block__text input-block__text">Email <span>*</span></p>
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            name="email" 

                            type="email" 
                            className="login-block__input input-block__input" 
                            required />
                      </label>
                      <label className="login-block__label input-block">
                          <p className="login-block__text input-block__text">Password <span>*</span></p>
                          <input 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            name="password" 

                            type="password" 
                            className="login-block__input input-block__input" 
                            required />
                      </label>
                      
                      <div className="login-block__button button-add-to-cart-obol">
                          <div
                          onClick={(e) => {
                            e.preventDefault()
                            registration(email, password)
                          }}
                          
                          className="login-block__btn button-add-to-cart"><span>Регистрация</span></div>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      </>
    )
}

/*
<div className="login-block__text">
                          <p>Пол</p>
                      </div>

                      <div className="login-block__check check-button">
                          <label className="pol-list__label">
                              <input type="radio"  name="pol" value="female" className="pol-list__input"/>
                              <span className="pol-list__span"></span>
                              <p className="pol-list__p">Ж</p>
                          </label>
                          <label className="pol-list__label">
                              <input type="radio" name="pol" value="male" className="pol-list__input"/>
                              <span className="pol-list__span"></span>
                              <p className="pol-list__p">М</p>
                          </label>
                      </div>

                      <div className="login-block__text">
                          <p>Ссылка для установки нового пароля будет отправлена на ваш email</p>
                      </div>
                      <ul className="re-catcha pol-list">
                          <li className="pol-list__item">
                              <label className="pol-list__label">
                                  <input type="checkbox" required  className="pol-list__input"/>
                                  <span className="pol-list__span"></span>
                                  <p className="pol-list__p">Я не робот</p>
                              </label>
                          </li>
                      </ul>
                      <ul className="login-block__pol-list pol-list">
                          <li className="pol-list__item">
                              <label className="pol-list__label">
                                  <input type="checkbox" name="memory"  required className="pol-list__input"/>
                                  <span className="pol-list__span"></span>
                                  <p className="pol-list__p">Запомнить меня</p>
                              </label>
                          </li>
                      </ul>
*/
export default Registration;