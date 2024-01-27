import PolList from "./pol-list/pol-list";
import SearchList from "./search/search-list/search-list";
import SeacrhInput from "./search/search-input/search-input"
import FilterButton from "./filter-button/filter-button";

import { useState } from "react";

import "./catalog-filter.scss";
import close from "./img/close.svg"

const CatalogFilter = ({onChangeFilter, filter, onChangeRadioButton, onResetFilter, polList, data, onChangeFilterBrand}) => {
    const [ activeFilter, setActiveFilter] = useState(false);
    const [ inputValue, setSearchInput] = useState("");

    const onChangeInputValue = (e) => {
        setSearchInput(e.target.value)
    }

    const onChangeFilterSelect = (data, value) => {
        if(value.lenght === 0) {
            return data;
        }
        return data.filter(item => {
            return item.title.indexOf(value) > -1;
        })
    }

    const onChangeActive = () => {
        setActiveFilter((activeFilter) => !activeFilter)
    }

    return (
        <div className="main-cart__top-trigger  top-trigger-filter">
            <div className={activeFilter ? "top-trigger-filter__item _active filter" : "top-trigger-filter__item  filter"}>
                <div  className="filter__button ">
                    <button onClick={onChangeActive} className="filter__btn filter__btn-popular "><p className="">Фильтры</p> <span className=" "><i className="fa-solid fa-chevron-up"></i></span></button>
                </div>
                <div className="filter__content filter-content-1">
                    <form  className="filter-content__form">
                        <Parent title={"Бренд"}>
                            <div className="filter-content__list filter-search filter-content-items">
                                <div className="filter-search__list search-list">
                                    <SeacrhInput onChangeInputValue={onChangeInputValue}/>
                                    <div className="search-list__body">
                                        <ul className="search-list__list list-search">
                                            <SearchList      
                                                    onChangeFilterBrand={onChangeFilterBrand}
                                                    data={onChangeFilterSelect(data, inputValue)}/>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Parent>
                        <Parent title={"Пол"}>
                            <PolList
                                polList={polList} 
                                onChangeRadioButton={onChangeRadioButton}/>
                        </Parent>
                        <div className="filter-content__item">
                            <div className="filter-content__block-btn">
                                <button 
                                    onClick={() => onResetFilter()} 
                                    type="reset"
                                    className="filter-content__clear ">Сбросить 
                                    <span><img src={close} alt="close" /></span>
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="">
                <FilterButton filter={filter}  onChangeFilter={onChangeFilter}/>
            </div>
        </div>
    )
}

const Parent = ({children, title}) => {
    const [active, setAActive] = useState(false);
    const onChangeActive = (e) => {
        e.preventDefault()
        setAActive(prev => !prev)
    }

    return (
        <>
            <div className={active ?  "filter-content__item _active" :  "filter-content__item"}>
                <button onClick={(e) => onChangeActive(e)}  className="filter-content__trigger">
                    <p>{title}</p>
                    <span><i className="fa-solid fa-chevron-down"></i></span>
                </button>  
                {children}       
            </div>
        </>
    )
}
export default CatalogFilter;