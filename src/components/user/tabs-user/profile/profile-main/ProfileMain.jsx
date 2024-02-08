import LabelPassword from "../../../../forms/label-password/LabelPassword";
import Label from "../../../../forms/label/Label";
import Title from "../../../title/Title";
import { useState } from "react";

const ProfileMain = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");


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
                    <div className="user-content__button">
                        <div className="button-add-to-cart-obol">
                            <button type="submit" className="user-content__btn button-add-to-cart"><span>Сохранить изменения</span></button>
                        </div>
                    </div>
                </form>
        </>
    )
}

//<LabelPassword  text={"Действующий пароль (не заполняйте, чтобы оставить прежний)"} name={"password-active"}/>
//<LabelPassword  text={"Новый пароль (не заполняйте, чтобы оставить прежний)"} name={"new-password"}/>
//<LabelPassword  text={"Подтвердите новый пароль"} name={"confirmation-password"}/>
export default ProfileMain;