

import "./range.scss";

const Range = () => {
    return (
        <>
            <div className="slider">
                <div className="progress">
                </div>
            </div>
            <div className="filter-range__slider">
                <input type="range" className="range-min" min="500" max="30000" defaultValue="7500"/>
                <input type="range" className="range-max" min="500" max="30000" defaultValue="22500"/>
            </div>
            <div className="filter-range__number">
                <span  className="min-range">от 7500 ₽</span>
                <span className="max-range"> 22500 ₽</span>
            </div>

        </>
    )
}


export default Range;