import Label from "../label/Label";
import password from "./img/password.svg";
import passwordclose from "./img/password-close.svg";
import "./label-password.scss"
import { useState } from "react";

const LabelPassword = ({name, text, setValue}) => {
    const [active, setType] = useState(true);

    const onChangeActive = () => {
        setType(prev => !prev)
    }

    return (
        <Label setValue={setValue} name={name} text={text} type={active ? "password" : "text"}>
            <a  className="password">
                <img onClick={() => onChangeActive()}  className="password__before" src={active ? password : passwordclose} alt="password"/>
            </a>
        </Label>
    )
}

export default LabelPassword;