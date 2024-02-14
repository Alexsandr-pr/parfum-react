
import { useState } from "react";

import Registration from "./Registration"
import Login from "./Login"

import "./authorization.scss";

const Authorization = () => {
  
  const [registration, setRegistration] = useState(true);
  const [login, setLogin] = useState(false);

  const onActiveRegistration = () => {
      setRegistration(true)
      setLogin(false)
  }
  const onActiveLogin = () => {
    setLogin(true)
    setRegistration(false)    
  } 

  return (
    <div>
        <div className="main__login-block login-block">
          <div className="login-block__container">
            <div className="login-block__body">
                <div className="login-block__tab-trigger">
                  <button 
                    onClick={() => onActiveRegistration()} 
                    className={registration ? "button-add-to-cart _active" : "button-add-to-cart"}>
                    <span className="">Registration</span>
                  </button>
                  <button 
                    onClick={() => onActiveLogin()} 
                    className={login ? "button-add-to-cart _active" : "button-add-to-cart"}>
                    <span className="">Login</span>
                  </button>
                </div>
                <div className="login-block__tab-items">
                    <div className="login-block__tab">
                      {registration &&  <Registration/>}
                    </div>
                    <div className="login-block__tab">
                    {login &&   <Login/>}
                    </div>
                </div>
            </div>
              
          </div>
        </div>
    </div>
  )
}

export default Authorization