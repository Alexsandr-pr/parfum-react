

import "./filter-button.scss"

const data = [
    { name: "popular", label: "По популярности"},
    { name: "last", label: "Цена по убыванию"},
    { name: "ascending", label: "Цена по возрастанию"},
]

const FilterButton = ({onChangeFilter, filter, setActiveFilter, activeTab2}) => {

    let text = "По популярности";

    data.forEach(({name, label}) => name === filter ? text = label : null) 

    const elements = data.map(({name,label}) => {
        const clazz = filter === name ?  "filter__item _active" : "filter__item";
        return(
            <li key={name} className={clazz}>
                <button 
                    className="filter__link"
                    onClick={() => onChangeFilter(name)}
                >
                    {label}</button>
            </li>
        )
    })


    return (
        <div className={activeTab2 ? "top-trigger-filter__item _active filter-popular" : "top-trigger-filter__item filter-popular"}>
            <div  className="filter__button">
                <button onClick={ () => {
                    setActiveFilter()
                }} className="filter__btn filter__btn-popular"><p>{text}</p> <span><i className="fa-solid fa-chevron-up"></i></span></button>
            </div>
            <div className="filter__content filter-content-2">
                <ul className="filter__list">
                    {elements}
                </ul>
            </div>
        </div>
    )
}

export default FilterButton;