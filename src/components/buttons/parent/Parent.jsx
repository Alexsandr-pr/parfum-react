import { useState } from "react";

const Parent = (props) => {
    const [active, setActive] = useState(false);
    const onClickButton = () => {
        setActive(prev => !prev)
    }
    return (
        <>  
            <div className={active ? "catalog-description__item active" : "catalog-description__item"}>
                <div className="catalog-description__trigger filter__button ">
                    <button onClick={onClickButton} className="filter__btn filter__btn-popular"><p>{props.name}</p> <span><i className="fa-solid fa-chevron-up"></i></span></button>
                </div>
                {props.children}
            </div>
        </>
    )
}


export default Parent;