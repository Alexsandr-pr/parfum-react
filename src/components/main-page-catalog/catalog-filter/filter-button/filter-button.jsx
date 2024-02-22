import { memo } from "react";
import SpolerButton from "../../../buttons/SpollerButton/SpolerButton";

import "./filter-button.scss"

const FilterButton = memo((props) => {
    const {onChangeFilter, filter, setActiveFilter, activeTab2, data} = props
    let text = "По популярности";
    
    data.forEach(({name, label}) => name === filter ? text = label : null) 

    return (
        <div className={activeTab2 ? "top-trigger-filter__item _active filter-popular" : "top-trigger-filter__item filter-popular"}>
            <SpolerButton active={activeTab2} text={text} cb={() =>  setActiveFilter()}/>
            <div className="filter__content filter-content-2">
                <ul className="filter__list">
                    {
                        data.map(({name,label}) => {
                            const clazz = filter === name ?  "filter__item _active" : "filter__item";
                            return (
                                <li key={name} className={clazz}>
                                    <button 
                                        className="filter__link"
                                        onClick={() => onChangeFilter(name)}
                                    >
                                        {label}</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
} )

export default FilterButton;