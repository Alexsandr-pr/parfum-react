
import {Link} from "react-router-dom"

import HeaderLogo from "../../header/header-logo/header-logo";

import "./footer-main.scss";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__logo">
                        <HeaderLogo/>
                    </div>
                    <div className="footer__body footer-body">
                        <div className="footer-body__item ">
                            <ul className="footer-body__list">
                                <li className="footer-body__item">
                                    <Link to="page-404" className="footer-body__link ">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <p>г. TYYY: ул. Свердлова, 7106;ул. <br/> 5095А, пав. 10.</p>
                                    </Link>
                                </li>
                                <li className="footer-body__item">
                                    <Link to="page-404" className="footer-body__link ">
                                        <i className="fa-solid fa-clock"></i>
                                        <p>Ежедневно с 9:00 до 18:00</p>
                                    </Link>
                                </li>
                                <li className="footer-body__item">
                                    <Link to="page-404" className="footer-body__link ">
                                        <i className="fa-brands fa-whatsapp"></i>
                                        <p>Мы в Whatsapp</p>
                                    </Link>
                                </li>
                                <li className="footer-body__item">
                                    <Link to="page-404" href="cart-order.html" className="footer-body__link ">
                                        <i className="fa-brands fa-telegram"></i>
                                        <p>Мы в Telegram</p>
                                    </Link>
                                </li>
                                <li className="footer-body__item">
                                    <a href="mailto:parfumpomotivam@gmail.com" className="footer-body__link ">
                                        <i className="fa-regular fa-envelope"></i>
                                        <p>parfumpomotivam@gmail.com</p>
                                    </a>
                                </li>
                                <li className="footer-body__item">
                                    <Link to="page-404" className="footer-body__link  ">
                                        <i className="fa-solid fa-building"></i>
                                        <p>ИП РАГИМОВА А.М.К. <br/>ИНН 510704693888</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="footer__content">
                        <p>© Parfumpomotivam 2023</p>
                        <Link to="politic">Политика конфиденциальности</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;