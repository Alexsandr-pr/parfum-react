import { Outlet } from "react-router-dom";
import { Suspense, useContext } from "react";
import Footer from "../../components/footer/footer-main/footer-main";
import Header from "../../components/header/header-main/header-main"
import { Context } from "../myContext/MyContext";

const Layout = () => {

    const {setActiveSearch} = useContext(Context)

    return (
        <>  
            <Header/>
            <main className="main" onClick={() => setActiveSearch(false)}>
                <Suspense >
                    <Outlet/>
                </Suspense>
            </main>
            
        </>
    )
}

export default Layout;