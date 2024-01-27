
import UserContent from "../user-content/UserContent";
import UserPanel from "../user-panel/UserPanel";


import "./user-main.scss"


const UserMain = ({stateTabs, onChangeTabs, data}) => {


    return (
        <div className="main__user user">
            <div className="user__container">
                <UserPanel
                    data={data} 
                    onChangeTabs={onChangeTabs} 
                    stateTabs={stateTabs}
                    />
                <UserContent 
                    onChangeTabs={onChangeTabs} 
                    stateTabs={stateTabs}
                    />
            </div>
        </div>
    )
}

export default UserMain;