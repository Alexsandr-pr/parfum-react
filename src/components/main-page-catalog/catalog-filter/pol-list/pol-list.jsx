
import "./pol-list.scss"

const data = [
    {id:"female", title:"Женские (33) "},
    {id:"male", title:"Мужские (32)"},
    {id:"unisex", title:"Унисекс (13)"}
]
const PolList = ({onChangeRadioButton}) => {


    const elements = data.map(item => {
        const {id, title, checked} = item;
        return (
            <li key={id} className="pol-list__item">
                <label  className="pol-list__label">
                    <input 
                        onClick={(e) => onChangeRadioButton(e)}
                        defaultValue={id} 
                        type="radio" 
                        checked={checked}  
                        name="pol" 
                        className="pol-list__input"/>
                    <span className="pol-list__span"></span>
                    <span className="pol-list__p">{title} {}</span>
                </label>
            </li>
        )
    })
    return (
        <ul className="filter-content__list pol-list filter-content-items">
            {elements}
        </ul>
    )
}

export default PolList;