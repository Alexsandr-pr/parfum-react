import { Suspense, lazy } from "react";
import ParentTabs from "../tabs-user/parent-tabs/ParentTabs";

import "./user-content.scss";

const AdressMain = lazy(() => import("../tabs-user/adress/adress-main/AdressMain"))
const BonusMain = lazy(() => import("../tabs-user/bonus/bonus-main/BonusMain"))
const DownloadTabs = lazy(() => import("../tabs-user/download/DownloadTabs"))
const OrderMain = lazy(() => import("../tabs-user/order/order-main/OrderMain"))
const Panel = lazy(() => import("../tabs-user/panel/Panel"))
const ProfileMain = lazy(() => import("../tabs-user/profile/profile-main/ProfileMain"))
const Exit = lazy(() => import("../tabs-user/exit/Exit"))

const UserContent = ({stateTabs, onChangeTabs}) => {
    
    return (
        <div className="user__items-content">
            <Suspense>
                { stateTabs === "panel" && <ParentTabs children={<Panel onChangeTabs={onChangeTabs}/>}/>}
                { stateTabs === "bonus" && <ParentTabs children={<BonusMain/>}/>}
                { stateTabs === "order" && <ParentTabs children={<OrderMain/>}/>} 
                { stateTabs === "download" && <ParentTabs children={<DownloadTabs/>}/>}
                { stateTabs === "adress" && <ParentTabs children={ <AdressMain/>} />}
                { stateTabs === "details" && <ParentTabs children={ <ProfileMain/>} /> }
                { stateTabs === "exit" && <ParentTabs children={<Exit/>}/>}
            </Suspense>
            
        </div>
    )
}

export default UserContent;