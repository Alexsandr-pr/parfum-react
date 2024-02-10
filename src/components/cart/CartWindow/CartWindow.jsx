import { useContext, useEffect, useState } from "react";
import { Context } from "../../../pages/myContext/MyContext";
import {useSelector} from "react-redux";
import Button from "../../buttons/button/Buttons"
import Label from "../../forms/label/Label";


const CartWindow = ({disabled}) => {

    const saleCurrentUserBD = useSelector(state => state.user.currentUser.userSale) || 0;
    
    const [activeLabel, setActiveLabel] = useState(false)
    const {sale, setSale, onChangeSaleUser} = useContext(Context)
    
    const onAddForm = () => {
        setActiveLabel(prev => !prev)
    }

    return (
        <>  
                <div className="cart-preview__body">
                    <div className="cart-preview__header">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.40738 2.17618C2.67909 1.69535 3.28913 1.52582 3.76996 1.79753L5.73632 2.90866C6.21715 3.18036 6.38668 3.79041 6.11497 4.27124C5.84327 4.75207 5.23322 4.9216 4.7524 4.6499L2.78604 3.53876C2.30521 3.26706 2.13568 2.65701 2.40738 2.17618ZM33.592 2.1751C33.8643 2.65559 33.6955 3.26584 33.215 3.53815L31.2544 4.64928C30.7739 4.92158 30.1637 4.75282 29.8914 4.27233C29.6191 3.79184 29.7878 3.18158 30.2683 2.90928L32.229 1.79814C32.7094 1.52584 33.3197 1.69461 33.592 2.1751ZM0 11.0015C0 10.4492 0.447715 10.0015 1 10.0015H3.26664C3.81893 10.0015 4.26664 10.4492 4.26664 11.0015C4.26664 11.5538 3.81893 12.0015 3.26664 12.0015H1C0.447715 12.0015 0 11.5538 0 11.0015ZM31.7334 11.0015C31.7334 10.4492 32.1811 10.0015 32.7334 10.0015H35C35.5523 10.0015 36 10.4492 36 11.0015C36 11.5538 35.5523 12.0015 35 12.0015H32.7334C32.1811 12.0015 31.7334 11.5538 31.7334 11.0015ZM6.11497 17.7317C6.38668 18.2125 6.21715 18.8226 5.73632 19.0943L3.76996 20.2054C3.28913 20.4771 2.67909 20.3076 2.40738 19.8268C2.13568 19.3459 2.30521 18.7359 2.78604 18.4642L4.7524 17.3531C5.23322 17.0814 5.84327 17.2509 6.11497 17.7317ZM29.8914 17.7306C30.1637 17.2501 30.7739 17.0814 31.2544 17.3537L33.215 18.4648C33.6955 18.7371 33.8643 19.3474 33.592 19.8279C33.3197 20.3083 32.7094 20.4771 32.229 20.2048L30.2683 19.0937C29.7878 18.8214 29.6191 18.2111 29.8914 17.7306Z" fill="#645C4F"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M18 2C12.9003 2 8.80005 6.04801 8.80005 11C8.80005 15.952 12.9003 20 18 20C23.0998 20 27.2001 15.952 27.2001 11C27.2001 6.04801 23.0998 2 18 2ZM6.80005 11C6.80005 4.90629 11.8332 0 18 0C24.1669 0 29.2001 4.90629 29.2001 11C29.2001 17.0937 24.1669 22 18 22C11.8332 22 6.80005 17.0937 6.80005 11Z" fill="#645C4F"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.8334 4C18.3856 4 18.8334 4.44772 18.8334 5V6.22227H19.5334C20.0856 6.22227 20.5334 6.66998 20.5334 7.22227C20.5334 7.77455 20.0856 8.22227 19.5334 8.22227H16.9834C16.4221 8.22227 16 8.66424 16 9.16563V9.16674C16 9.66918 16.4227 10.1112 16.9834 10.1112H18.689C19.4711 10.1112 20.2259 10.418 20.7866 10.9644M16.8334 6.22596V5C16.8334 4.44772 17.2811 4 17.8334 4M16.8334 6.22596C15.2747 6.30285 14 7.57113 14 9.16563V9.16674C14 10.812 15.3568 12.1112 16.9834 12.1112H18.689C18.9496 12.1112 19.2035 12.2143 19.3907 12.3968C19.5688 12.5703 19.6666 12.8048 19.6666 13.0545V13.0556C19.6666 13.306 19.5684 13.5413 19.3908 13.7143L19.39 13.7151C19.2056 13.8952 18.9519 13.9998 18.6833 14C18.6832 14 18.6834 14 18.6833 14H16.1333C15.581 14 15.1333 14.4477 15.1333 15C15.1333 15.5523 15.581 16 16.1333 16H16.8334V17.2223C16.8334 17.7746 17.2811 18.2223 17.8334 18.2223C18.3856 18.2223 18.8334 17.7746 18.8334 17.2223V15.9962C19.5643 15.9598 20.2611 15.6599 20.7873 15.146C21.3572 14.5903 21.6666 13.836 21.6666 13.0556V13.0545C21.6666 12.2731 21.3564 11.5198 20.7866 10.9644" fill="#645C4F"/>
                            </svg>
                        </span>
                        <p>У вас сейчас есть {saleCurrentUserBD} баллов. Используйте их, чтобы получить скидку {saleCurrentUserBD + " ₴"} на эту покупку</p>
                    </div>
                    <div className="cart-preview__button">
                        <Button disabled={disabled}  onClickButton={onAddForm} title={"Потратить баллы"}/>
                    </div>
                    
                    {   
                        activeLabel &&  <div className="cart-preview__label">
                                            <Label setValue={onChangeSaleUser} value={sale} type={"tel"} name={"sale"} text={"Use your points"}/>
                                        </div>
                    }
                </div>
            
        </>
    )
}


export default CartWindow;