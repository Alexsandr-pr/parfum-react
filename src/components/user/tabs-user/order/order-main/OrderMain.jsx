import { useSelector} from "react-redux"

import OrderItem from "../order-item/OrderItem";

import "./order-main.scss"
import DownloadTabs from "../../download/DownloadTabs";

const OrderMain = () => {

    const orderData = useSelector(state => state.user.currentUser.order) || [];

    return (
        <>
            {
                Object.keys(orderData).length <= 0 ? <DownloadTabs text={"Вы пока не совершали заказов :("} title={"Заказы"}/>:  null
            }

            {
                Object.keys(orderData).length > 0 &&    <div className="user-content__order-block order-block">
                                                            <OrderItem data={orderData}/>
                                                        </div> 
            }
        </>
    )
}

export default OrderMain;