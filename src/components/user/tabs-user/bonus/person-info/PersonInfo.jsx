
import "./progress-info.scss";
import userDefault from "./img/user-default.png";
import ParentModal from "../../../../modals/parent-modal/ParentModal"
import ModalUploadAvatar from "../../../../modals/modalUploadAvatar/ModalUploadAvatar"
import {  useState } from "react";
import { API_URL } from "../../../../../config";

const PersonInfo = ({currentUser}) => {
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : userDefault;

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

    const [active, setActive] = useState(false);

    const onActive = (e) => e.target.classList.contains("close") && setActive(false);
    
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
                            <img onClick={(e) => setActive(e)} className="person-info__image" src={avatar} alt="user-photo" />
                            <span className="person-info__star-1">
                                <Star color={orderLenght > 5}/>
                            </span>
                            <span className="person-info__star-2">
                                <Star color={((orderLenght > 5) && (orderLenght <= 15))}/>
                            </span>
                            <span className="person-info__star-3">
                                <Star color={orderLenght >= 15}/>
                            </span>
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

                {
                    <ParentModal close={false} onActive={onActive} active={active}>
                        <ModalUploadAvatar onActive={onActive} setActive={setActive}/>
                    </ParentModal>
                }
        </>
    )
}

const Star = ({color}) => {
    return (
        <svg style={{display: "block"}} width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill={color ? "yellow" : "#36332E"} d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>
    )
}


export default PersonInfo;