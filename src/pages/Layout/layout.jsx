import { Outlet } from "react-router-dom";
import { Suspense, useContext} from "react";
import { lazy } from "react";
import Header from "../../components/header/header-main/header-main"
import { Context } from "../myContext/MyContext";
const Footer = lazy(() => import("../../components/footer/footer-main/footer-main"));

const Layout = () => {


    const {setActiveSearch} = useContext(Context)

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
                <Footer/>
            </Suspense>
        </>
    )
}

export default Layout;