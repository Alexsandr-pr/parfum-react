import { useState, useEffect } from "react";


import CatalogPagination from "./catalog-pagination/catalog-pagination";
import CatalogItems from "./catalog-items/catalog-items";
import CatalogFilter from "./catalog-filter/catalog-filter";
import Services from "../../services/service"

import "./main-page-catalog.scss"



const Catalog = ({onChangeCardNumber, onAddToCart}) => {
    
    const service = new Services()
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const onChangePageNumber = () => {
        setCurrentPage((1))
    }
    const nextPage = () => {
        if(currentPage === pageNumbers.length) {
            setCurrentPage(prev =>  prev = 1)
        } else {
            setCurrentPage(prev =>  prev + 1)
        }
    }
    const prevPage = () => {
        if(currentPage === 1) {
            setCurrentPage(prev =>  prev = pageNumbers.length)
        } else {
            setCurrentPage(prev =>  prev - 1)
        }
    }



    const [countriesPerPage] = useState(12);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:3001/posts")
            .then(res => res.json())
            .then(res => setPosts(res))
            .then(setLoading(false))
    }, [])


    const [filter, setActiveButtonFilter] = useState("");
    const onChangeFilter = (name) => {
        setActiveButtonFilter(name);
    }

    const [sex, setSexFilter] = useState("");
    const onChangeRadioButton = (e) => {
        setSexFilter(e.target.value)
    }
    const onResetFilter = () => {
        setSexFilter("");
    }

    

    const [dataBrand, setData] = useState([]);
    useEffect(() => {
        service.getAllBrands().then(res => setData(res))
    }, [])
    const onChangeFilterBrand = (id) => {
        const index = dataBrand.findIndex(item => item.id === id)
        setData(prev => {
            const updateData = prev.map((item, i) => {
                if(i === index) {
                    return {...item, check: !item.check}
                } else {
                    return item
                }
            })
            return updateData;
        })
    }

    const [newData, setNewData] =  useState([])
    useEffect(() => {
        const res = dataBrand.filter(item => item.check)
        setNewData(res)
    },[dataBrand])


    const [filterPosts, setFilterPosts] = useState([]);
    
    const filterPost = (items, param) => { 
        switch(param) {
            case "last":
                let newItems = items.sort((a, b) => a.price - b.price).reverse();
                return newItems
            case "popular": 
                return items.sort((a, b) => a.rating - b.rating );
            case "ascending": 
                return items.sort((a, b) => a.price - b.price );
            default:
                return items
        }
    }

    const onSexFilter = (items, sex) => {
        switch(sex) {
            case "female":
                return items.filter((item) => item.gender === "female");
            case "male": 
                return items.filter((item) => item.gender === "male");
            case "unisex": 
                return items.filter((item) => item.gender === "unisex");
            default:
                return items;
        }
    }

    const onChangeFilterCategory = () => {
        const filterAfter = filterPost(posts, filter)
        const before = onSexFilter(filterAfter, sex)
        const result = filters(before)
        setFilterPosts(result);
    }

    const filters = (arr) => {
        if(newData.length > 0) {
            const filtersData = newData.map(({id}) => {
                return arr.filter(item => item.brand === id)
            })
            const mergedArray = [].concat(...filtersData);
            return mergedArray
        } else {
            return arr
        }
    }

    useEffect(() => {
        onChangeFilterCategory();
        onChangePageNumber();
    },[ sex, filter, newData])


    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = filterPosts.length === 0 ? posts.slice(firstCountryIndex, lastCountryIndex) : filterPosts.slice(firstCountryIndex, lastCountryIndex);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const pageNumbers = []

    for(let i = 1; i < Math.ceil((filterPosts.length > 0 ? filterPosts.length : posts.length)/countriesPerPage) + 1; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <section className="main__cart main-cart">
                <div className="main-cart__container">
                    <div className="main-cart__body ">
                        <div className="top-trigger-filter__title title-24">
                            <h2 >Каталог</h2>
                        </div>
                        <CatalogFilter 
                            onChangeFilterBrand={onChangeFilterBrand}
                            data={dataBrand}
                            onResetFilter={onResetFilter}
                            onChangeRadioButton={onChangeRadioButton}
                            filter={filter} 
                            onChangeFilter={onChangeFilter}
                            polList={posts}
                        />
                        <CatalogItems 
                            onAddToCart={onAddToCart}
                            onChangeCardNumber={onChangeCardNumber}
                            currentCountry={currentCountry}  
                            loading={loading}
                        />	
                        <CatalogPagination 
                            nextPage={nextPage}
                            prevPage={prevPage}
                            currentPage={currentPage}           
                            data={pageNumbers}
                            paginate={paginate}
                        />
                    </div>
                </div>
			</section>
        </>
    )
}

export default Catalog;