import Label from "../label/Label";
import password from "./img/password.svg";
import passwordclose from "./img/password-close.svg";
import { memo, useState } from "react";

import "./label-password.scss"

const LabelPassword = memo(({
    name, 
    text, 
    setValue, 
    value
}) => {
    const [active, setType] = useState(true);
    const onChangeActive = () => setType(prev => !prev)
    return (
        <Label 
            value={value}
            setValue={setValue} 
            name={name} 
            text={text} 
            type={active ? "password" : "text"}
            >
            <a  className="password">
                <img 
                    loading="lazy"
                    onClick={() => onChangeActive()}  
                    className="password__before" 
                    src={active ? password : passwordclose}
                    alt="password"/>
            </a>
        </Label>
    )
})

export default LabelPassword;