
import "./main-current.scss"

const MainCurrent = ({ current, onChangeCurrent, children}) => {


    return (
            <div className="current">
                {children}
                <div className="current__body">
                    <button disabled={current === 1} onClick={(e) => {
                        e.preventDefault()
                        onChangeCurrent(-1)
                    }} id="btn-minus" className="current__btn ">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20" height={20} viewBox="0 0 448 512">
                            <path fill="BEAE97" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>
                    <span className="current__input" value={current} >{current}</span>
                    <button  disabled={current === 100} onClick={(e) => {
                        e.preventDefault()
                        onChangeCurrent(+1)
                    }} id="btn-plus" className="current__btn ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height={20} viewBox="0 0 448 512">
                            <path  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                        </svg>
                    </button>
                </div>
            </div>    
    )
}



export default MainCurrent;