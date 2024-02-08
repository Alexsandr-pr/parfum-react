import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer-main/footer-main";
import Header from "../../components/header/header-main/header-main"

const Layout = () => {
    return (
        <>  
            <Header/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;