
import "./ListToPageGender.scss";
const ListToPageGender = ({data, children}) => {
    return (
        <ul className="male__list">
            <li >
                {children}
            </li>
            {
                data.map(({id,text}) => {
                    return (
                        <li key={id} className="male__item">{text}</li>
                    )
                })
            }
        </ul>
    )
}

export default ListToPageGender;