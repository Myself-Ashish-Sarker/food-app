import img from "/showcase_menu/1.png";
import menu1 from "/showcase_menu/menu1.png";
import menu2 from "/showcase_menu/menu2.png";
import menu3 from "/showcase_menu/menu3.png";
import menu4 from "/showcase_menu/menu4.png";
import menu5 from "/showcase_menu/menu5.png";
import menu6 from "/showcase_menu/menu6.png";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { PiBreadFill } from "react-icons/pi";
import { GiHotDog } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";

const ShowcaseMenu = () => {
    return (
        <div className='bg-[#f9f6f1]'>
            <div>
                <div className="relative">
                    <h1 className='pt-10 lobster-two-bold text-center text-red-500 text-lg'>Popular Food Menu</h1>
                    <h1 className='text-5xl text-center pt-4 font-bold'>Choose Your Best Menu</h1>
                    <div className="absolute left-40 top-16">
                        <PiBreadFill className="text-[6rem] rotate-45 opacity-10 -z-20" />
                    </div>
                    <div className="absolute right-40 top-16">
                        <GiHotDog className="text-[6rem] rotate-12 opacity-10 -z-20 re" />
                    </div>
                    <div className="absolute right-[20rem] top-[30rem]">
                        <PiBowlFoodFill className="text-[6rem] rotate-12 opacity-10 -z-20 re" />
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="flex flex-col gap-1">
                        {/*  */}
                        <div className="flex items-center gap-5">
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
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaRegStar className="text-red-500" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr />
                        </div>
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
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaRegStar className="text-red-500" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr />
                        </div>
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
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaRegStar className="text-red-500" />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                    <div>
                        <img className="w-96" src={img} alt="" />
                    </div>
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
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaRegStar className="text-red-500" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr />
                        </div>
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
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaRegStar className="text-red-500" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr />
                        </div>
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
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaRegStar className="text-red-500" />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseMenu