
import { useEffect, useState } from "react";

import MainCatalog from "../../components/main-catalog-card/main-catalog/MainCatalog";
import SliderCardPage2 from "../../components/sliders/slider-card-page-2/slider-card-page-2";
import Services from "../../services/service"
import Title from "../../components/user/title/Title"
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";
import ParentModal from "../../components/modals/parent-modal/ParentModal";
import ReviewModal from "../../components/modals/review-modal/ReviewModal";
import ModalExit from "../../components/modals/ModalExit/ModalExit";

import "./Cardpage.scss";
import Loading from "../../components/Loading/Loading";
import ParentFromReplace from "../../components/ParentFromReplace/ParentFromReplace";

const CardPage = ({
    cardNumber,
    onChangeCardNumber, 
    onAddToCart
}) => {
    
    const service = new Services();
    const [post, setPost] = useState([])
    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const onActive = (e) => {
        e.target.classList.contains("close") && setActive(false);
    } 

    const {_id, title} = post;
    const [cardData, setCards] = useState([]);

    useEffect(() => {
        service.getLimitCard().then(res => setCards(res))
    },[]);

    useEffect(() => {
        setLoading(true)
        service.getOneCard(cardNumber)
            .then(res => setPost(res))
            .then(() => {
                setLoading(false)
                setError(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })

    }, [cardNumber])
    
    const [textTitle, setTextTitle] = useState("")
    const [text, setText] = useState("")

    const [modalThank, setModalThank] = useState(false)
    
    return (
        <>
                <Breadcrumbs page={"Подробнее"}/>
                {(!loading && !error) && <MainCatalog  onAddToCart={onAddToCart} setActive={setActive} cardNumber={cardNumber} post={post}/>}
                {loading && <Loading/>}
                {
                    error &&    <ParentFromReplace>
                                        <p>Сервер временно недоступен, попробуйте обновить страницу</p>
                                </ParentFromReplace>
                }
                <section className="main__slider-card slider-card">
                    <div className="slider-card__graniza">
                        <div className="slider-card__body">
                            <Title align={"center"} title={"Вам так же может понравиться"}/>
                            <SliderCardPage2 
                                data={cardData}
                                onAddToCart={onAddToCart} 
                                onChangeCardNumber={onChangeCardNumber}
                            />
                        </div>
                    </div>
                </section>
                <ParentModal close={false} onActive={onActive} active={active}>
                    <ReviewModal 
                        setActive={() => setActive(false)}
                        setTextTitle={setTextTitle}
                        setText={setText}
                        setModalThank={() => setModalThank(true)} 
                        id={_id} 
                        title={title}
                    />
                </ParentModal>
                <ModalExit to={""} text={textTitle} cb={() => setModalThank(false)} titleButton={"Назад"} titleH={text} active={modalThank} onActive={() => setModalThank(false)}/>
        </>
    )
}

export default CardPage;