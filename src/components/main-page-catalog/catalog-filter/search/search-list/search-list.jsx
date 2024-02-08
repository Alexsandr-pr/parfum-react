

import "./search-list.scss"

const SearchList = ({data, onChangeFilterBrand}) => {
    return (
        <>
            {
                data.map(({id, title, check}) => {
                    return (
                        <label key={id}
                            onChange={() => onChangeFilterBrand(id)}
                            className="list-search__label">
                            <input defaultChecked={check} type="checkbox" name={id} className="list-search__input"/>
                            <span className="list-search__span"></span>
                            <span className="list-search__p">{title}</span>
                        </label>    
                    )
                })
            }
        </>
    )
}

export default SearchList;