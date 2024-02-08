
import "./check-ml-list.scss";

const dataSize = [
    {value: 10},
    {value: 30},
    {value: 50},
    {value: 100},
]

const CheckMlList = ({name, onChangeValue, valueMl}) => {

    return (
        <>
            <div className=" flacon-size">
                {
                    dataSize.map(({value}) => {
                        return (
                            <label 
                                onChange={() => onChangeValue(value)}
                                tabIndex="0" className=" flacon-size__label">					
                                <input 
                                    type="radio"  
                                    className="flacon-size__input" 
                                    checked={value === valueMl} 
                                    name={name} 
                                    value={value}
                                />
                                <span className=" flacon-size__input-span"></span>
                                <span className=" flacon-size__p">{value}</span>
                            </label>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CheckMlList;