

const Panel = ({onChangeTabs}) => {
    return (
        <div className="user-content__text">
            <p>Добро пожаловать, Elena!</p>
            <p>Из главной страницы аккаунта вы можете посмотреть <button onClick={() => onChangeTabs("order")}><u>ваши недавние заказы</u></button>, настроить <button onClick={() => onChangeTabs("adress")}><u>платежный адрес и адрес доставки</u></button>, а также <button onClick={() => onChangeTabs("details")}><u>изменить пароль и основную информацию</u></button></p>
        </div>
    )
}

export default Panel;