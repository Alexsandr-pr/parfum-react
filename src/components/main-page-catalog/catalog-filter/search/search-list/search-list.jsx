import React from "react"
import "./search-list.scss"

const SearchList = ({data, onChangeFilterBrand}) => {
    
    return (
        <>
            {
                Object.keys(data).length > 0 && data.map(({name, count, check}) => {
                    return (
                        <label key={name}
                            onChange={() => onChangeFilterBrand(name)}
                            className="list-search__label">
                            <input defaultChecked={check} type="checkbox" name={name} className="list-search__input"/>
                            <span className="list-search__span"></span>
                            <span className="list-search__p">{name} ({count})</span>
                        </label>    
                    )
                })
            }
            {
                Object.keys(data).length <= 0  && <span className="list-search__p">"Не найдено"</span>
            }
        </>
    )
}
export default React.memo(SearchList);