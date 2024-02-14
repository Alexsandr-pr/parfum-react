import Title from "../../../title/Title";
import BonusInfo from "../bonusinfo/BonusInfo";
import OrderBlock from "../orderblock/OrderBlock";
import PersonInfo from "../person-info/PersonInfo";
import {useSelector} from "react-redux"

const BonusMain = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    return (
        <div className="user-content__bonus user-bonus">
            <Title title={'Бонусы'}/>
            <p className="user-bonus__text-info">Нажмите на аватар чтобы удалить или добавить аватар</p>
            <PersonInfo currentUser={currentUser}/>
            <BonusInfo currentUser={currentUser}/>
            <Title title={'История бонусов'}/>
            <OrderBlock/>
        </div> 
        
    )
}


export default BonusMain;