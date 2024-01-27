import logodesctop from "./img/logodesctop.svg";
import logomobile from "./img/logomobile.svg";

const HeaderLogo = () => {
    return (
        <picture>
            <source media="(min-width:768px )" srcSet={logodesctop} type="image/svg+xml"/>
            <source media="(max-width:767.98px)" srcSet={logomobile} type="image/svg+xml"/>
            <img src={logodesctop} alt="Logo"/>
        </picture>
    )
}

export default HeaderLogo;