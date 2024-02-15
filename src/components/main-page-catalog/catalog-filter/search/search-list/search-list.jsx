

import "./search-list.scss"

const SearchList = ({data, onChangeFilterBrand}) => {
    return (
        <>
            {
                data.map(({name, count, check}) => {
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
        </>
    )
}

export default SearchList;