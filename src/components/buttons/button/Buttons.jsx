

import { useState } from "react";

import image from "./img/grey-9026_128.gif";

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
                className="button-add-to-cart add"><span className="add">
                    {loading ? <Loading/> : text}
                    </span></button>
        </div>
    )
}

const Loading = () => {
    return (
        <img className="image-loading" src={image} alt="loading" />
    )
}



export default Button;
