import { Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Services from '../../../services/service';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


import 'swiper/css';
import "./tovar-slider.scss";


const TovarSlider = ({onChangeCardNumber}) => {

    const [posts, setPosts] = useState([])


    const service = new Services();
    useEffect(() => {
        service.getSaleCards().then(res => setPosts(res))
    }, [])
    

    const elements = posts.map(item => {
        const {title,gender, id, imageSrc, imageAlt} = item;
        let name = ""
        if(gender === "unisex") {
            name = "Унисекс"
        } else if (gender === "female") {
            name = "Для неё"
        } else {
            name = "Для него"
        }

        return (

            <SwiperSlide key={id} className='tovar-slider__slide tovar-slide'>
                <div className="tovar-slide__image">
                    <img src={imageSrc} alt={imageAlt}/>
                </div>
                <div className="tovar-slide__title">
                    <h3>{name}</h3>
                </div>
                <div className="tovar-slide__item">
                    <div className="tovar-slide__name title-20">
                        <p>{title}</p>
                    </div>
                    <div className="tovar-slide__button">
                        <div className="button-add-body">
                            <Link onClick={() => onChangeCardNumber(id)} to="/card" className="button-add-to-cart add"><span className="add">Перейти </span></Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })
    return(
        <>
        <Swiper
            modules={[ Autoplay  ]}
            breakpoints= {{
                120: {
                    slidesPerView: 1,
                },
                488: {
                    slidesPerView: 1.4,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }}
            loop={true}
            autoplay={{
                    delay: 2000,
                    stopOnLastSlide:false,
                    disableOnInteraction: false
                    
            }}
            speed={1200}
            spaceBetween={20}
            simulateTouch={true}
            touchRatio={1}
            touchAngle={45}
            grabCursor={true}
            keyboard={{
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            }}
            observer={true}
            observeParents={true}
            observeSlideChildren={true}
        >
            {elements}
            
        </Swiper>
        </>
    )
}

export default TovarSlider;