
import UserMain from "../../components/user/user-main/UserMain";
import { useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs"

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

    const onChangeTabs = (tab) => {
        setStateTabs(tab)
    }
    let pageItem = "";
    data.forEach(item => {
        if(item.id === stateTabs) {
            pageItem = item.name
        }
    })

    return (
        <>  
            <Breadcrumbs page={pageItem}/>
            <UserMain data={data} stateTabs={stateTabs} onChangeTabs={onChangeTabs}/>
        </>
    )
}

export default Userpage;