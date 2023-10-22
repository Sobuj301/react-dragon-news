import { Link } from "react-router-dom";

const Register = () => {
    const handleRegisterSubmit = e => {
          e.preventDefault()
          const email =  e.target.email.value;
          const password =  e.target.password.value;
          console.log(email,password)
    }
    return (
        <div>
             <div className="mt-10">
                <h2 className="text-center text-2xl font-bold">Register  your account</h2>
                <form onSubmit={handleRegisterSubmit} className="card-body w-3/6 m-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="your name"name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="enter your photo url"name="photoUrl" className="input input-bordered" />
                    </div>
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
                        <input type="password" placeholder="password"name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Already  have account please <Link to="/login" className="text-blue-500">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;