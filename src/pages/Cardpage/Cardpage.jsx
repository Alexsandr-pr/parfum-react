
import { useEffect, useState } from "react";

import MainCatalog from "../../components/main-catalog-card/main-catalog/main-catalog";
import SliderCardPage2 from "../../components/sliders/slider-card-page-2/slider-card-page-2";
import Services from "../../services/service"
import Title from "../../components/user/title/Title"
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";

import "./Cardpage.scss";
import ParentModal from "../../components/modals/parent-modal/ParentModal";
import ReviewModal from "../../components/modals/review-modal/ReviewModal";


const CardPage = ({cardNumber, onChangeCardNumber, onAddToCart})=> {

    const [active, setActive] = useState(false);
    const [post, setPost] = useState([])
    const service = new Services();
    const onActive = (e) => {
        const target = e.target
        
        if(active) {
            if(target.classList.contains("popap__close")) {
                setActive(prev => !prev)
            }
        } else {
            setActive(prev => !prev)
        }
        
    } 
    const [cardData, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/posts?_limit=12")
            .then(data => data.json())
            .then(data => setCards(data))
    },[]);


    useEffect(() => {
        service.getOneCard(cardNumber).then(res => setPost(res))
    }, [cardNumber])
    
    return (
        <>
                <Breadcrumbs page={"Подробнее"}/>
                <MainCatalog onAddToCart={onAddToCart} onActive={onActive} cardNumber={cardNumber} post={post}/>
                <section className="main__slider-card slider-card">
                    <div className="slider-card__graniza">
                        <div className="slider-card__body">
                            <Title title={"Вам так же может понравиться"}/>
                            <SliderCardPage2 
                                data={cardData}
                                onAddToCart={onAddToCart} 
                                onChangeCardNumber={onChangeCardNumber}/>
                        </div>
                    </div>
                </section>
                <ParentModal onActive={onActive} active={active}>
                    <ReviewModal />
                </ParentModal>
                
        </>
    )
}

export default CardPage;