import logo from "../assets/logo.png";
import amrutam from "../assets/logoSpell.png";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="flex bg-red-500 py-5 items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-14" src={logo} alt="" />
          <img className="h-14" src={amrutam} alt="" />
          <FaBars />
          <div className="relative px-4">
            <FaSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="bg-[#f5f7f5] color-[#b8cbbd] py-2 px-4 rounded-xl focus:outline-none pl-10 "
              type="text"
              placeholder="search here"
            />
          </div>
        </div>
        <div>profile</div>
      </div>
    </div>
  );
};

export default Navbar;
