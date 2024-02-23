import { useState } from "react";
import LoadingButton from "../../Loading/LoadingButton/LoadingButton"

import "./buttons.scss";

const Button = ({
    title, 
    type, 
    onClickButton, 
    disabled
}) => {
    const [loading, setLoading] = useState(false)
    const onDisabled = () => {
        setLoading(true)
        timer()
    }

    const timer = () => {
        const timers = setInterval(() => {
            setLoading(false)
            !loading && clearInterval(timers)
        }, 300)
    }

    const text = title ? title : "в корзину";
    return (
        <div className="button-add-body">
            <button 

                disabled={loading || disabled}
                
                onClick={(e) => {
                    onClickButton(e)
                    onDisabled()
                }} 

                type={type ? type : null} 
                className="button-add-to-cart add">

                <span className="add">
                    {loading ? <LoadingButton/> : text}
                </span>
            </button>
        </div>
    )
}

export default Button;
