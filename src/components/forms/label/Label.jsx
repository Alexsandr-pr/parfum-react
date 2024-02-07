
import "./Label.scss";

const Label = ({name, text ,value, type, children, setValue, required, disabled}) => {

    return (
        <label className="user-content__label input-block">
            <p className="user-content__text input-block__text">{text} <span>*</span></p>
            <input onChange={(e) => setValue(e.target.value)} disabled={disabled} value={value} name={name} autoComplete="on" type={type} className="user-content__input input-block__input" required={required}/>
            {children}
        </label>
    )
}

export default Label;
