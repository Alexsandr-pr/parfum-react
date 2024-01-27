
import "./main-current.scss"

const MainCurrent = ({ current, onChangeCurrent, children}) => {


    return (
            <div className="current">
                {children}
                <div className="current__body">
                    <div onClick={() => onChangeCurrent(-1)} id="btn-minus" className="current__btn ">
                        <i className="fa-solid fa-minus"></i>
                    </div>
                    <span   className="current__input" value={current} >{current}</span>
                    <div onClick={() => onChangeCurrent(+1)} id="btn-plus" className="current__btn ">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>    
    )
}



export default MainCurrent;