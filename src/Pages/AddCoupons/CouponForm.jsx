import { FaRegCalendarAlt } from "react-icons/fa";
import doc1 from "../../assets/doc1.png";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const CouponForm = () => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const handleDropdown = () => {
    setIsDropDownOpen(!isDropdownOpen);
  };

  const AllDoctors = [
    {
      image: "https://i.ibb.co/2dr4P4g/doc1.png",
      name: "Alina Methew",
    },
    {
      image: "https://i.ibb.co/rZPk3hP/doc2.png",
      name: " Jack Jones",
    },
    {
      image: "https://i.ibb.co/F0GLFTt/doc3.png",
      name: "Raya Kamat",
    },
    {
      image: "https://i.ibb.co/XLS2L7X/doc4.png",
      name: " Reshmi Desai",
    },
    {
      image: "https://i.ibb.co/3YbJyF7/doc5.png",
      name: "Darmesh Saglani",
    },
  ];
  return (
    <>
      <div className="px-10 font-medium text-[#28643b] breadcrumbs">
        <ul>
          <li>Coupons</li>

          <li>Add New Coupon</li>
        </ul>
      </div>
      <div className="px-10 py-10">
        <div className="bg-white w-full px-5 py-5 rounded-xl">
          <h1 className="font-medium text-lg">Add Coupon</h1>
          <div className="py-3">
            <form>
              <div>
                {/* 1st row */}
                <div className="md:flex items-center gap-16 py-6">
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1  -translate-x-1/2  text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Visibility
                      <span className="text-red-600 ml-1 ">*</span>
                    </label>
                    <select
                      id="userType"
                      className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                      <option value=""></option>
                      <option value="Show it to All Doctors">
                        Show it to All Doctors
                      </option>
                      <option value="Show it to certain specialities">
                        Show it to certain specialities
                      </option>
                      <option value="Show it to doctors with certain concern">
                        Show it to doctors with certain concern
                      </option>
                      <option value="Select Particular Docs">
                        Select Particular Docs
                      </option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1  -translate-x-7 text-left text-gray-400 bg-white z-10 text-xs font-bold ml-14">
                      Select Certain (Based on visibility)
                      <span className="text-red-600 ml-1">*</span>
                    </label>
                    <div
                      onClick={handleDropdown}
                      className="relative  flex items-center justify-between w-full mt-3 py-4 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                      {" "}
                      <h1 className="font-medium">All Doctors</h1>
                      {isDropdownOpen ? (
                        <div className="absolute z-30 space-y-3 bg-white border rounded-lg px-5 py-1 w-full left-0 top-12 shadow-lg">
                          {AllDoctors?.map((doctor, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              {" "}
                              <img src={doctor?.image} alt="" />
                              {doctor?.name}
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                      <IoIosArrowDown className="font-bold text-black" />
                    </div>
                  </div>
                </div>
                {/* 2nd row */}
                <div className="md:flex items-center gap-16 py-6">
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1  -translate-x-8 text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Coupon Name/Code
                      <span className="text-red-600 ml-1 ">*</span>
                    </label>
                    <select
                      id="userType"
                      className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                      <option value=""></option>
                      <option value="userType1">User Type 1</option>
                      <option value="userType2">User Type 2</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-5  -translate-x-8  text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Description
                      <span className="text-red-600 ml-1 ">*</span>
                    </label>
                    <input
                      id="userType"
                      type="text"
                      className="relative w-full mt-7 py-7 px-3  border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none"></input>
                  </div>
                </div>
                {/* 3rd row */}
                <div className="md:flex items-center gap-16 py-6">
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1  -translate-x-7 text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Discount Type
                      <span className="text-red-600 ml-1 ">*</span>
                    </label>
                    <select
                      id="userType"
                      className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                      <option value=""></option>
                      <option value="Percentage Off">Percentage Off</option>
                      <option value="Fixed Amount Off">Fixed Amount Off</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1  -translate-x-7 text-left text-gray-400 bg-white z-10 text-xs font-bold ml-14">
                      Enter (Based on Discount Type)
                      <span className="text-red-600 ml-1">*</span>
                    </label>
                    <select
                      id="userType"
                      className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                      <option value=""></option>
                      <option value="userType1">User Type 1</option>
                      <option value="userType2">User Type 2</option>
                    </select>
                  </div>
                </div>
                {/* 4th row */}
                <div className="md:flex items-center gap-16 py-6">
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1  -translate-x-7 text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Appointment Type
                      <span className="text-red-600 ml-1 ">*</span>
                    </label>
                    <select
                      id="userType"
                      className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                      <option value=""></option>
                      <option value="All">All</option>
                      <option value="Offline">Offline</option>
                      <option value="Chat">Chat</option>
                      <option value="Audio">Audio</option>
                      <option value="Video">Video</option>
                    </select>
                  </div>
                  <div className="w-full"></div>
                </div>
                {/* 5th row */}
                <div className="md:flex items-center gap-16 py-6">
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1 -translate-x-7 text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Total Inventory{" "}
                      <span className="text-red-600 ml-1 ">*</span>
                    </label>
                    <select
                      id="userType"
                      className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                      <option value=""></option>
                      <option value="userType1">User Type 1</option>
                      <option value="userType2">User Type 2</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1  -translate-x-7 text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Max Redemption by per Doctor
                      <span className="text-red-600 ml-1">*</span>
                    </label>
                    <select
                      id="userType"
                      className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                      <option value=""></option>
                      <option value="userType1">User Type 1</option>
                      <option value="userType2">User Type 2</option>
                    </select>
                  </div>
                </div>
                {/* 6th row */}
                <div className="md:flex items-center gap-16 py-6">
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1 -translate-x-7 text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Valid From <span className="text-red-600 ml-1 ">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="calender"
                        id="userType"
                        className=" w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none"></input>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-3 pointer-events-none">
                        <FaRegCalendarAlt className="text-gray-400 text-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="userType"
                      className="absolute transform mt-1  -translate-x-7 text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                      Valid Till
                      <span className="text-red-600 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="calender"
                        id="userType"
                        className=" w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none"></input>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-3 pointer-events-none">
                        <FaRegCalendarAlt className="text-gray-400 text-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-5 mt-4 mb-2">
                <button className="px-7 py-2 rounded-xl font-medium bg-[#f5f5f6] ">
                  Clear All
                </button>
                <button className="px-7 py-2 rounded-xl font-medium bg-[#28643b] text-white">
                  Add Coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponForm;
