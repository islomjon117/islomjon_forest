import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"


const MainLayout = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default MainLayout