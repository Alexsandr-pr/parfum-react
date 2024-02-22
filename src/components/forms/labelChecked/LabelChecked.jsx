import { memo, useEffect, useState } from "react"

import "./label-checked.scss"

const LabelChecked = memo( ({
    onToggleOrder, 
    id, 
    value
}) => {
    const [check, setCheck] = useState(true)
    useEffect(() => {
        onToggleOrder(id, check, value)
    }, [check])

    return (
            <label 
                htmlFor={id + value} 
                className="pol-list__label"
            >
                <input 
                    id={id + value} 
                    onChange={() => setCheck(prev => !prev)}  
                    type="checkbox" 
                    name="check" 
                    checked={check} 
                    className="pol-list__input"
                />
                <span className="pol-list__span"></span>
            </label>
    )
})

export default LabelChecked;