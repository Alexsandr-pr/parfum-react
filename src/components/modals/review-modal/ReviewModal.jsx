import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import { addComment } from "../../../action/user";
import Button from "../../buttons/button/Buttons";
import CommentModel from "../../../models/commentModel"
import image from "./img/image.svg";

import "./ReviewModal.scss";
import { Link } from "react-router-dom";



const ReviewModal = ({
    id, 
    title, 
    setTextTitle,
    setText,
    setModalThank,
    setActive
}) => {

    const [name, setName] = useState("")
    const [surname,setSurname] = useState("")
    const user = useSelector(state => state.user.currentUser);
    const isAuth = useSelector(state => state.user.isAuth);

    useEffect(() => {
        if(user.adress) {
            setName(user.adress.name)
            setSurname(user.adress.surname)
        }
    }, [])
    
    const rating = 4;

    const [reviewtext, setTextValue] = useState("")
    const [disabled, setDisabled ] = useState(true)

    const onAddComment =  () => {
        let author = name + ` ${surname}`
        const obj =  new CommentModel(reviewtext, author)
        addComment(obj,id)
            .then(res => {
                if(res.status === 200) {
                    setTextTitle("Спасибо большое за ваш отзыв!")
                    setText("Мы ценим ваше время и усилия, вложенные в написание отзыва. Ваше мнение имеет огромное значение для нас, и мы обязательно учтем все ваши комментарии, чтобы сделать наш продукт/сервис еще лучше. Если у вас возникнут еще какие-либо вопросы или пожелания, не стесняйтесь обращаться. Мы всегда готовы помочь и обеспечить вас высококачественным обслуживанием.")
                    setActive()
                    setModalThank()
                    
                } else {
                    setTextTitle("Ой, произошла ошибка.");
                    setText("Мы приносим извинения, попробуйте оставить комментарий позже.");
                }
            })
            .finally(() => {
                setTextValue("")
            })
    }

    useEffect(() => {
        if(reviewtext.length > 30 && isAuth) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [reviewtext])

    return (
        <>  
            <div className="popap-retvit__title">
                <h3>{title}</h3>
            </div>
            <div className="popap-retvit__text">
                <div className="popap-retvit__svg">
                    <img src={image} alt="image" />
                </div>
                <div className="popap-retvit__text-content">
                    <p>За отзыв Вы получите 100 бонусных баллов</p>
                </div>
            </div>
            <p>{!isAuth &&  "Чтобы оставить комментарий, нужно быть зарегистрированным на сайте."}</p>
            <form className="popap-retvit__form">
                <label className="popap-retvit__label">
                    <p className="popap-retvit__label-text">
                        Отзыв <span>*</span>
                    </p>
                    <textarea disabled={!isAuth} onChange={(e) => setTextValue(e.target.value)} value={reviewtext} required className="popap-retvit__textarea" name="review" id="review" ></textarea>
                </label>
                <Button 
                    disabled={disabled} 
                    type={"submit"} 
                    onClickButton={() => {
                        onAddComment()

                    }} 
                    text={"Отправить отзыв"}/>
                {
                    !isAuth &&  <Link to="/user">
                                    <button className="button-add-to-cart"><span>регистрация</span></button>
                                </Link>
                }
            </form>
        </>
    )
}

    

export default ReviewModal;