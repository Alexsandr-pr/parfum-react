import image from "./img/image.svg"
import "./ReviewModal.scss"

const ReviewModal = () => {
    return (
        <>  
            <div className="popap-retvit__title">
                <h3>The devil is a loser by Mushfig</h3>
            </div>
            <div className="popap-retvit__text">
                <div className="popap-retvit__svg">
                    <img src={image} alt="image" />
                </div>
                <div className="popap-retvit__text-content">
                    <p>За текстовый отзыв Вы получите 100 бонусных баллов</p>
                    <p>За отзыв с фото 150 бонусных баллов</p>
                    <p>За видео-отзыв с фото 200 бонусных баллов</p>
                </div>
            </div>
            <form className="popap-retvit__form">
                <label className="popap-retvit__label">
                    <p className="popap-retvit__label-text">
                        Отзыв <span>*</span>
                    </p>
                    <textarea required className="popap-retvit__textarea" name="review" id="review" ></textarea>
                </label>
                <div className="button-add-to-cart-obol">
                    <button type="submit" className="button-add-to-cart"><span>Отправить отзыв</span></button>
                </div>
                
            </form>
        </>
    )
}

export default ReviewModal;