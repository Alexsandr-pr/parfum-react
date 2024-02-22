
import "./pol-list.scss"
import React from "react"


const PolList = ({onChangeRadioButton,polData}) => {
    const data = {
        female: "Женские",
        male: "Мужские",
        unisex: "Унисекс"
    }
    return (
        <ul className="filter-content__list pol-list filter-content-items">
            {
                polData.map(({name, count}) => {
                    return (
                        <li key={name} className="pol-list__item">
                            <label  className="pol-list__label">
                                <input 
                                    onClick={(e) => onChangeRadioButton(e)}
                                    defaultValue={name} 
                                    type="radio" 
                                    name="pol" 
                                    className="pol-list__input"
                                />
                                <span className="pol-list__span"></span>
                                <span className="pol-list__p">{data[name]} ({count})</span>
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default React.memo(PolList);