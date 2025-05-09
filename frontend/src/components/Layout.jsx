import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;