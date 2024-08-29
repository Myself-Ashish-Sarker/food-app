import img from "/showcase_menu/1.png";
import menu1 from "/showcase_menu/menu1.png";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const ShowcaseMenu = () => {
    return (
        <div className='bg-[#f9f6f1]'>
            <div>
                <div>
                    <h1 className='pt-10 lobster-two-bold text-center text-red-500 text-lg'>Popular Food Menu</h1>
                    <h1 className='text-5xl text-center pt-4 font-bold'>Choose Your Best Menu</h1>
                </div>

                <div className="flex justify-center items-center">
                    <div>
                        {/*  */}
                        <div className="flex items-center gap-1">
                            <div>
                                <img className="w-24" src={menu1} alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-semibold">Cheese Noodles...</h1>
                                    <div className="bg-red-400 px-2">
                                        <h1 className="text-white">70 tk.</h1>
                                    </div>
                                </div>
                                <p className="text-[0.7rem]">High Quality Meat</p>
                                <div className="flex">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                    <div>
                        <img className="w-72" src={img} alt="" />
                    </div>
                    <div>
                        <h1>Menu 1</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseMenu