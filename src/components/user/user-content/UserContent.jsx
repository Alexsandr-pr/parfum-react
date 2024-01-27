
import AdressMain from "../tabs-user/adress/adress-main/AdressMain";
import BonusMain from "../tabs-user/bonus/bonus-main/BonusMain";
import DownloadTabs from "../tabs-user/download/DownloadTabs";
import OrderMain from "../tabs-user/order/order-main/OrderMain";
import Panel from "../tabs-user/panel/Panel";
import ParentTabs from "../tabs-user/parent-tabs/ParentTabs";
import ProfileMain from "../tabs-user/profile/profile-main/ProfileMain";

import "./user-content.scss";

//<div  className="user__content user-content user-content-bonus"></div>

const UserContent = ({stateTabs, onChangeTabs}) => {
    
    return (
        <div className="user__items-content">

            {
                stateTabs === "panel" ? 
                        <ParentTabs >
                            <Panel onChangeTabs={onChangeTabs}/>
                        </ParentTabs> : null 
            }
            
            {
                stateTabs === "bonus" ? 
                        <ParentTabs >
                            <BonusMain/>
                        </ParentTabs> : null
            }
            
            {
                stateTabs === "order" ? 
                        <ParentTabs >
                            <OrderMain/>
                        </ParentTabs>: null
            }

            {
                stateTabs === "download" ? 
                        <ParentTabs >
                            <DownloadTabs/>
                        </ParentTabs>: null
            }

            {
                stateTabs === "adress" ? 
                        <ParentTabs >
                            <AdressMain/>
                        </ParentTabs>: null
            }
            

            {
                stateTabs === "details" ? 
                        <ParentTabs>
                            <ProfileMain/>
                        </ParentTabs>: null
            }

        </div>
    )
}

export default UserContent;