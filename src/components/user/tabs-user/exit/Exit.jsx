import  { Suspense, lazy, useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../../reducers/userReducer'
import Button from "../../../buttons/button/Buttons"
import { deleteUser } from '../../../../action/user'

import "./exit.scss"

const ModalExit = lazy(() => import("../../../modals/ModalExit/ModalExit"))

const Exit = () => {
    const dispatch = useDispatch()

    const [active, setActive] = useState(false)
    const [activeDelete, setActiveDelete] = useState(false)
    const title = " Однако, если вы чувствуете, что пришло время закрыть эту главу, мы готовы помочь. Если вы уверены в своем решении, мы готовы удалить ваш аккаунт. Пожалуйста, подтвердите, если это ваше окончательное решение."

    const onActive = (e) => {
        if(e.target.classList.contains("close")) {
            setActive(false)
        }
    }

    const onActiveDelete = (e) => {
        if(e.target.classList.contains("close")) {
            setActiveDelete(false)
        }
    }
    const exit = () => dispatch(logout())
    const deleteCurrentUser = () => {
        dispatch(deleteUser())
    }

    return (
        <>
            <div className="exit__body">
                <Button onClickButton={() => setActive(true)} title={"Выйти"}/>
                <Button onClickButton={() => setActiveDelete(true) } title={"Удалить аккаунт"}/>
            </div>
                <Suspense>
                <ModalExit 
                                text={"Мы были вместе на этом пути некоторое время."} 
                                cb={exit} 
                                titleButton={"Выйти"} 
                                titleH={title} 
                                active={active} 
                                onActive={onActive}
                            />
                </Suspense>
                <ModalExit cb={deleteCurrentUser} text={"Вы уверены, что хотите удалить свой аккаунт?"}  active={activeDelete} onActive={onActiveDelete} titleButton={"Удалить"} titleH={"Все данные будут безвозвратно удалены. Это действие нельзя отменить. Пожалуйста, подтвердите удаление."}/>
                
        </>
    )
}
//
export default Exit