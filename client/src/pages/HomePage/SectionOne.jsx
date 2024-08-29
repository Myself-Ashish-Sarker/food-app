import img from "/section_images/section1.jpg";
import { TiTick } from "react-icons/ti";
import "./SectionOne.css"

const SectionOne = () => {
    return (
        <>
            <div className="mt-24 flex justify-center gap-16 pb-24">
                <div>
                    <img className="rounded-md w-[30rem]" src={img} alt="section image" />
                </div>
                <div>
                    <h1 className="lobster-two-bold text-red-500 text-lg">About Company</h1>
                    <h1 className="mt-4 w-[30rem] text-4xl font-bold">We Make Sure Healthy and Quality Food</h1>
                    <p className="mt-4">Conveys the true and good quality nutritios food</p>
                    <p>We make sure the provided foods are in best</p>
                    <div className="mt-4">
                        <div className="flex items-center gap-10">
                            <div className="flex items-center">
                                <TiTick className="text-red-600 text-3xl" />
                                <p className="font-semibold">Food Items Management</p>
                            </div>
                            <div className="flex items-center">
                                <TiTick className="text-red-600 text-3xl" />
                                <p className="font-semibold">Table Reservation</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <div className="flex items-center">
                                <TiTick className="text-red-600 text-3xl" />
                                <p className="font-semibold">Customer Feedback Portal</p>
                            </div>
                            <div className="flex items-center">
                                <TiTick className="text-red-600 text-3xl" />
                                <p className="font-semibold">Location Based Service</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-[#010f1c] hover:transition-transform">See Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionOne