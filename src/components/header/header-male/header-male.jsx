
import { Link } from "react-router-dom";

const dataPage = [
    {
        to: "/male",
        page: "Мужские"
    },
    {
        to: "/female",
        page: "Женские"
    },
    {
        to: "/unisex",
        page: "Унисекс"
    }
]


const HeaderMale = ({changeActive}) => {
    return (
        <>
            <ul  className="header-button__list">
                {
                    dataPage.map(({to, page}, i ) => {
                        return (
                            <li key={i} className="header-button__link">
                                <Link onClick={() => changeActive()} to={to} className="header-button__item">{page}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}


export default HeaderMale;