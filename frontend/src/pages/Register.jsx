import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div>
            Register page
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    )
}

export default Register;