import { useState } from "react";
import SpolerButton from "../SpollerButton/SpolerButton"
import "./parent.scss"

const Parent = (props) => {

    const [active, setActive] = useState(false);
    const onClickButton = () => {
        setActive(prev => !prev)
    }
    return (
        <>  
            <div className={active ? "catalog-description__item active" : "catalog-description__item"}>
                <SpolerButton active={active} text={props.name} cb={onClickButton}/>
                {props.children}
            </div>
        </>
    )
}


export default Parent;