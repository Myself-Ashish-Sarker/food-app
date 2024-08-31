import img1 from "/login/1.jpg";
import { Link } from "react-router-dom";

import { RiBreadLine } from "react-icons/ri";

const Login = () => {
    return (
        <div>
            <div className="relative">
                {/* <img className="absolute -right-6 w-24" src={img1} alt="" /> */}
                <img className="object-fill h-screen w-screen opacity-40" src={img1} alt="" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex justify-center gap-24">
                        <div className="bg-white">
                            <div className="bg-base-100 w-[22rem] shadow-xl">
                                <h1 className="pt-8 text-2xl text-center font-semibold">Login</h1>
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
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
        </div>
    );
};

export default Login