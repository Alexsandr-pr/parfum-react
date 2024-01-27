
import "./ParentModal.scss";
import close from "./img/close.svg";

const ParentModal = ({active, onActive, children}) => {

    return (
        <div className={active ? "popap _active" : "popap"} >
            <div onClick={(e) => onActive(e)}  className="popap__wrapper popap__close">
                <div className="popap__body popap-retvit">
                    <button onClick={(e) => onActive(e)}  className="popap__close"><img className="popap__close" src={close} alt="close" /></button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ParentModal;