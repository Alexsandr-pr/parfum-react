import { useSelector } from "react-redux"
import "./order-block.scss"



const OrderBlock = () => {
    const dataBallsChange = useSelector(state => state.user.currentUser.bonus) || [];
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    return (
        <>
            <div className="user-content__order-block order-block">
                {
                    dataBallsChange.map(({date, balls, reason}, i) =>  {

                        
                        const data = new Date(date)
                        const day = data.getDate();
                        const monthIndex = data.getMonth();
                        const year = data.getFullYear();

                        return (
                            <div key={i} className="order-block__item">
                                <div className="order-block__header">
                                    <div className="order-block__title">
                                        <span>{`${day} ${months[monthIndex]} ${year}`}</span>
                                    </div>
                                </div> 
                                <div className="order-block__content">
                                    <div className="order-block__content-item">
                                        <p>Баллы </p>
                                        <p>{"+" + balls}</p>
                                    </div>
                                    <div className="order-block__content-item">
                                        <p>Дата: </p>
                                        <p>{`${day} ${months[monthIndex]} ${year}`}</p>
                                    </div>
                                    <div className="order-block__content-item">
                                        <p>Причина: </p>
                                        <p> {reason}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="catalog-description__btn-add">
                    <button>Показать еще</button>
                </div>
            </div>
        </>
    )
}

export default OrderBlock