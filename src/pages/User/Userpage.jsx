
import UserMain from "../../components/user/user-main/UserMain";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs"
import { useDispatch, useSelector } from "react-redux"

import { auth } from "../../action/user";
import Authorization from "../../components/Authorization/Authorization";

const data = [
    {
        id:"panel",
        name: "Панель управления",
        img: "./img/user/panel.svg", 
    },
    {
        id:"bonus", 
        name: "Бонусы",
        img: "./img/user/bonus.svg", 
    },
    {
        id:"order",
        name: "Заказы", 
        img: "./img/user/card.svg",
    },
    {
        id:"download",
        name: "Загрузки", 
        img: "./img/user/download.svg",
    },
    {
        id:"adress",
        name: "Адрес", 
        img: "./img/user/location.svg",
    },
    {
        id:"details",
        name: "Детали профиля", 
        img: "./img/user/user.svg",
    },
    {
        id:"exit",
        name: "Выйти", 
        img: "./img/user/exit.svg",
    }
]

const Userpage = () => {
    const [stateTabs, setStateTabs] = useState("panel");
    const [pageItem, setPageItem] = useState("")
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(auth())
    }, [dispatch])
    const onChangeTabs = (tab) => {
        setStateTabs(tab)
    }

    useEffect(() => {
        data.forEach(item => item.id === stateTabs  ? setPageItem(item.name) : null)
    },[stateTabs])
    
    return (

        <>  
            {!isAuth ?  <Authorization/> : null}
            {isAuth && <Breadcrumbs page={pageItem}/> }
            {isAuth && <UserMain data={data} stateTabs={stateTabs} onChangeTabs={onChangeTabs} />}
        </>
    )
}

export default Userpage;