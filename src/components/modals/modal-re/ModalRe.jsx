

import Button from "../../buttons/button/Buttons";
import Label from "../../forms/label/Label";

import "./modal-re.scss"

const ModalRe = ({
    onActive, 
    number1, 
    number2, 
    disabled, 
    setSumm,
    summ
}) => {

    return (
        <div className='re-modal__body'>
            <div className="re-modal__sum">
                <div className="re-modal__input">
                    <Label required value={summ} setValue={setSumm} type={"number"} name={"summ"} text={"Введите сумму чисел"}/>
                </div>
                <div className="re__sum-block">
                    <span className="current__input" value={number1} >{number1}</span>
                    <span className="re-modal__plus">+</span>
                    <span className="current__input" value={number2} >{number2}</span>
                </div>
            </div>
            <Button disabled={disabled} onClickButton={onActive} title={"Назад"}/>
        </div>
    )
}

export default ModalRe