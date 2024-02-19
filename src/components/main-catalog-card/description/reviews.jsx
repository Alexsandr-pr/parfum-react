import { useEffect, useState } from "react";

import Services from "../../../services/service";
import Loading from "../../Loading/Loading";

import "./reviews.scss"

const Reviews = ({cardNumber}) => {
    const service = new Services();
    const [loading, setLoading] = useState(false)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        onLoading();
        service.getOneCard(cardNumber)
            .then(res => onReviewsChange(res.reviews))
    }, [cardNumber])

    const onLoading = () => {
        setLoading(true)
    }
    const onReviewsChange = (res) => {
        setReviews(res)
        setLoading(false)
    }
    
    return (
        <>
            {loading ? <Loading/> : null}
            {(reviews.length === 0 && !loading) ? <NoReview/> : null}
            {!loading ? <Comments reviews={reviews}/> : null}
        </>
    )
}
const NoReview = () => {
    return (
        <div className="no-review">
            <h3>У этого товара еще нет комментариев, станьте первым пользователем, кто оставит комментарий!</h3>
        </div>
    )
}

const Comments = ({reviews}) => {

    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        
    const [number, setNumber] = useState(2)
    return (
        <>
            <div className="catalog-description__retvit retvit"> 
                {
                    reviews.map(({author, data, reviewtext}, i) => {
                        if(i > number) return

                        const datar = new Date(data)
                        const day = datar.getDate();
                        const monthIndex = datar.getMonth();
                        const year = datar.getFullYear();
                        return (
                            <div key={i} className="retvit__item">
                                    <div className="retvit__header">
                                        <div className="retvit__title">
                                            <p>{author}</p>
                                        </div>
                                        <div className="retvit__rating">
                                            
                                        </div>
                                    </div>
                                    <div className="retvit__data">
                                        
                                        <p>{`${day} ${months[monthIndex]} ${year}`}</p>
                                    </div>
                                    <div className="retvit__text">
                                        <p>{reviewtext}</p>
                                    </div>
                            </div> 
                    )})
                    
                }
            </div>
            { number <= reviews.length ? <div className="catalog-description__btn-add"><button onClick={() => setNumber(prev => prev + 3)}>Показать еще</button></div>  : null}
            
        </>
    )
}
export default Reviews;