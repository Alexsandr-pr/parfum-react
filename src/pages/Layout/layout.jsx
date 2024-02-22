import { Outlet } from "react-router-dom";
import { Suspense, useContext, useState} from "react";
import { lazy } from "react";
import Header from "../../components/header/header-main/header-main"
import { Context } from "../myContext/MyContext";
const Footer = lazy(() => import("../../components/footer/footer-main/footer-main"));

const Layout = () => {


    const {setActiveSearch} = useContext(Context)

    const [footer, setFooter] = useState(false)
    const timer = setTimeout(() => {
        setFooter(true)
        clearInterval(timer)
    }, 1000)
    return (
        <>  
            <Suspense>
                <Header/>
            </Suspense>
            <main className="main" onClick={() => setActiveSearch(false)}>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </main>
            <Suspense>
                {footer &&  <Footer/>}
            </Suspense>
        </>
    )
}

export default Layout;