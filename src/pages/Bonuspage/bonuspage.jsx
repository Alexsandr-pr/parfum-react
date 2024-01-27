
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs"
import "./bonuspage.scss"
import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import image5 from "./img/image5.png";

const BonusPage = () => {
    return (
        <>
                <Breadcrumbs page={'Бонусы'}/>
                
                <div className="main__bonus main-bonus">
                    <div className="main-bonus__container">
                        <div className="main-bonus__items">
                            <div className="main-bonus__item">
                                <div className="main-bonus__text">
                                    <p>Совершая покупки, а также определённые действия у нас на сайте, вы можете зарабатывать себе бонусные баллы. Этими баллами можно оплачивать покупки!</p>
                                </div>
                            </div>
                            <div className="main-bonus__item">
                                <div className="main-bonus__text">
                                    <p>Совершая покупки, а также определённые действия у нас на сайте, вы можете зарабатывать себе бонусные баллы. Этими баллами можно оплачивать покупки! Бонусные баллы можно найти в вашей Корзине</p>
                                </div>
                                <div className="main-bonus__image">
                                    <img src={image1} alt="ewtreyhfr esgtregxc asrf"/>
                                </div>
                            </div>
                            <div className="main-bonus__item">
                                <div className="main-bonus__title">
                                    <h3>Как их получить?</h3>
                                </div>
                                <div className="main-bonus__text">
                                    <p>Первое – регистрация. За регистрацию на сайте вам полагается 100 баллов. Сделать это не трудно: просто перейдите во вкладку Мой аккаунт</p>
                                </div>
                                <div className="main-bonus__image">
                                    <img src={image2} alt="ewtreyhfr esgtregxc asrf"/>
                                </div>
                            </div>
                            <div className="main-bonus__item">
                                <div className="main-bonus__text">
                                    <p>Второе – покупки. Если вы зарегистрированы на сайте, то после каждой покупки вам моментально начисляется кэшбэк. Причём, чем больше у вас покупок, тем больше кэшбек!</p>
                                </div>
                                <div className="main-bonus__image">
                                    <img src={image3} alt="ewtreyhfr esgtregxc asrf"/>
                                </div>
                            </div>
                            <div className="main-bonus__item">
                                <div className="main-bonus__text">
                                    <p>Ну и, наконец, отзывы. Просто поделитесь в карточке товара своим мнением. За простой комментарий – 100 баллов. За отзыв с фото – 150 баллов. За видео-отзыв – 200 баллов*</p>
                                </div>
                                <div className="main-bonus__text">
                                    <p>* – в отзыве необходимо указать свои фамилию и имя, а также место, куда был сделан заказ. Себя снимать не нужно – только духи</p>
                                </div>
                                <div className="main-bonus__image">
                                    <img src={image4} alt="ewtreyhfr esgtregxc asrf"/>
                                </div>
                            </div>
                            <div className="main-bonus__item">
                                <div className="main-bonus__text">
                                    <p>Информацию о текущем количестве бонусных баллов, а также их историю, можно узнать в личном кабинете: откройте вкладку «Мой аккаунт» и выберите там пункт Бонусы»</p>
                                </div>
                                <div className="main-bonus__image">
                                    <img src={image5} alt="ewtreyhfr esgtregxc asrf"/>
                                </div>
                                <div className="main-bonus__text">
                                    <p>С любыми вопросами о бонусной системе вы всегда можете обратиться к нам</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default BonusPage;