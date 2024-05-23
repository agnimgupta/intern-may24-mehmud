const CouponForm = () => {
  return (
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
                    {/* <option value="">Select Type</option> */}
                    <option value="userType1">User Type 1</option>
                    <option value="userType2">User Type 2</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="userType"
                    className="absolute transform mt-1  -translate-x-7 text-left text-gray-400 bg-white z-10 text-xs font-bold ml-14">
                    Select Certain (Based on visibility)
                    <span className="text-red-600 ml-1">*</span>
                  </label>
                  <select
                    id="userType"
                    className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                    {/* <option value="">Select Type</option> */}
                    <option value="userType1">User Type 1</option>
                    <option value="userType2">User Type 2</option>
                  </select>
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
                    {/* <option value="">Select Type</option> */}
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
                    {/* <option value="">Select Type</option> */}
                    <option value="userType1">User Type 1</option>
                    <option value="userType2">User Type 2</option>
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
                    {/* <option value="">Select Type</option> */}
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
                    {/* <option value="">Select Type</option> */}
                    <option value="userType1">User Type 1</option>
                    <option value="userType2">User Type 2</option>
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
                    {/* <option value="">Select Type</option> */}
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
                    {/* <option value="">Select Type</option> */}
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
                    Total Inventory{" "}
                    <span className="text-red-600 ml-1 ">*</span>
                  </label>
                  <select
                    id="userType"
                    className="relative w-full mt-3 py-3 px-3 border-[1.9px] border-gray-[#eaebf6] rounded-xl text-sm  outline-none">
                    {/* <option value="">Select Type</option> */}
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
                    {/* <option value="">Select Type</option> */}
                    <option value="userType1">User Type 1</option>
                    <option value="userType2">User Type 2</option>
                  </select>
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
  );
};

export default CouponForm;
