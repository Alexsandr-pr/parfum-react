import Title from "../../../title/Title";
import BonusInfo from "../bonusinfo/BonusInfo";
import OrderBlock from "../orderblock/OrderBlock";
import PersonInfo from "../person-info/PersonInfo";


const BonusMain = () => {
    return (
        <>  
            
                <div className="user-content__bonus user-bonus">
                    <Title title={'Бонусы'}/>
                    <PersonInfo/>

                    <BonusInfo/>

                    <Title title={'История бонусов'}/>
                    <OrderBlock/>
                    
                </div>
                
            
                
        </>
    )
}


export default BonusMain;