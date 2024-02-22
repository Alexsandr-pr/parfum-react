
import { memo } from "react";
import "./spoler-button.scss";

const SpolerButton = memo(({cb, text, active}) => {
    
    return ( 
        <div className="filter__button">
            <button onClick={() => cb() } className="filter__btn ">
                <p>{text}</p> 
                <span  className={active ? "span active" : "span"}>
                    <svg  className="spoller__svg" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>
        </div>
    )
})

export default SpolerButton;