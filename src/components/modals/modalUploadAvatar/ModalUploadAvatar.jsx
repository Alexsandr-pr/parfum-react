import { useDispatch, useSelector} from "react-redux"
import { deleteAvatar, uploadAvatar } from "../../../action/user";
import {useState, useEffect} from "react"
import Title from "../../user/title/Title";
import Button from "../../buttons/button/Buttons"

import "./modal-upload.scss";

const ModalUploadAvatar = ({onActive, setActive}) => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.currentUser);

    const changeHandler = (e) => {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
        onActive(e)
    }
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        if(currentUser.avatar) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [currentUser])
    
    return (
        <div>
            <div className="modal__upload">
                <Title title={"Здесь вы можете добавить или удалить ваш аватар"}/>
                <p className="modal__upload-text">Изображение должно быть в формате ".png" или ".jpg"</p>
                <div className="modal__upload-body">
                    <label tabIndex={0} className="button-add-body">
                        <span className="button-add-to-cart">Добавить</span>
                        <input accept="image/*"  onChange={(e) =>changeHandler(e) } className="close" type="file"  name="file"/>
                    </label>
                    <div className="modal__upload-button ">
                        <Button disabled={disabled} onClickButton={() => {
                            dispatch(deleteAvatar())
                            setActive(false)
                        }} title={"Удалить"}/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ModalUploadAvatar