import logodesctop from "./img/logo-desktop.webp";
import logomobile from "./img/logo-mobile.webp";

const HeaderLogo = () => {
    return (
        <picture>
            <source media="(min-width:768px)" srcSet={logodesctop} type="image/webp"/>
            <img src={logomobile} alt="Logo"/>
        </picture>
    )
}

export default HeaderLogo;