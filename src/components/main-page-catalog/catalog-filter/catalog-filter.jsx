import React, { memo } from "react";

import { useState, useEffect } from "react";
import PolList from "./pol-list/pol-list";
import SearchList from "./search/search-list/search-list";
import SeacrhInput from "./search/search-input/search-input"
import FilterButton from "./filter-button/filter-button";
import SpolerButton from "../../buttons/SpollerButton/SpolerButton"


import close from "./img/close.svg"

import "./catalog-filter.scss";

const dataButton = [
    { name: "popular", label: "По популярности"},
    { name: "last", label: "Цена по убыванию"},
    { name: "ascending", label: "Цена по возрастанию"},
]


const CatalogFilter = ({
    onChangeFilter, 
    filter, 
    onChangeRadioButton, 
    onResetFilter, 
    polList, 
    data, 
    onChangeFilterBrand
}) => {
    const [inputValue, setSearchInput] = useState("");
    const [activeTab1, setActiveTab1] = useState(false);
    const [activeTab2, setActiveTab2] = useState(false);
    
    const [width, setWidth] = useState(0)

    let widt;
    useEffect(() => {
        widt = window.innerWidth;
        setWidth(widt)
        window.addEventListener("resize", () => {
            setWidth(widt = window.innerWidth)
        })
    },[])


    const onChangeActiveTab1 = () => {
        setActiveTab1(prev => !prev)
    }
    useEffect(() => {
        if(width < 567.98) activeTab1 && setActiveTab2(false)
    }, [activeTab1])
    const onChangeActiveTab2 = () => setActiveTab2(prev => !prev)

    useEffect(() => {
        if(width < 567.98) {
            if(activeTab2) {
                setActiveTab1(false)
            }
        }
    }, [activeTab2])
    
    const onChangeInputValue = (e) => setSearchInput(e.target.value)

    const onChangeFilterSelect = (data, value) => {
        if(value.lenght === 0) {
            return data;
        } else {
            return data.filter(item => {
                const lowerCaseName = item.name.toLowerCase();
                return lowerCaseName.includes(value.toLowerCase());
            })
        }
    }

    return (
        <div className="main-cart__top-trigger  top-trigger-filter">
            <div className={activeTab1 ? "top-trigger-filter__item _active filter" : "top-trigger-filter__item  filter"}>
                <SpolerButton active={activeTab1} text={"Фильтры"} cb={() => onChangeActiveTab1()}/>
                <div className="filter__content filter-content-1">
                    <form  className="filter-content__form">
                        <Parent  title={"Бренд"}>
                            <div className="filter-content__list filter-search filter-content-items">
                                <div className="filter-search__list search-list">
                                    <SeacrhInput onChangeInputValue={onChangeInputValue}/>
                                    <div className="search-list__body">
                                        <ul className="search-list__list list-search">
                                            <SearchList      
                                                onChangeFilterBrand={onChangeFilterBrand}
                                                data={onChangeFilterSelect(data, inputValue)}
                                            />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Parent>
                        <Parent  title={"Пол"}>
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
            <div >
                <FilterButton data={dataButton} setActiveFilter={onChangeActiveTab2} activeTab2={activeTab2} filter={filter} onChangeFilter={onChangeFilter}/>
            </div>
        </div>
    )
}

const Parent = memo(({children, title}) => {
    const [active, setActive] = useState(false);
    const onChangeActive = (e) => {
        e.preventDefault()
        setActive(prev => !prev)
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
})
export default React.memo(CatalogFilter);