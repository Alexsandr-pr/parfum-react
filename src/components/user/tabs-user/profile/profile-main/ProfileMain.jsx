import { useState } from "react";

import LabelPassword from "../../../../forms/label-password/LabelPassword";
import Label from "../../../../forms/label/Label";
import Title from "../../../title/Title";
import Button from "../../../../buttons/button/Buttons"

const ProfileMain = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmPassword] = useState("");

    const changeDataUser = () => {

    }

    return (
        <>
                <Title title={"Детали профиля"}/>
                <form className="user-content__form ">
                    <div className="user-content__form-items">
                        <Label setValue={setName} value={name} name={"name"} text={"Имя"} type={"text"}/>
                        <Label setValue={setSurname} value={surname} name={"surname"} text={"Фамилия"} type={"text"}/>
                    </div>
                        <Label setValue={setEmail}  required value={email} type={"email"} name={"email"} text={"Email"}/>
                    <div className="user-content__text">
                        <p>Смена пароля</p>
                    </div>
                    <div className="login-block__label">
                        <LabelPassword  
                            value={password}   
                            setValue={setPassword}  
                            text={"Действующий пароль (не заполняйте, чтобы оставить прежний)"} 
                            name={"password-active"}
                        />
                    </div>
                    <div className="login-block__label">
                        <LabelPassword  
                            setValue={setNewPassword}  
                            text={"Новый пароль (не заполняйте, чтобы оставить прежний)"} 
                            name={"new-password"}
                            value={newPassword}
                        />
                    </div>
                    <div className="login-block__label">
                        <LabelPassword  
                            value={confirmNewPassword}   
                            setValue={setConfirmPassword}  
                            text={"Подтвердите новый пароль"} 
                            name={"confirmation-password"}
                        />
                    </div>   
                    <Button type={"submit"} onClickButton={(e) =>changeDataUser(e) } title={"Сохранить изменения"}/>
                </form>
        </>
    )
}

export default ProfileMain;