
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import Card from "../../card/card";

import 'swiper/css';
import "./slider-card-page-2.scss";
import { useContext, useEffect } from 'react';
import { Context } from '../../../pages/myContext/MyContext';

const SliderCardPage2 = ({
    onChangeCardNumber, 
    onAddToCart, 
    data
}) => {

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
                data.map(item => {
                    const {id} = item
                    return (
                        <SwiperSlide key={id} >
                            <Card 
                                onChangeCardNumber={onChangeCardNumber} 
                                onAddToCart={onAddToCart} 
                                data={item}
                            />
                        </SwiperSlide>
                    )
                })
            }
            <Buttons/>
        </Swiper>
    )
}

const Buttons  = () => {
    const swiper = useSwiper();
    return (
        <div className="slider-card__buttons">
            <button onClick={() => swiper.slidePrev()} className="cart-pagination__button"><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={() => swiper.slideNext()} className="cart-pagination__button"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    )
}

export default SliderCardPage2;