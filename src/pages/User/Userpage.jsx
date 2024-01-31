
import UserMain from "../../components/user/user-main/UserMain";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs"
import Registration from "../Authorization/Registration/Registration";
import { useDispatch, useSelector } from "react-redux"
import Login from "../Authorization/login/Login";
import { auth } from "../../action/user";

const data = [
    {id:"panel", name: "Панель управления",img: "./img/user/panel.svg", active: true},
    {id:"bonus", name: "Бонусы",img: "./img/user/bonus.svg", active: false},
    {id:"order", name: "Заказы", img: "./img/user/card.svg",active: false},
    {id:"download", name: "Загрузки", img: "./img/user/download.svg",active: false},
    {id:"adress", name: "Адрес", img: "./img/user/location.svg",active: false},
    {id:"details", name: "Детали профиля", img: "./img/user/user.svg",active: false},
    {id:"exit", name: "Выйти", img: "./img/user/exit.svg",active: false}
]



const Userpage = () => {
    const [stateTabs, setStateTabs] = useState("panel");
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const onChangeTabs = (tab) => {
        setStateTabs(tab)
    }
    useEffect(() => {
        dispatch(auth())
    }, [])

    let pageItem = "";
    data.forEach(item => {
        if(item.id === stateTabs) {
            pageItem = item.name
        }
    })

    return (
        <>  
                {!isAuth ?  <Login/> : null}
                {isAuth && <Breadcrumbs page={pageItem}/> }
                {isAuth && <UserMain data={data} stateTabs={stateTabs} onChangeTabs={onChangeTabs} />}
                
            
        </>
    )
}

export default Userpage;