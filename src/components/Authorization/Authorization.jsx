
import { useState } from "react";

import Registration from "./Registration"
import Login from "./Login"
import Title from "../user/title/Title";

import "./authorization.scss";

const Authorization = () => {
  
  const [registration, setRegistration] = useState(true);
  const [login, setLogin] = useState(false);

  return (
    <div>
        <div className="main__login-block login-block">
          <div className="login-block__container">
            <div className="login-block__body">
                <div className="login-block__tab-trigger">
                  <button onClick={() => {
                    setRegistration(true)
                    setLogin(false)
                  }}>
                    <Title title={"Registration"}/>
                  </button>
                  <button onClick={() => {
                    setLogin(true)
                    setRegistration(false)
                  }}>
                    <Title title={"Login"}/>
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