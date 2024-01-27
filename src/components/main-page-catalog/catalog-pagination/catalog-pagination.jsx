
import "./catalog-pagination.scss";

const CatalogPagination = ({prevPage,nextPage, paginate, currentPage, data}) => {

    const displayPages = 4; // Number of buttons to display
    const getPageSubset = () => {
        const halfDisplay = Math.floor(displayPages / 2);
        const startPage = Math.max(1, currentPage - halfDisplay);
        const endPage = Math.min(data.length, startPage + displayPages - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };
    const pageSubset = getPageSubset();
    return (
        <div className="main-cart__pagination cart-pagination">
            <ul className="cart-pagination__list">
                <div className="cart-pagination__btn">
                    <button onClick={() => prevPage()} className="cart-pagination__button"><i className="fa-solid fa-chevron-left"></i></button>
                </div>
                    {
                        pageSubset.map((number, i) => (
                            <li key={i} className="cart-pagination__item">
                                <button className={currentPage === number ? "cart-pagination__link active" : "cart-pagination__link"} onClick={() => paginate(number)}>{number}</button>
                            </li>
                    ))
                }
                <div className="cart-pagination__btn">
                    <button onClick={() => nextPage()} className="cart-pagination__button"><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </ul>
        </div>
    );
    
}
/*
const Pagination = ({ data, currentPage, paginate, prevPage, nextPage }) => {
    const displayPages = 3; // Number of buttons to display
    const getPageSubset = () => {
    
        const halfDisplay = Math.floor(displayPages / 2);
    
        const startPage = Math.max(1, currentPage - halfDisplay);
    
        const endPage = Math.min(data.length, startPage + displayPages - 1);
    
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };
    const pageSubset = getPageSubset();
    return (
        <div className="main-cart__pagination cart-pagination">
            <ul className="cart-pagination__list">
                <div className="cart-pagination__btn">
                    <button onClick={() => prevPage()} className="cart-pagination__button"><i className="fa-solid fa-chevron-left"></i></button>
                </div>
                    {
                        pageSubset.map((number, i) => (
                            <li key={i} className="cart-pagination__item">
                                <button className={currentPage === number ? "cart-pagination__link active" : "cart-pagination__link"} onClick={() => paginate(number)}>{number}</button>
                            </li>
                    ))
                }
                <div className="cart-pagination__btn">
                    <button onClick={() => nextPage()} className="cart-pagination__button"><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </ul>
        </div>
    );
};
*/

/*
return (
        <>  
            <div className="main-cart__pagination cart-pagination">
                <ul className="cart-pagination__list">
                    <div className="cart-pagination__btn">
                        <button onClick={() => prevPage()}  className="cart-pagination__button"><i className="fa-solid fa-chevron-left"></i></button>
                    </div>
                    {
                        data.map((number, i) => (
                            <li key={i} className="cart-pagination__item">
                                <button className={currentPage === number ? "cart-pagination__link active" : "cart-pagination__link"} onClick={() => paginate(number)}>{number}</button>
                            </li> 
                        ))
                    }   
                    <div className="cart-pagination__btn">
					    <button onClick={() => nextPage()} className="cart-pagination__button"><i className="fa-solid fa-chevron-right"></i></button>
					</div>
                </ul>
			</div>
        </>
    )
*/
export default CatalogPagination;