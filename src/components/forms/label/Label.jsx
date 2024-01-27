

import "./Label.scss";


const Label = ({name, text , type, children}) => {

    return (
        <label className="user-content__label input-block">
            <p className="user-content__text input-block__text">{text} <span>*</span></p>
            <input  name={name} autoComplete="on" type={type} className="user-content__input input-block__input" required/>
            {children}
        </label>
    )
}

export default Label;