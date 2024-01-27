
import "./check-ml-list.scss";


const CheckMlList = ({name, onChangeValue}) => {

    return (
        <>
            <div className=" flacon-size">
                <label 
                    onChange={() => onChangeValue(10)}
                    tabIndex="0" className=" flacon-size__label">					
                    <input type="radio"  className=" flacon-size__input" name={name} value="10"/>
                    <span className=" flacon-size__input-span"></span>
                    <span className=" flacon-size__p">10</span>
                </label>
                <label 
                    onChange={() => onChangeValue(30)}
                    tabIndex="0" className=" flacon-size__label">					
                    <input type="radio"  className=" flacon-size__input" name={name} value="30"/>
                    <span className=" flacon-size__input-span"></span>
                    <span className=" flacon-size__p">30</span>
                </label>
                <label 
                    onChange={() => onChangeValue(50)}
                    tabIndex="0" className=" flacon-size__label">					
                    <input type="radio"  className=" flacon-size__input" name={name} value="50"/>
                    <span className=" flacon-size__input-span"></span>
                    <span className=" flacon-size__p">50</span>
                </label>
                <label 
                    onChange={() => onChangeValue(100)}
                    tabIndex="0" className=" flacon-size__label">					
                    <input type="radio" defaultChecked className=" flacon-size__input" name={name} value="100"/>
                    <span className=" flacon-size__input-span"></span>
                    <span className=" flacon-size__p">100</span>
                </label>
            </div>
        </>
    )
}

export default CheckMlList;