

import React from 'react'

const CheckedPol = () => {
    return (
        <div className="login-block__check check-button">
            <label className="pol-list__label">
                <input type="radio"  name="pol" value="female" className="pol-list__input"/>
                <span className="pol-list__span"></span>
                <p className="pol-list__p">Ж</p>
            </label>
            <label className="pol-list__label">
                <input type="radio" name="pol" value="male" className="pol-list__input"/>
                <span className="pol-list__span"></span>
                <p className="pol-list__p">М</p>
            </label>
        </div>
    )
}

export default CheckedPol