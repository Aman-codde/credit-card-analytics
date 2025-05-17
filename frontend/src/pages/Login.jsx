import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, reset} = useForm();

    async function handleLogin(data){
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login',data)
            console.log('Login Successful:', response.data);

            reset();
            //after successful login, redirect to dashboard page
            navigate('/dashboard');  
        }
        catch(err){
            if(err.response){
                console.error('Error Response:',err.response.data);
            }
            else {
                console.error('Error message:', err.message)
            }
        }
    }

    return(
        <div>
            <h1>Login page</h1>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
            <form onSubmit={handleSubmit(handleLogin)}>
                <label>Username</label>
                <input
                    type="text"
                    {...register("username")}
                />
                <br/>
                <label>Password</label>
                <input
                    type="password"
                    {...register("password")}
                />
                <br/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;