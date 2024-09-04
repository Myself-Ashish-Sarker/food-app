import { Link, useNavigate } from "react-router-dom";
import img1 from "/register/register.jpg"


import { RiBreadLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const regRes = { name, email, password };
        console.log(regRes);
        
        try {
            await createUser(email, password);
            setTimeout(() => {
                navigate("/")
            }, 2000);
            toast.success("Successfully Registered!", {
                position: "top-right"
            });
        } catch (err) {
            console.log(err.message);
            toast.error("Failed!", {
                position: "top-right"
            });
        }
    }

    return (
        <div>
            <div className="relative">
                <img className="object-cover h-screen w-screen opacity-40" src={img1} alt="" />
                <div className="absolute top-5 right-5 z-30">
                    <Link to="/">
                        <button className="cursor-pointer px-4 py-2 rounded-md bg-slate-900 text-white items-center flex gap-2">
                            <FaHome className="text-xl" />
                            <p className="pt-1">Home</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col lg:flex-row justify-center gap-24">
                    <div className="bg-white">
                        <div className="bg-base-100 w-[22rem] shadow-xl">
                            <h1 className="pt-8 text-2xl text-center font-semibold">Register</h1>
                            <form onSubmit={handleSubmit} className="card-body">
                                {/* name input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" name="name" required />
                                </div>
                                {/* name input */}

                                {/* email input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                </div>
                                {/* email input */}

                                {/* password input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                </div>
                                {/* password input */}
                                <div>
                                    <h1>Already have a Account? <Link to="/login">Login</Link></h1>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="lg:flex flex-col justify-center gap-5 hidden lg:block">
                        <h1 className="text-4xl font-extrabold">Create Account</h1>
                        <h1 className="text-2xl font-semibold">What will you get?</h1>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <RiBreadLine className="text-lg " />
                                <h1>Many </h1>
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
            <ToastContainer />
        </div>
    );
};

export default Register