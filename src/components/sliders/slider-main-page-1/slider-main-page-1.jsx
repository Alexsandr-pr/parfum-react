
import { Pagination, Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider-main-page-1.scss";
const data = [
    {
        title: "Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по  СНГ", 
        id: "slide13", 
        sub: "В наличии более 500 ароматов", 
        imgSrcMobile: "./img/card/img/slide1-mobile.jpg", 
        imgSrcDesktop: "./img/card/img/slide1.jpg", 
        alt: "image",
    },
    {
        title: "Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по  СНГ", 
        id: "slide23", 
        sub: "В наличии более 500 ароматов", 
        imgSrcMobile: "./img/card/img/On-The-Beache-Вy-Luis-Vuitton-mobile.jpg", 
        imgSrcDesktop: "./img/card/img/On-The-Beache-Вy-Luis-Vuitton.jpg", 
        alt: "On-The-Beache-Вy-Luis-Vuitton",
    },
    {
        title: "Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по  СНГ", 
        id: "slide33", 
        sub: "В наличии более 500 ароматов", 
        imgSrcMobile: "./img/card/img/davidof2-mobile.jpg", 
        imgSrcDesktop: "./img/card/img/davidof2.jpg", 
        alt: "davidof2",
    }
]


const SliderMainPage1 = () => {
    const elements = data.map(item => {
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
                        <source media="(min-width: 767.98px )" srcSet={imgSrcDesktop} type="image/jpeg"/>
                        <source media="(max-width: 767.98px )" srcSet={imgSrcMobile} type="image/jpeg"/>
                        <img src={imgSrcDesktop} alt={alt}/>
                    </picture>
                </div>
            </SwiperSlide>
        )
    })
    return (
        <>
            <Swiper
                modules={[ Pagination , Autoplay  ]}
                slidesPerView={1}
                pagination={{ 
                    clickable: true ,
                    type: 'bullets',
                    dynamicBullets: true,
                }}
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
                autoplay={{
                    delay: 2000,
                    stopOnLastSlide: true,
                    disableOnInteraction: false,
                }}
                speed={1200}
            >
                {elements}
            </Swiper>
        </>
    )
}

export default SliderMainPage1;