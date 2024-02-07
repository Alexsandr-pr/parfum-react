
import "./ParentModal.scss";
import closeImage from "./img/close.svg";

const ParentModal = ({active, onActive, children, close}) => {

    return (
        <div className={active ? "popap _active" : "popap"} >
            <div onClick={(e) => !close && onActive(e) }  className="popap__wrapper close">
                <div className="popap__body popap-retvit">
                    <button onClick={(e) => onActive(e)} style={{display: close ? "none" : "block"}} className="popap__close close"><img className="close" src={closeImage} alt="close" /></button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ParentModal;