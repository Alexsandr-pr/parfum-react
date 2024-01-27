import "./order-block.scss"


const data = [
    {data: "1.07.2023 21:05", balls: "100", reason: "Регистрация"},
    {data: "1.07.2023 21:05", balls: "180", reason: "Покупки"},
    {data: "1.07.2023 21:05", balls: "200", reason: "Отзыв"}
]

const OrderBlock = () => {
    return (
        <>
            <div className="user-content__order-block order-block">
                {
                    data.map(({data, balls, reason}, i) =>  {
                        return (
                            <div key={i} className="order-block__item">
                                <div className="order-block__header">
                                    <div className="order-block__title">
                                        <span>{data}</span>
                                    </div>
                                </div> 
                                <div className="order-block__content">
                                    <div className="order-block__content-item">
                                        <p>Баллы </p>
                                        <p>{"+" + balls}</p>
                                    </div>
                                    <div className="order-block__content-item">
                                        <p>Дата: </p>
                                        <p>{data}</p>
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