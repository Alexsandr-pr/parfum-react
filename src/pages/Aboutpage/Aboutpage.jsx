
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";
import image from "./img/image2.svg";
import "./aboutpage.scss";
const data = [
    {
        text: "Верхние – это первое впечатление, которое оставляет о себе аромат. Их длительность не более часа"
    },
    {
        text: "Средние ноты – появляются после верхних и длятся несколько часов. Они не такие яркие, как верхние ноты, тем не менее, составляют всю суть аромата"
    },
    {
        text: "Базовые ноты – создают финальное впечатление об аромате и остаются на коже продолжительное время. Они оставляют легкий шлейф, который может длиться даже до нескольких дней" 
    }
]
const About = () => {
    return (    
        <>
                <Breadcrumbs page={"О нас"}/>

                <section className="main__about main-about">
                    <div className="main-about__container">
                        <div className="main-about__body">
                            <div className="main-about__text">
                                <p>Дорогие гости, рады приветствовать вас на нашем сайте!</p>
                                <p>Мы собрали для вас самые известные ароматы со всего мира. Благодаря богатому ассортименту, каждый сможет найти для себя то самое: мужчины — то, что придаст им мужественности и статусности, женщины — то что выгодно подчеркнёт их нежность, подарит изысканный шарм и оставит шлейф очарования. Даже для самых скромных особ у нас всегда найдётся приятный аромат</p>
                            </div>
                            <div className="main-about__content">
                                <div className="main-about__text">
                                    <p>Каждая модель описана тремя нотами:</p>
                                </div>
                                <div className="main-about__block">
                                    <ul className="main-about__list">
                                        {
                                            data.map(({text}, i) => {
                                                return (
                                                    <li key={i} className="main-about__item">
                                                        <span></span>
                                                        <div className="main-about__text">
                                                            <p>{text}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="main-about__image">
                                        <img loading="lazy" src={image}  alt=" bofg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="main-about__text">
                                <p>Наша цель — доставлять вам радость от покупки, совершив её в два клика. После регистрации на сайте, отправьте в корзину выбранный флакон и ожидайте доставку</p>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}


export default About;