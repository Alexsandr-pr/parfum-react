
import ParentModal from '../parent-modal/ParentModal'
import Button from '../../buttons/button/Buttons'
import { Link } from 'react-router-dom';
import "./modal-exit.scss";

const ModalExit = ({titleH, cb, titleButton, active, onActive, text, to}) => {
    
    return (
        <>
            <ParentModal active={active} onActive={onActive}>
                <div className='exit-modal__body'>
                    <p className='exit__title'>{text}</p>
                    <p className='exit__p'>{titleH}</p>
                    <Link to={to}>
                        <Button onClickButton={cb} title={titleButton}/>
                    </Link>
                </div>
            </ParentModal>
        </>
    )
}

export default ModalExit;