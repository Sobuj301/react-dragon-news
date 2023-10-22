import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {logIn} = useContext(AuthContext)
    const handleLoginSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        logIn(email,password)
        .then(result =>{
            console.log(result.user,"user")
        })
        .catch(error => {
            console.log(error.message)
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h2 className="text-center text-2xl font-bold">Login your account</h2>
                <form onSubmit={handleLoginSubmit} className="card-body w-3/6 m-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not have account please <Link to="/register" className="text-blue-500">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;