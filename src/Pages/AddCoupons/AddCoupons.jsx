import { useContext } from "react";
import { ModalContext } from "../ModalContext/ModalProvider";
import { NavLink } from "react-router-dom";

const AddCoupons = () => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  return (
    <div className="">
      {isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6">
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
                  className="block mt-4 text-left text-gray-700">
                  Select Type<span className="text-red-500">*</span>
                </label>
                <select
                  id="userType"
                  className="w-full mt-3 p-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500">
                  <option value="">Select Type</option>
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
