

import React from 'react'

const pol = [
    {
        name: "pol",
        value: "female",
        text: "Ж"
    },
    {
        name: "pol",
        value: "male",
        text: "М"
    }
]

const CheckedPol = ({setGender, gender}) => {

    return (
        <div className="login-block__check check-button">
            {
                pol.map(({name, text, value}) => {
                    return (
                        <label htmlFor={value} key={value} className="pol-list__label">
                            <input id={value} onChange={() => setGender(value)} readOnly checked={gender === value}  type="radio"  name={name} value={value} className="pol-list__input"/>
                            <span className="pol-list__span"></span>
                            <p className="pol-list__p">{text}</p>
                        </label>
                    )
                })
            }
        </div>
    )
}

export default CheckedPol