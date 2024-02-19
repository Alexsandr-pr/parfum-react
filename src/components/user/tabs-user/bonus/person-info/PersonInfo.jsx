
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
    const onActive = (e) => {
        e.target.classList.contains("close") && setActive(false);
    } 

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

    const style = {"color": color ? "yellow" : "#36332E"}
    return (
        <i style={style} className="fa-solid fa-star"></i>
    )
}


export default PersonInfo;