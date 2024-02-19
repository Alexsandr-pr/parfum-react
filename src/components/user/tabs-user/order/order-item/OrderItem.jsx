import { useState } from "react";

import Parent from "../../../../buttons/parent/Parent";
import numberWithSpaces from "../../../../buttons/numberWithSpace/numberWithSpace";
import "./order-item.scss"

const OrderItem = ({data}) => {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        
    const [numberOnShow, setNumberOnShow] = useState(3);
    const dataReverse = data.reverse();

    return (

        <>
            {
                dataReverse.map((item, i) => {
                    if(i >= numberOnShow)  {
                        return
                    }
                    const {completed, dataOrder, allPrice, timeOrder, tel} = item;
                    const data = new Date(timeOrder)
                    const day = data.getDate();
                    const monthIndex = data.getMonth();
                    const year = data.getFullYear();

                    return (
                        <div key={tel + allPrice + i} className="order-block__item">
                            <div className="order-block__header">
                                <div className="order-block__title">
                                    <p>Заказ от <span>{`${day} ${months[monthIndex]} ${year}`}</span></p>
                                </div>
                                <div className="order-block__body">
                                    <div className="order-block__sum">
                                        <p>оплачено {numberWithSpaces(allPrice) + " ₴"}</p>
                                    </div>                               
                                </div>
                            </div>
                            <div className="order-block__content">
                                <div className="order-block__content-item">
                                    <p>Доставка</p>
                                    <p className={completed ? "post__received" : null }>{completed ? "Получен" : "В пути"}</p>
                                </div>
                                <div className="order-block__content-item">
                                    <p>Дата доставки:</p>
                                    <p>{`${day} ${months[monthIndex]} ${year}`}</p>
                                </div>
                            </div>
                            <div data-spollers="" className="order-block__booking order-booking">
                                <Parent name={"Состав заказа"}>
                                    <div className="order-booking__content">
                                        {
                                            dataOrder.map((item, i) => {
                                                const {id,quantity, title, valueMl} = item;
                                                return (
                                                    <p key={id + valueMl}><span>{i + 1}</span> {title}: ( {valueMl + "ml"} <i className="fa-solid fa-xmark"></i> {quantity} )</p>
                                                )
                                            })
                                        }
                                    </div>
                                </Parent>   
                            </div>
                        </div>
                    )
                })
            }
            {
                numberOnShow < Object.keys(data).length ?
                    <div className="catalog-description__btn-add">
                        <button onClick={() => setNumberOnShow(prev => prev + 3) }>Показать еще</button>
                    </div> : null
            }
        </>
    )
}

export default OrderItem;