
import Parent from "../../../../buttons/parent/Parent";
import "./order-item.scss"

const OrderItem = () => {
    return (
        <>
            <div className="order-block__item">
                    <div className="order-block__header">
                        <div className="order-block__title">
                            <p>Заказ от <span>23.07.2023</span></p>
                        </div>
                        <div className="order-block__body">
                            <div className="order-block__sum">
                                <p>оплачено 3 890 ₽</p>
                            </div>
                            <button className="order-block__remove-order">Отменить</button>
                        </div>
                    </div>
                    <div className="order-block__content">
                        <div className="order-block__content-item">
                            <p>Доставка курьером:</p>
                            <p>В пути</p>
                        </div>
                        <div className="order-block__content-item">
                            <p>Ожидаемая дата: </p>
                            <p>2 августа</p>
                        </div>
                    </div>
                    <div className="order-block__booking order-booking">
                        <Parent name={"Состав заказа"}>
                            <div className="order-booking__content">
                                <div className="user-content__text">
                                    <p><span>1</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (10мл. Х 100 )</p>
                                    <p><span>2</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (10мл. Х 5 )</p>
                                    <p><span>3</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (30мл. Х 10 )</p>
                                </div>
                            </div>
                        </Parent>
                    </div>
                </div>
                <div className="order-block__item">
                    <div className="order-block__header">
                        <div className="order-block__title">
                            <p>Заказ от <span>23.07.2023</span></p>
                        </div>
                        <div className="order-block__body">
                            <div className="order-block__sum">
                                <p>оплачено 3 890 ₽</p>
                            </div>
                            <button className="order-block__remove-order">Отменить</button>
                        </div>
                    </div>
                    <div className="user-content__button">
                        <div className=" button-add-to-cart-obol">
                            <button type="submit" className="user-content__btn button-add-to-cart"><span>Оплатить</span></button>
                        </div>
                    </div>
                    <div className="order-block__content">
                        <div className="order-block__content-item">
                            <p>Доставка курьером:</p>
                            <p>Ожидает оплаты</p>
                        </div>
                        <div className="order-block__content-item">
                            <p>Ожидаемая дата: </p>
                            <p>2 августа</p>
                        </div>
                    </div>
                    <div data-spollers className="order-block__booking order-booking">
                        <Parent name={"Состав заказа"}>
                            <div className="order-booking__content">
                                <div className="user-content__text">
                                    <p><span>1</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (10мл. Х 100 )</p>
                                    <p><span>2</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (10мл. Х 5 )</p>
                                    <p><span>3</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (30мл. Х 10 )</p>
                                </div>
                            </div>
                        </Parent>
                    </div>
                </div>
                <div className="order-block__item">
                    <div className="order-block__header">
                        <div className="order-block__title">
                            <p>Заказ от <span>22.07.2023</span></p>
                        </div>
                        <div className="order-block__body">
                            <div className="order-block__sum">
                                <p>оплачено 5 890 ₽</p>
                            </div>
                            <button className="order-block__remove-order">Отменить</button>
                        </div>
                    </div>
                    <div className="order-block__content">
                        <div className="order-block__content-item">
                            <p>Доставка почтой:</p>
                            <p className="post__awaits">Ожидает на почте</p>
                        </div>
                        <div className="order-block__content-item">
                            <p>Срок хранения до:</p>
                            <p>29 июля</p>
                        </div>
                    </div>
                    <div data-spollers="" className="order-block__booking order-booking">
                        <Parent name={"Состав заказа"}>
                            <div className="order-booking__content">
                                <div className="user-content__text">
                                    <p><span>1</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (10мл. Х 100 )</p>
                                    <p><span>2</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (10мл. Х 5 )</p>
                                    <p><span>3</span>.Парфюм По Мотивам Arte Nouveau by Plum Impression (30мл. Х 10 )</p>
                                </div>
                            </div>
                        </Parent>
                    </div>
                </div>
        </>
    )
}

export default OrderItem;