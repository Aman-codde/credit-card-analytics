import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import axios from "axios";

const Register = () => {
    const { register, handleSubmit, reset } = useForm();

    async function handleRegister(data){
        try {
            // Axios automatically sets JSON headers and stringifies body
            const response = await axios.post('http://localhost:5000/api/auth/register',data);

            console.log('Registeration Successfull:', response.data);
            reset();
        }
        catch(error){
            if(error.response){
                console.log('Error response:', error.response.data);
            }
            else {
                console.log('Error message',error.message)
            }
        }
    }

    
    return(
        <div className="bg-slate-200">
            <p>Create an Online Account</p>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
            <form onSubmit={handleSubmit(handleRegister)} className="inline-block border-2 bg-white rounded text-left p-4">
                <label>Email</label>
                <input 
                    type="email"
                    {...register("email")}
                />
                <br/>
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
                <label>Confirm Password</label>
                <input
                    type="password"
                    {...register("confirmPassword")}
                />
                <br/>
                <button type="submit">Register</button>
                
            </form>
        </div>
    )
}

export default Register;