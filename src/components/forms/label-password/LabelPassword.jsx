import Label from "../label/Label";
import password from "./img/password.svg";
import passwordclose from "./img/password-close.svg";
import "./label-password.scss"
import { useState } from "react";

const LabelPassword = ({name, text}) => {
    const [active, setType] = useState(true);

    const onChangeActive = () => {
        setType(prev => !prev)
    }

    return (
        <Label name={name} text={text} type={active ? "password" : "text"}>
            <button onClick={() => onChangeActive()}  className="password">
                <img  className="password__before" src={active ? password : passwordclose} alt="password"/>
            </button>
        </Label>
    )
}

export default LabelPassword;