
import { useEffect, useState } from "react";

import MainCatalog from "../../components/main-catalog-card/main-catalog/MainCatalog";
import SliderCardPage2 from "../../components/sliders/slider-card-page-2/slider-card-page-2";
import Services from "../../services/service"
import Title from "../../components/user/title/Title"
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";
import ParentModal from "../../components/modals/parent-modal/ParentModal";
import ReviewModal from "../../components/modals/review-modal/ReviewModal";

import "./Cardpage.scss";

const CardPage = ({
    cardNumber,
    onChangeCardNumber, 
    onAddToCart
}) => {
    
    const service = new Services();
    const [post, setPost] = useState([])
    const [active, setActive] = useState(false);
    const onActive = (e) => {
        e.target.classList.contains("close") && setActive(false);
    } 

    const [cardData, setCards] = useState([]);

    useEffect(() => {
        service.getLimitCard().then(res => setCards(res))
    },[]);

    useEffect(() => {
        service.getOneCard(cardNumber).then(res => setPost(res))
    }, [cardNumber])
    
    return (
        <>
                <Breadcrumbs page={"Подробнее"}/>
                <MainCatalog onAddToCart={onAddToCart} setActive={setActive} cardNumber={cardNumber} post={post}/>
                <section className="main__slider-card slider-card">
                    <div className="slider-card__graniza">
                        <div className="slider-card__body">
                            <Title title={"Вам так же может понравиться"}/>
                            <SliderCardPage2 
                                data={cardData}
                                onAddToCart={onAddToCart} 
                                onChangeCardNumber={onChangeCardNumber}
                            />
                        </div>
                    </div>
                </section>
                <ParentModal close={false} onActive={onActive} active={active}>
                    <ReviewModal />
                </ParentModal>
                
        </>
    )
}

export default CardPage;