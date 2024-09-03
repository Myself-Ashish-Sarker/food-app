import img1 from "/login/1.jpg";
import { Link, useNavigate } from "react-router-dom";

import { RiBreadLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const logLog = { email, password };
        console.log(logLog);

        logIn(email, password)
            .then(res => {
                console.log(res.user);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
                toast.success("Successfully Logged In!", {
                    position: "top-right"
                });
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <div className="relative">
                {/* <img className="absolute -right-6 w-24" src={img1} alt="" /> */}
                <img className="object-cover h-screen w-screen opacity-40" src={img1} alt="" />
                <div className="absolute top-5 right-5 z-30">
                    <Link to="/">
                        <button className="cursor-pointer px-4 py-2 rounded-md bg-slate-900 text-white items-center flex gap-2">
                            <FaHome className="text-xl" />
                            <p className="pt-1">Home</p>
                        </button>
                    </Link>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex justify-center gap-24">
                        <div className="bg-white">
                            <div className="bg-base-100 w-[22rem] shadow-xl">
                                <h1 className="pt-8 text-2xl text-center font-semibold">Login</h1>
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                    </div>
                                    <div>
                                        <h1>Don't have a Account? <Link to="/register">Register</Link></h1>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-5">
                            <h1 className="text-4xl font-extrabold">Login</h1>
                            <h1 className="text-2xl font-semibold">How to do it?</h1>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <RiBreadLine className="text-lg " />
                                    <h1>Give a valid email address</h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RiBreadLine className="text-lg " />
                                    <h1>Give a valid password</h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RiBreadLine className="text-lg " />
                                    <h1>Either informaton error will give a error message</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Login