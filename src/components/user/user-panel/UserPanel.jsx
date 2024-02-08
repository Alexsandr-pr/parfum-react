import "./user-panel.scss";

const UserPanel = ({onChangeTabs, stateTabs, data}) => {
    return (
        <>
            <div className="user__panel user-panel">
                <ul className="user-panel__list">
                    {
                        data.map(({id, name, img}) => {
                            return (
                                <li key={id} className="user-panel__item">
                                    <button  
                                        onClick={() => onChangeTabs(id)}
                                        className={stateTabs === id ? "user-panel__link _active" : "user-panel__link"}> 
                                        {name}
                                        <span>
                                            <img src={img} alt="icon"/>
                                        </span>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default UserPanel;