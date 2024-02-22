
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { lazy } from 'react';
import { Suspense, useContext, useEffect } from 'react';
import { Context } from '../../../pages/myContext/MyContext';
import 'swiper/css';
import "./slider-card-page-2.scss";
import { useState } from 'react';
import Services from '../../../services/service';
import { PaginationButtonLeft, PaginationButtonRight } from '../../buttons/PaginationButton/PaginationButton';

const Card = lazy(() => import("../../card/card"));

const SliderCardPage2 = ({
    onChangeCardNumber, 
    onAddToCart
}) => {
    const [cardData, setCards] = useState([]);
    useEffect(() => {
        const service = new Services();

        return () => {
            service.getLimitCard(15).then(res => setCards(res))
        };
    }, []);


    const {cardNumber} = useContext(Context)
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, [cardNumber]);

    

    return (
        <Swiper
            speed={400}
            spaceBetween={30}
            simulateTouch={true}
            touchRatio={1}
            touchAngle={4}
            grabCursor={true}
            keyboard={{
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            }}
            slidesPerView={3}
            breakpoints= {{
                    240:{
                        slidesPerView: 1
                    },
                    457: {
                        slidesPerView: 1.5
                    },
                    600:{
                        slidesPerView: 2
                    },
                    768:{
                        slidesPerView: 2.7
                    },
                    992:{
                        slidesPerView: 3
                    }
                }} 
            >
            {
                cardData.map(item => {
                    const {id} = item
                    return (
                        <SwiperSlide key={id} >
                            <Suspense>
                                <Card
                                    onAddToCart={onAddToCart}
                                    onChangeCardNumber={onChangeCardNumber}
                                    data={item}
                                    />
                            </Suspense>
                        </SwiperSlide>
                    )
                })
            }
            <Buttons />
        </Swiper>
    )
}

const Buttons  = () => {
    const swiper = useSwiper();

    return (
        <div className="slider-card__buttons">
            <PaginationButtonLeft cb={() => swiper.slidePrev()}/> 
            <PaginationButtonRight cb={() => swiper.slideNext()}/>
        </div>
    )
}

export default SliderCardPage2;