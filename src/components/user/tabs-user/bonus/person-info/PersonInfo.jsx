

import user from "./img/user-photo.svg"

import "./progress-info.scss";

const PersonInfo = ({currentUser}) => {
    
    

    const {userSale, cachback, order} = currentUser;
    const orderLenght = Object.keys(order).length;

    let status = "";
    
    if(orderLenght < 5) {
        status = "Новый покупатель";
    } else if((orderLenght >= 5) && (orderLenght < 15)) {
        status = "Частый покупатель";
    } else if(orderLenght >= 15) {
        status = "Постоянный покупатель"
    }
    
    const styleAfter = {"width" : `${((orderLenght <=15 ? orderLenght : 15) / 15) * 100}%`};
    const styleBefore = {"left": `calc(${((orderLenght <=15 ? orderLenght : 15) / 15) * 100}% - 4px)` }
    return (
        <>
                <div className="user-content__person person-info">
                    <div className="person-info__body">
                        <div className="person-info__content">
                            <div className="person-info__content-item">
                                <p>Ваш статус:</p>
                                <p>{status}</p>
                            </div>
                            <div className="person-info__content-item">
                                <p>Ваш кэшбек: </p>
                                <p>{cachback}%</p>
                            </div>
                            <div className="person-info__content-item">
                                <p>Баллов сейчас: </p>
                                <p>{userSale} баллов</p>
                            </div>
                        </div>
                        <div className="person-info__images">
                            <div className="person-info__img">
                                <img src={user} alt="user photo"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="person-info__progress">
                        <div className="progress__person">
                            <span style={styleAfter} className="after"></span>
                            <span style={styleBefore} className="before"></span>
                        </div>
                        <span title="Новый покупатель" className="person-info__span person-info__new"></span>
                        <span title="Частый покупатель" className="person-info__span person-info__often"></span>
                        <span title="Постоянный покупатель" className="person-info__span person-info__old"></span>
                    </div>
                </div>
        </>
    )
}

export default PersonInfo;