
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { lazy } from 'react';
import { Suspense, useContext, useEffect } from 'react';
import { Context } from '../../../pages/myContext/MyContext';
import 'swiper/css';
import "./slider-card-page-2.scss";
import { useState } from 'react';
import Services from '../../../services/service';

const Card = lazy(() => import("../../card/card"));

const SliderCardPage2 = ({
    onChangeCardNumber, 
    onAddToCart
}) => {
    const service = new Services();
    const [limit, setLimit] = useState(4)


    const {cardNumber} = useContext(Context)
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, [cardNumber]);

    const [cardData, setCards] = useState([]);

    useEffect(() => {
        service.getLimitCard(limit).then(res => setCards(res))
    },[limit]);

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
            <Buttons setLimit={setLimit}/>
        </Swiper>
    )
}

const Buttons  = ({setLimit}) => {
    const swiper = useSwiper();

    return (
        <div className="slider-card__buttons">
            <button onClick={() => swiper.slidePrev()} className="cart-pagination__button"><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={() => {
                    swiper.slideNext()
                    setLimit(prev => prev + 1);
                }} 
            className="cart-pagination__button"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    )
}

export default SliderCardPage2;