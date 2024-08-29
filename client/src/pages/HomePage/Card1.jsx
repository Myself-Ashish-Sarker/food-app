import { FaBowlFood } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const Card1 = () => {
    return (
        <div className="bg-[#010f1c]">
            <div className="flex justify-center items-center py-6 gap-16">
                <div>
                    <div className="flex flex-col items-center gap-3">
                        <FaBowlFood className="text-white text-7xl" />
                        <h1 className="text-white">Fast Foods</h1>
                        <p className="text-[#67788e]">100% Natural Items</p>
                    </div>
                </div>
                <div>
                    <hr className="w-28 border-t-2 rotate-90 border-dotted border-white" />
                </div>
                <div>
                    <div className="flex flex-col items-center gap-3">
                        <TbTruckDelivery className="text-white text-7xl" />
                        <h1 className="text-white">Home Delivery</h1>
                        <p className="text-[#67788e]">Food delivery under 50tk</p>
                    </div>
                </div>
                <div>
                    <hr className="w-28 border-t-2 rotate-90 border-dotted border-white" />
                </div>
                <div>
                    <div className="flex flex-col items-center gap-3">
                        <FaMoneyCheckAlt className="text-white text-7xl" />
                        <h1 className="text-white">Low Coasting</h1>
                        <p className="text-[#67788e]">By priortizing efficency</p>
                    </div>
                </div>
                <div>
                    <hr className="w-28 border-t-2 rotate-90 border-dotted border-white" />
                </div>
                <div>
                    <div className="flex flex-col items-center gap-3">
                        <GiPartyPopper className="text-white text-7xl" />
                        <h1 className="text-white">Events & Party</h1>
                        <p className="text-[#67788e]">100% Natural Fast Foods</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card1