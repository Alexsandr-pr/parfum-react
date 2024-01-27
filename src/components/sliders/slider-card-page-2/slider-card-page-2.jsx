
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Card from "../../card/card";

import 'swiper/css';
import "./slider-card-page-2.scss";
const SliderCardPage2 = ({onChangeCardNumber, onAddToCart, data}) => {


    const elements = data.map(item => {
        const {id} = item
        return (
            <SwiperSlide key={id} >
                    <Card onChangeCardNumber={onChangeCardNumber} onAddToCart={onAddToCart} data={item}/>
            </SwiperSlide>
        )
    })


    return (
        <Swiper
            speed={400}
            spaceBetween={20}
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
            {elements}
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