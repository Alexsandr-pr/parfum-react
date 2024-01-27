
import Title from "../components/user/title/Title";
import MainCash from "../components/main-cash/main-cash";
import SliderMainPage1 from "../components/sliders/slider-main-page-1/slider-main-page-1";
import TovarSlider from "../components/sliders/slider-male-page-1/tovar-slider";
import Catalog from "../components/main-page-catalog/main-page-catalog";
const Home = ({onChangeCardNumber, onAddToCart}) => {

    return (

        <>

            <section className="main__slider main-slider">
                <div className="main-slider__body">
                    <div className="main-slider__swiper swiper">
                        <SliderMainPage1/>
                    </div>
                </div>
			</section>

            <section className="main__tovar-slider tovar-slider">
					<div className="tovar-slider__container">
						<Title title={"Популярные ароматы"}/>
                        <div className="tovar-slider__swiper">
                            <TovarSlider onChangeCardNumber={onChangeCardNumber}/>
                        </div>
					</div>
			</section>
            <MainCash/>
            <Catalog 
                onAddToCart={onAddToCart} 
                onChangeCardNumber={onChangeCardNumber}/>
        </>

    )
}

export default Home;