
import { Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import davidof2 from "./img/davidof2.webp";
import davidof2Mobile from "./img/davidof2-mobile.webp";
import beacheMobile from "./img/On-The-Beache-Вy-Luis-Vuitton-mobile.webp";
import beache from "./img/On-The-Beache-Вy-Luis-Vuitton.webp";
import slide1 from "./img/slide1.webp"
import slide1Mobile from "./img/slide1-mobile.webp"

import 'swiper/css';
import "./slider-main-page-1.scss";

const data = [
    {
        title: "Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по  Украине", 
        id: "slide13", 
        sub: "В наличии более 500 ароматов", 
        imgSrcMobile: slide1Mobile, 
        imgSrcDesktop: slide1, 
        alt: "image",
    },
    {
        title: "Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по  Украине", 
        id: "slide23", 
        sub: "В наличии более 500 ароматов", 
        imgSrcMobile: beacheMobile, 
        imgSrcDesktop: beache, 
        alt: "On-The-Beache-Вy-Luis-Vuitton",
    },
    {
        title: "Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по  Украине", 
        id: "slide33", 
        sub: "В наличии более 500 ароматов", 
        imgSrcMobile: davidof2Mobile, 
        imgSrcDesktop: davidof2, 
        alt: "davidof2",
    }
]

const SliderMainPage1 = () => {
    return (
        <>
            <Swiper
                modules={[ Autoplay]}
                slidesPerView={1}
                loop={true}
                simulateTouch={true}
                touchRatio={1}
                touchAngle={45}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                }}
                
                speed={1200}
            >
                {
                    data.map(item => {
                        const {title, id, sub, imgSrcDesktop, imgSrcMobile, alt} = item;
                        return (
                            <SwiperSlide key={id} className="main-slider__slide slider-slide">
                                <div className="slider-slide__container">
                                    <div className="slider-slide__body">
                                        <div className="slider-slide__title">
                                            <h1>{title}</h1>
                                        </div>
                                        <div className="slider-slide__label">
                                            <p>{sub}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-slide__image">
                                    <picture>
                                        <source media="(min-width: 767px )" srcSet={imgSrcDesktop} type="image/webp"/>
                                        <img style={{ objectFit: 'cover' }} height={500} loading='lazy' src={imgSrcMobile} alt={alt}/>
                                    </picture>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default SliderMainPage1;