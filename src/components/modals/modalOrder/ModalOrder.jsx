import { Link } from "react-router-dom"

import Title from "../../user/title/Title"

const ModalOrder = ({setActive, title}) => {
    return (
        <div className="order-modal__body">
            <div className='order-modal__title'> 
                <Title title={title}/>
            </div>
            <div className="order-modal__button">
                <div className="button-add-body">
                    <Link to="/" onClick={() => setActive(false)}  className="button-add-to-cart add"><span className="add">На главную</span></Link>
                </div>
            </div>
        </div>   
    )
}

export default ModalOrder