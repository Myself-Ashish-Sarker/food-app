import { Link, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {

    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname);

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Service",
            path: "/service"
        },
        {
            title: "About",
            path: "/about"
        }
    ]
    return (
        <div>
            <div className="navbar bg-[#f9f6f1]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links.map(link => <Link key={link.title} to={link.path}>{link.title}</Link>)
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="space-x-4">
                            {
                                links.map(link => <Link className="font-semibold text-[1rem]" key={link.title} to={link.path}>{link.title}</Link>)
                            }
                        </div>
                    </ul>
                </div>
                <div className="navbar-end z-30">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="">
                                <BsPersonCircle className="text-3xl" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link className="justify-between">Profile</Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar