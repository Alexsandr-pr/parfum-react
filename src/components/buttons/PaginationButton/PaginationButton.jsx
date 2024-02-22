
import "./pagination-button.scss"

const Parent = ({children, cb}) => {
    return (
        <button onClick={() => cb()} className="cart-pagination__button">
            {children}
        </button>
    )
}

export const PaginationButtonLeft = ({cb}) => {
    return (
        <Parent cb={cb}>
            <svg xmlns="http://www.w3.org/2000/svg"  width={20} height={20} viewBox="0 0 320 512">
                <path fill="BEAE97" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
            </svg>
        </Parent>
    )
}

export const PaginationButtonRight = ({cb}) => {
    return (
        <Parent cb={cb}>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 320 512">
                <path fil="BEAE97" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
        </Parent>
    )
}

