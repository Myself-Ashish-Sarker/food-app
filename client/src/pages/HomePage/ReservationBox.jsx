import { FaPhoneAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./font.css"

const ReservationBox = () => {
    return (
        <div className="px-16 mt-24">
            <div className="bg-[#eb0029] rounded-md -top-4">
                <div className="flex justify-between items-center p-12">
                    <div className="flex lg:flex-col gap-3">
                        <h1 className="lobster-two-bold text-white">Book Your Seat</h1>
                        <h1 className="text-2xl text-white">Make Reservation</h1>
                        <p className="text-white text-sm">Enjoy hassle-free dinning experience</p>
                    </div>
                    <div className="">
                        <div className="flex gap-5">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="number" className="grow" placeholder="Phone Number" />
                                <FaPhoneAlt className="text-red-500" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Date (dd/mm/yyyy)" />
                                <SlCalender className="text-red-500" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Time (PM / AM)" />
                                <FaClock className="text-red-500" />
                            </label>
                        </div>
                        <div className="flex gap-5 pt-3">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Total Guests" />
                                <IoPersonAdd className="text-red-500" />
                            </label>
                            <label className="input flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Message" />
                                <FaMessage className="text-red-500" />
                            </label>
                            <div className="flex justify-center w-full">
                                <button className="flex justify-center items-center  bg-[#010f1c] px-16 rounded-lg border-2 border-white text-white">
                                    Send Message <FaLongArrowAltRight className="ml-3" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationBox