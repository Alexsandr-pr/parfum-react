import "./progress-info.scss";
import user from "./img/user-photo.svg"

const PersonInfo = () => {
    return (
        <>
                <div className="user-content__person person-info">
                    <div className="person-info__body">
                        <div className="person-info__content">
                            <div className="person-info__content-item">
                                <p>Ваш статус:</p>
                                <p> Новый покупатель</p>
                            </div>
                            <div className="person-info__content-item">
                                <p>Ваш кэшбек: </p>
                                <p>2%</p>
                            </div>
                            <div className="person-info__content-item">
                                <p>Баллов сейчас: </p>
                                <p>100 баллов</p>
                            </div>
                        </div>
                        <div className="person-info__images">
                            <div className="person-info__img">
                                <img src={user} alt="user photo"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="person-info__progress">
                        <div className="progress__person"></div>
                        <span title="Новый покупатель" className="person-info__span person-info__new"></span>
                        <span title="Частый покупатель" className="person-info__span person-info__often"></span>
                        <span title="Постоянный покупатель" className="person-info__span person-info__old"></span>
                    </div>
                </div>
        </>
    )
}

export default PersonInfo;