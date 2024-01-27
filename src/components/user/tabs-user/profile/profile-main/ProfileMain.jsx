import LabelPassword from "../../../../forms/label-password/LabelPassword";
import Label from "../../../../forms/label/Label";
import Title from "../../../title/Title";


const ProfileMain = () => {
    return (
        <>
                <Title title={"Детали профиля"}/>
                <form className="user-content__form ">
                    <div className="user-content__form-items">
                        <Label name={"name"} text={"Имя"} type={"text"}/>
                        <Label name={"surname"} text={"Фамилия"} type={"text"}/>
                    </div>
                    <Label name={"email"} text={"E-mail"} type={"email"}/>
                    <div className="user-content__text">
                        <p>Смена пароля</p>
                    </div>
                    <LabelPassword  text={"Действующий пароль (не заполняйте, чтобы оставить прежний)"} name={"password-active"}/>
                    <LabelPassword  text={"Новый пароль (не заполняйте, чтобы оставить прежний)"} name={"new-password"}/>
                    <LabelPassword  text={"Подтвердите новый пароль"} name={"confirmation-password"}/>
                    <div className="user-content__button">
                        <div className="button-add-to-cart-obol">
                            <button type="submit" className="user-content__btn button-add-to-cart"><span>Сохранить изменения</span></button>
                        </div>
                    </div>
                </form>
        </>
    )
}

export default ProfileMain;