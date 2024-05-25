import { FaSearch } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import plus from "../../assets/plus.png";
import reload from "../../assets/reload.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import CouponDetails from "./CouponDetails";
const CouponList = () => {
  return (
    <div>
      <div className="px-10 py-10">
        <div className="bg-white w-full px-5 py-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="font-medium text-lg">Coupon List</h1>
              <div className="relative px-4">
                <FaSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="bg-[#f5f7f5] color-[#b8cbbd] py-2 px-4 rounded-xl focus:outline-none pl-10 "
                  type="text"
                  placeholder="search here"
                />
              </div>
              <div className="flex gap-3 items-center">
                <img src={plus} alt="" />
                <img src={reload} alt="" />
                <BsCalendar3 className="text-2xl text-[#3a643b]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineFileDownload className="text-2xl text-[#3a643b]" />
              <LuArrowUpDown className="text-2xl text-[#3a643b]" />
            </div>
          </div>

          <div className="py-3">
            <div>
              <CouponDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponList;
