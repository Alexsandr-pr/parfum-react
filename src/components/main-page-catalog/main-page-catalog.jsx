import { useState, useEffect, useRef } from "react";

import CatalogPagination from "./catalog-pagination/catalog-pagination";
import CatalogItems from "./catalog-items/catalog-items";
import CatalogFilter from "./catalog-filter/catalog-filter";
import Services from "../../services/service";
import Loading from "../../components/Loading/Loading";


import "./main-page-catalog.scss";

const Catalog = ({
    onChangeCardNumber, 
    onAddToCart
}) => {

    const service = new Services()
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    
    const onChangePageNumber = () => setCurrentPage(1)
    const nextPage = () => {
        currentPage === pageNumbers.length ?  setCurrentPage(1) : setCurrentPage(prev =>  prev + 1);
        scrollToElement()
    }


    const prevPage = () => {
        currentPage === 1 ? setCurrentPage(prev =>  prev = pageNumbers.length) : setCurrentPage(prev =>  prev - 1)
        scrollToElement()
    }

    const [countriesPerPage] = useState(12);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true);
        service.getAllCards()
            .then(res => setPosts(res))
            .then(() => {
                setLoading(false);
            })
    }, [])
    
    const [brands, setBrands] = useState([]);
    
    useEffect(() => {
        const brandMap = new Map();
        posts.forEach(item => {
            const brandName = item.brand;
            if (brandMap.has(brandName)) {
                brandMap.set(brandName, {
                count: brandMap.get(brandName).count + 1,
                check: false
                });
            } else {
                brandMap.set(brandName, { count: 1, check: false });
            }
        });
        setBrands(Array.from(brandMap, ([name, info]) => ({ name, ...info })));
    },[posts])
    const [polData, setPolData] = useState([])
    useEffect(() => {
        const genderMap = new Map();
        posts.forEach(item => {
            const gender = item.gender;
            if (genderMap.has(gender)) {
                genderMap.set(gender, {
                count: genderMap.get(gender).count + 1
            })} else {
                genderMap.set(gender, { count: 1 });
            }   
        });
        setPolData(Array.from(genderMap, ([name, info]) => ({ name, ...info })));
    }, [posts]);

    const [filter, setActiveButtonFilter] = useState("");

    const onChangeFilter = (name) => {
        setActiveButtonFilter(name);
    }

    const [sex, setSexFilter] = useState("");
    const onChangeRadioButton = (e) => setSexFilter(e.target.value)
    
    const onResetFilter = () => setSexFilter("");

    const onChangeFilterBrand = (id) => {
        const index = brands.findIndex(item => item.name === id)
        setBrands(prev => {
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
        setNewData(brands.filter(item => item.check))
    },[brands])

    const [filterPosts, setFilterPosts] = useState([]);
    
    const filterPost = (items, param) => { 
        switch(param) {
            case "last":
                return items.sort((a, b) => a.price - b.price).reverse();
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
            const filtersData = newData.map(({name}) => {
                return arr.filter(item => item.brand === name)
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

    const catalogRef = useRef(null)

    let offTop = catalogRef.current;

    useEffect(() => {
        offTop = catalogRef.current.offsetTop;
    },[currentPage])

    const scrollToElement = () => {
        offTop = catalogRef.current.offsetTop
        window.scrollTo({
            top: offTop - 100,
            behavior:"smooth"
        })
    }
    return (
        <>
            <section  className="main__cart main-cart">
                <div className="main-cart__container">
                    <div className="main-cart__body ">
                        <div ref={catalogRef} className="top-trigger-filter__title title-24">
                            <h2>Каталог</h2>
                        </div>
                        <CatalogFilter 
                            polData={polData}
                            onChangeFilterBrand={onChangeFilterBrand}
                            data={brands}
                            onResetFilter={onResetFilter}
                            onChangeRadioButton={onChangeRadioButton}
                            filter={filter} 
                            onChangeFilter={onChangeFilter}
                            polList={posts}
                        />
                        {
                            !loading && <CatalogItems 
                                                onAddToCart={onAddToCart}
                                                onChangeCardNumber={onChangeCardNumber}
                                                currentCountry={currentCountry}  
                                            />	
                        }
                        { loading && <Loading/>}
                        <CatalogPagination 
                            scrollToElement={scrollToElement}
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