
import Button from "../../buttons/button/Buttons";
import Label from "../../forms/label/Label";
import Title from '../../user/title/Title';


import "./modal-re.scss"
const ModalRe = ({onActive, number1, number2, disabled, setSumm}) => {

    return (
        <div className='re-modal__body'>
            <div className="re-modal__sum">
                <div className="re-modal__input">
                    <Label setValue={setSumm} text={"Введите сумму чисел"}/>
                </div>
                <span className="current__input" value={number1} >{number1}</span>
                <span className="re-modal__plus">+</span>
                <span className="current__input" value={number2} >{number2}</span>
            </div>
            <Button disabled={disabled} onClickButton={onActive} title={"Назад"}/>
        </div>
    )
}

export default ModalRe