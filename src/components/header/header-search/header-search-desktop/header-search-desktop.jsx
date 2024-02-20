import { useContext, useEffect, useState } from "react";

import Services from "../../../../services/service";
import SearchHeader from "../../SearchHeader/SearchHeader";

import search from "./img/search.svg";

import "./header-search-desktop.scss";
import { Context } from "../../../../pages/myContext/MyContext";

const HeaderSearchDesktop = () => {

    const {activeSearch, setActiveSearch} = useContext(Context)
    const [value, setValue] = useState("")

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    const onResetValue = () => {
        setValue("")
    }

    useEffect(() => {
        value.length > 0 ? setActiveSearch(true) : setActiveSearch(false)
    }, [value])

    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const service = new Services();

    useEffect(() => {
        service.getAllCards().then(res => {
            setData(res.map(({id, title}) => ({id, title})))
        })
    }, [])

    const onChangeFilter = (data, val) => { 
        if(val.lenght === 0) {
            return data;
        } else {
            return data.filter(item => {
                const lowerCaseName = item.title.toLowerCase();
                return lowerCaseName.includes(val.toLowerCase());
            })
        }
    }

    useEffect(() => {
        setFilterData(onChangeFilter(data, value))
    }, [value])

    return (
        <>  
            <div className="header-search-menu">
                <label className="header-bottom__label">
                    <input  
                            onChange={(e) => onChangeValue(e)} 
                            autoComplete="off" 
                            value={value} 
                            type="search" 
                            name="search" 
                            className="header-bottom__input" 
                            placeholder="Найти парфюм.."
                    />
                    <button className="header-bottom__search">
                        <img src={search} alt="Search"/>
                    </button>
                </label>
                <div className="header-search__list">
                    <SearchHeader 
                        
                        onResetValue={onResetValue} 
                        data={filterData} 
                        active={activeSearch}
                    />
                </div>
            </div>
            
        </>
    )
}

export default HeaderSearchDesktop;