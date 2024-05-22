import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import dashboard from "../assets/dashboard.png";
import doctors from "../assets/doctor.png";
import patients from "../assets/patient.png";
import appointments from "../assets/appointment.png";
import specialty from "../assets/speciality.png";
import coupons from "../assets/coupons.png";
import concerns from "../assets/concerns.png";
import referral from "../assets/referral.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const [isCouponsDropdownOpen, setIsCouponsDropdownOpen] = useState(false);

  const toggleCouponsDropdown = () => {
    setIsCouponsDropdownOpen(!isCouponsDropdownOpen);
  };

  return (
    <div>
      <div className="flex h-full mt-5 rounded-tr-3xl">
        <div className="w-64 min-h-full rounded-tr-3xl bg-white">
          <h1 className="px-4 pt-4 font-medium">Main</h1>
          <ul className="menu text-lg mb-5 p-4 space-y-6 mt-5">
            <li className="flex items-center justify-between">
              <NavLink
                className="flex items-center gap-3 font-medium text-[#666776]"
                to="/dashboard">
                <img src={dashboard} alt="" />
                Dashboard
              </NavLink>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between">
              <NavLink
                className="flex items-center gap-3 font-medium text-[#666776]"
                to="/doctors">
                <img src={doctors} alt="" />
                Doctors
              </NavLink>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between">
              <NavLink
                className="flex items-center gap-3 font-medium text-[#666776]"
                to="/patients">
                <img src={patients} alt="" />
                Patients
              </NavLink>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between">
              <NavLink
                className="flex items-center gap-3 font-medium text-[#666776]"
                to="/appointments">
                <img src={appointments} alt="" />
                Appointments
              </NavLink>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between">
              <NavLink
                className="flex items-center gap-3 font-medium text-[#666776]"
                to="/specialty">
                <img src={specialty} alt="" />
                Specialty
              </NavLink>
              <IoIosArrowForward />
            </li>
            <li className="flex flex-col">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleCouponsDropdown}>
                <div className="flex items-center gap-3 font-medium text-[#666776]">
                  <img src={coupons} alt="" />
                  Coupons
                </div>
                {isCouponsDropdownOpen ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowForward />
                )}
              </div>
              {isCouponsDropdownOpen ? (
                <div>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>
                      <NavLink
                        className="flex items-center gap-3 font-medium text-[#666776]"
                        to="/coupons/discount">
                        Discount Coupons
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="flex items-center gap-3 font-medium text-[#666776]"
                        to="/coupons/special-offers">
                        Special Offers
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {/* {isCouponsDropdownOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <NavLink className="flex items-center gap-3 font-medium text-[#666776]" to="/coupons/discount">
                      Discount Coupons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="flex items-center gap-3 font-medium text-[#666776]" to="/coupons/special-offers">
                      Special Offers
                    </NavLink>
                  </li>
                </ul>
              )} */}
            </li>
            <li className="flex items-center justify-between">
              <NavLink
                className="flex items-center gap-3 font-medium text-[#666776]"
                to="/concerns">
                <img src={concerns} alt="" />
                Concerns
              </NavLink>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between">
              <NavLink
                className="flex items-center gap-3 font-medium text-[#666776]"
                to="/referral">
                <img src={referral} alt="" />
                Referral
              </NavLink>
              <IoIosArrowForward />
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-main-blue-100">
          <div>{/* <Navbar></Navbar> */}</div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
