import { useState, useEffect, useContext } from "react";
import {Context}  from "../../pages/myContext/MyContext"


import Title from "../../components/user/title/Title"
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";
import SliderCardPage2 from "../../components/sliders/slider-card-page-2/slider-card-page-2";
import ListToPageGender from "../../components/ListToPagegender/ListToPageGender";


const data1 = [
    {
        id: 5676,
        text: "Рынок женских духов постоянно развивается, с каждым сезоном именитые бренды предлагают нам все больше и больше ароматов. Конечно самая широкая категория – женские духи, в ней представлено более тысячи позиций."
    },
]


import "./femalepage.scss"


const Femalepage = ({onAddToCart}) => {
    const {onChangeCardNumber} = useContext(Context)
    const [cardData, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/posts?gender=female&_limit=12")
            .then(data => data.json())
            .then(data => setCards(data))
    },[]);
    return (
            <>
                <div className="_graniza">
                    <Breadcrumbs page={"Мужские"}/>
                </div>
                <div className="male__graniza">
                    <Title title={"Ароматы для женщин – венец парфюмерной индустрии"}/>
                    <ListToPageGender data={data1}/>
                    <Title title={"Как принято классифицировать духи для женщи"}/>
                    <Title title={"Как подобрать мужские духи"}/>
                    <ListToPageGender data={data1}>
                        <Title title={"При выборе мужской туалетной воды стоит ориентироваться на несколько аспектов:"}/>
                    </ListToPageGender>
                    <Title title={"Получите лучшую мужскую парфюмерию"}/>
                    <ListToPageGender data={data1}/>
                    <div className="male-card__body">
                        <Title title={"МУЖСКАЯ ПАРФЮМЕРИЯ"}/>
                        <SliderCardPage2 onAddToCart={onAddToCart} onChangeCardNumber={onChangeCardNumber} data={cardData}/>
                    </div>
                    
                </div>
                
            </>       
    )
}

export default Femalepage;