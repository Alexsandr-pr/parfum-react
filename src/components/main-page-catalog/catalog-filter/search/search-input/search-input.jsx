
import search from "./img/search.svg"
import "./search-input.scss";

const SeacrhInput = ({onChangeInputValue}) => {
    return (
        <>
            <div className="search-list__item">
                <label  className="filter-search__label">
                    <input name={search} onChange={(e) => onChangeInputValue(e)} className="filter-search__input" type="search" placeholder="Найти ноты.."/>
                    <button className="filter-search__btn" type="submit">
                        <img src={search} alt="Search"/>
                    </button>
                </label>
            </div>
        </>
    )
}

export default SeacrhInput;