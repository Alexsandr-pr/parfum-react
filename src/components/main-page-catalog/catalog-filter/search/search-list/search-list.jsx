

import "./search-list.scss"

const SearchList = ({data, onChangeFilterBrand}) => {


    return (
        <>
            {
                data.map(item => {
                    const  {id} = item;
                    return (
                        <SearchItem key={id} onChangeFilterBrand={onChangeFilterBrand} item={item} /> 
                    )
                })
            }
        </>
    )
}

const SearchItem = ({ item, onChangeFilterBrand}) => {
    const {id, title, check} = item

    return (
        <label
            onChange={() => onChangeFilterBrand(id)}
            className="list-search__label">
            <input defaultChecked={check} type="checkbox" name={id} className="list-search__input"/>
            <span className="list-search__span"></span>
            <span className="list-search__p">{title}</span>
        </label>    
    )
}


export default SearchList;