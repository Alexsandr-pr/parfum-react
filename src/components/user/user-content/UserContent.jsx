
import AdressMain from "../tabs-user/adress/adress-main/AdressMain";
import BonusMain from "../tabs-user/bonus/bonus-main/BonusMain";
import DownloadTabs from "../tabs-user/download/DownloadTabs";
import OrderMain from "../tabs-user/order/order-main/OrderMain";
import Panel from "../tabs-user/panel/Panel";
import ParentTabs from "../tabs-user/parent-tabs/ParentTabs";
import ProfileMain from "../tabs-user/profile/profile-main/ProfileMain";
import Exit from "../tabs-user/exit/Exit"

import "./user-content.scss";

const UserContent = ({stateTabs, onChangeTabs}) => {
    
    return (
        <div className="user__items-content">
            { stateTabs === "panel" && <ParentTabs children={<Panel onChangeTabs={onChangeTabs}/>}/>}
            { stateTabs === "bonus" && <ParentTabs children={<BonusMain/>}/>}
            { stateTabs === "order" && <ParentTabs children={<OrderMain/>}/>} 
            { stateTabs === "download" && <ParentTabs children={<DownloadTabs/>}/>}
            { stateTabs === "adress" && <ParentTabs children={ <AdressMain/>} />}
            { stateTabs === "details" && <ParentTabs children={ <ProfileMain/>} /> }
            { stateTabs === "exit" && <ParentTabs children={<Exit/>}/>}
        </div>
    )
}

export default UserContent;