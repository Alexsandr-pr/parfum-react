
import "./bonus-info.scss"

const BonusInfo = () => {
    let style = {"max-width":"350px;"}
    return (
        <div  className="user-content__info">
            <div className="user-content__block-info block-info">
                <div className="block-info__body"> 
                    <p className="block-info__text"><span className="block-info-pok">5 / 5</span> покупок сделано</p>  
                </div>
            </div>
            <div style={style} className="user-content__text ">
                <p>Чтобы получать кэшбек 3% и статус «Частый покупатель», вам нужно сделать количество покупок 5</p>
            </div>
        </div>
    )
}

export default BonusInfo;