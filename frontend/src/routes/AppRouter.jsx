import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";


const AppRouter = () => {
    return(
        <div>
            <Router>
                <Routes>
                    {/* Public routes */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    {/* Private */}
                    <Route element={<Layout/>}>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Route>
                    {/* Default redirect */}
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter;