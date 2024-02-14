
import closeImage from "./img/close.svg";

import "./ParentModal.scss";

const ParentModal = ({
    active, 
    onActive, 
    children, 
    close
}) => {
    /*
    const body = document.querySelector("body")
    const header = document.querySelector("header")

    body.style.cssText = `
        padding-right:${active ? '16px' : "0px"};
        overflow:${active ? "hidden" : ""};
    `

    header.style.cssText = `
        padding-right:${active ? '16px' : "0px"};
    `
*/
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