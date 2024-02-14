
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
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="current__input" value={current} >{current}</span>
                    <button  disabled={current === 100} onClick={(e) => {
                        e.preventDefault()
                        onChangeCurrent(+1)
                    }} id="btn-plus" className="current__btn ">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>    
    )
}



export default MainCurrent;