
import search from "./img/search.svg";
import Services from "../../../../services/service";

import { useEffect, useState } from "react";

import "./header-search-desktop.scss";
import SearchHeader from "../../SearchHeader/SearchHeader";

const HeaderSearchDesktop = () => {

    const [active, setActive] = useState(false)
    const [value, setValue] = useState("")

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    const onResetValue = () => {
        setValue("")
    }

    useEffect(() => {
        if(value.length > 0) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [value])

    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const service = new Services();

    useEffect(() => {
        service.getAllCards().then(res => {
            const data = res.map(item => {
                const {id, title} = item
                return {id, title}
            })
            setData(data)
        })
    }, [])

    const onChangeFilter = (data, val) => {
        if(val.length === 0) {
            return data;
        }
        return data.filter(item => {
            return item.title.indexOf(val) > -1;
        })
    }
    useEffect(() => {
        setFilterData(onChangeFilter(data, value))
    }, [value])

    return (
        <>  
            <div className="header-search-menu">
                <label className="header-bottom__label">
                        <input onChange={(e) => onChangeValue(e)} 
                        autoComplete="off" 
                        value={value} 
                        type="search" 
                        name="search" 
                        className="header-bottom__input" 
                        placeholder="Найти парфюм.."/>
                    <button className="header-bottom__search"><img src={search} alt="Search"/></button>
                </label>
                <div className="header-search__list">
                    <SearchHeader onResetValue={onResetValue} data={filterData} active={active}/>
                </div>
            </div>
            
        </>
    )
}

export default HeaderSearchDesktop;