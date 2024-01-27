

import "./parent-tabs.scss"

const ParentTabs = ({children}) => {
    return (
        <>
            <div className={"user__content user-content" }>
                {children}
            </div>
        </>
    )
}

export default ParentTabs;