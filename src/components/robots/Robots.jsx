import ParentModal from "../modals/parent-modal/ParentModal";
import ModalRe from "../modals/modal-re/ModalRe";

import { useState, useEffect } from "react";

const Robots = ({
    checked,
    active,
    setActive,
    noActive,
    setChecked
}) => {

    const [disabled, setDisabled] = useState(true)
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [summ, setSumm] = useState(0);

    const getRandomNumber = () => Math.floor(Math.random() * 51); 
    
    const onChangeSumm = () => {
        if(summ == number2 + number1 && summ !== 0) {
            setDisabled(false)
        }
    }
    const onActiveModal = () => {
        if(!checked) {
            setSumm("")
            setNumber1(getRandomNumber())
            setNumber2(getRandomNumber())
            setActive()
        }
    }
    const closeModal = () => {
        noActive()
        setSumm(0)
        setDisabled(true)
        setChecked(true)
    }

    useEffect(() => {
        onChangeSumm()
    }, [summ, number1, number2])

    return (
        <>
            <ul className="re-catcha pol-list">
                <li className="pol-list__item">
                    <label onClick={() => onActiveModal()} className="pol-list__label">
                        <input onChange={() => onActiveModal()}  type="checkbox" checked={checked}  className="pol-list__input"/>
                        <span className="pol-list__span"></span>
                        <p className="pol-list__p">Я не робот</p>
                    </label>
                </li>
            </ul>
            <ParentModal onActive={(e) => e.preventDefault()} active={active} close={true}>
                <ModalRe  onActive={closeModal} summ={summ} setSumm={setSumm} disabled={disabled} number1={number1} number2={number2} />
            </ParentModal>
        </>
    )
}

export default Robots;