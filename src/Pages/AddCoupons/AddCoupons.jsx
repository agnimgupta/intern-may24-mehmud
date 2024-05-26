import { useContext } from "react";
import { ModalContext } from "../ModalContext/ModalProvider";
import { NavLink } from "react-router-dom";

const AddCoupons = () => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  return (
    <div className="h-screen flex items-center justify-center">
      {isModalOpen ? (
        <div className=" inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-3xl shadow-xl w-96 p-6">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-green-700">
                Add New Coupon
              </h2>
              <p className="text-gray-800 font-bold mt-4">
                Please select the type of user for whom you want to create
                coupon
              </p>
            </div>
            <form className="space-y-7">
              <div>
                <label
                  htmlFor="userType"
                  className="absolute transform mt-1  -translate-x-1/2  text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                  Select Type<span className="text-red-500">*</span>
                </label>
                <select
                  id="userType"
                  className="relative w-full mt-3 py-4 px-3 border-[2px] border-gray-[#eaebf6] rounded-xl text-sm font-medium outline-none">
                  <option value=""></option>
                  <option value="userType1">User Type 1</option>
                  <option value="userType2">User Type 2</option>
                </select>
              </div>
              <NavLink to="/couponForm">
                <button
                  onClick={closeModal}
                  type="button"
                  className="w-full mt-5 py-4 font-bold bg-[#3a643b] text-white rounded-xl ">
                  Next
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddCoupons;
