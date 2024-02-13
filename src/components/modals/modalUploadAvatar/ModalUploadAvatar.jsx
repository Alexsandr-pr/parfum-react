import { useDispatch} from "react-redux"
import { deleteAvatar, uploadAvatar } from "../../../action/user";

import Title from "../../user/title/Title";
import Button from "../../buttons/button/Buttons"

import "./modal-upload.scss";

const ModalUploadAvatar = ({onActive, setActive}) => {

    const dispatch = useDispatch()

    const changeHandler = (e) => {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
        onActive(e)
    }
    
    return (
        <div>
            <div className="modal__upload">
                <Title title={"Здесь вы можете добавить или удалить ваш аватар"}/>
                <div className="modal__upload-body">
                    <label className="button-add-body">
                        <span className="button-add-to-cart">upload</span>
                        <input accept="image/*"  onChange={(e) =>changeHandler(e) } className="close" type="file"  name="file"/>
                    </label>
                    <div className="modal__upload-button ">
                        <Button  onClickButton={(e) => {
                            dispatch(deleteAvatar())
                            setActive(false)
                        }} title={"delete avatar"}/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ModalUploadAvatar