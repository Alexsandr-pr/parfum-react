import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../../components/footer/footer-main/footer-main";
import Header from "../../components/header/header-main/header-main"

const Layout = () => {
    return (
        <>  
            <Header/>
            <main className="main">
                <Suspense>
                    <Outlet/>
                </Suspense>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;