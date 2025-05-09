import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div>
            Login page
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    )
}

export default Login;