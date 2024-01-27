

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
                        <div className="footer-body__item footer-body__item-2">
                            <ul className="footer-body__list">
                                <li className="footer-body__item">
                                    <a href="#" className="footer-body__link ">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <p>г. Астрахань: ул. Свердлова, 106;ул. <br/> Победы 55А, пав. 10.</p>
                                    </a>
                                </li>
                                <li className="footer-body__item">
                                    <a href="#" className="footer-body__link ">
                                        <i className="fa-solid fa-clock"></i>
                                        <p>Ежедневно с 9:00 до 18:00</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-body__item footer-body__item-2">
                            <ul className="footer-body__list">
                                <li className="footer-body__item">
                                    <a href="#" className="footer-body__link ">
                                        <i className="fa-brands fa-whatsapp"></i>
                                        <p>Мы в Whatsapp</p>
                                    </a>
                                </li>
                                <li className="footer-body__item">
                                    <a href="cart-order.html" className="footer-body__link ">
                                        <i className="fa-brands fa-telegram"></i>
                                        <p>Мы в Telegram</p>
                                    </a>
                                </li>
                                <li className="footer-body__item">
                                    <a href="mailto:parfumpomotivam@gmail.com" className="footer-body__link ">
                                        <i className="fa-regular fa-envelope"></i>
                                        <p>parfumpomotivam@gmail.com</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-body__item footer-body__item-3">
                            <ul className="footer-body__list">
                                <li className="footer-body__item">
                                    <a href="#" className="footer-body__link  ">
                                        <i className="fa-solid fa-building"></i>
                                        <p>ИП РАГИМОВА А.М.К. <br/>ИНН 510704693888</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__content">
                        <p>© Parfumpomotivam 2023</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;