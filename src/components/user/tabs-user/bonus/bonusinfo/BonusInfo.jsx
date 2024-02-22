
import "./bonus-info.scss"

const BonusInfo = ({currentUser}) => {

    const {order} = currentUser;
    

    let style = {"maxWidth":"350px;"}
    let status = "Частый покупатель";
    let number = 5;
    let cachback = 2;
    const orderLenght = Object.keys(order).length;
    if(orderLenght >= 5) {
        number = 15;
        cachback = 3;
        status = "Постоянный покупатель";
    }

    return (
        <div  className="user-content__info">
            <div className="user-content__block-info block-info">
                <div className="block-info__body"> 
                    <p className="block-info__text"><span className="block-info-pok">{orderLenght} / {number}</span> покупок сделано</p>  
                </div>
            </div>
            {
                orderLenght < 15 ?   <div style={style} className="user-content__text ">
                                            <p>Чтобы получать кэшбек {cachback}% и статус «{status}», вам нужно сделать количество покупок {number}</p>
                                        </div> : null
            }
            
        </div>
    )
}

export default BonusInfo;