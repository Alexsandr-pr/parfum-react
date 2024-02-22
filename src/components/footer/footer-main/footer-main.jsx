
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
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height={20} viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                            </svg>
                                        </span>
                                        <p>г. TYYY: ул. Свердлова, 7106;ул. <br/> 5095А, пав. 10.</p>
                                    </Link>
                                </li>
                                <li className="footer-body__item">
                                    <Link to="page-404" className="footer-body__link ">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height={20} viewBox="0 0 512 512">
                                                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                                            </svg>
                                        </span>
                                        <p>Ежедневно с 9:00 до 18:00</p>
                                    </Link>
                                </li>
                                <li className="footer-body__item">
                                    <Link to="page-404" className="footer-body__link ">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg"  width="25px" height={20}  viewBox="0 0 448 512">
                                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                                            </svg>
                                        </span>
                                        <p>Мы в Whatsapp</p>
                                    </Link>
                                </li>
                                <li className="footer-body__item">
                                    <Link to="page-404" href="cart-order.html" className="footer-body__link ">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg"  width="25px" height={20}  viewBox="0 0 496 512">
                                                <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                                            </svg>
                                        </span>
                                        <p>Мы в Telegram</p>
                                    </Link>
                                </li>
                                <li className="footer-body__item">
                                    <a href="mailto:parfumpomotivam@gmail.com" className="footer-body__link ">
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg"  width="25px" height={20} viewBox="0 0 512 512">
                                            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                                        </svg>
                                        </span>
                                        <p>parfumpomotivam@gmail.com</p>
                                    </a>
                                </li>
                                <li className="footer-body__item">
                                    <Link to="page-404" className="footer-body__link  ">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height={20} viewBox="0 0 384 512">
                                            <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/>
                                        </svg>
                                    </span>
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