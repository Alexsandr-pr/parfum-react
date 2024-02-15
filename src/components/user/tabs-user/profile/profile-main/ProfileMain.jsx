import { useState } from "react";

import LabelPassword from "../../../../forms/label-password/LabelPassword";
import Title from "../../../title/Title";
import Button from "../../../../buttons/button/Buttons"
import { changeUserPassword } from "../../../../../action/user";
import {useDispatch} from "react-redux"
import ModalExit from "../../../../modals/ModalExit/ModalExit";

const ProfileMain = () => {
    const dispatch = useDispatch()

    const [text, setText] = useState("")

    const [activeModal, setActiveModal] = useState(false)

    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmPassword] = useState("");

    const changeDataUser = async () => {
        changeUserPassword(password, newPassword, dispatch)
            .then(res => {
                if(res.status === 200) {
                    console.log("Password has been change")
                } else {
                    setText("Произошла ошибка при изменении пароля, попробуйте повторить попытку.")
                }
                setActiveModal(true)
            })
            .finally(() => {
                setPassword("");
                setNewPassword("");
                setConfirmPassword("")
            })
    }

    return (
        <>
            <Title title={"Детали профиля"}/>
            <form className="user-content__form">
                <div className="user-content__text">
                    <p>Смена пароля</p>
                </div>
                <div className="login-block__label">
                    <LabelPassword  
                        value={password}   
                        setValue={setPassword}  
                        text={"Действующий пароль"} 
                        name={"password-active"}
                    />
                </div>
                <div className="login-block__label">
                    <LabelPassword  
                        setValue={setNewPassword}  
                        text={"Новый пароль"} 
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
                <Button type={"submit"} onClickButton={(e) => changeDataUser(e) } title={"Сохранить изменения"}/>
            </form>
            <ModalExit to={"/user"} text={text} cb={() => setActiveModal(false)} titleButton={"Назад"} titleH={"Нажмите чтобы вернуться назад."} active={activeModal} onActive={() => setActiveModal(false)}/>
        </>
    )
}

export default ProfileMain;