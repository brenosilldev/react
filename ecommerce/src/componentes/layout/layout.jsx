import "./style.scss"
import { Outlet } from "react-router-dom"
import { Header } from "../header/header"
import { Footer } from "../footer/footer"

const Layout = () =>{
    return(
        <>
            <Header />
            <div className="main">
                <Outlet />

            </div>

            <Footer />


        </>
    )
}

export { Layout}