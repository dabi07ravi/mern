import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">Blog Market</h1>
      <div className="flex justify-center items-center space-x-0">
        <p className="cursor-pointer">
          <BsSearch />
        </p>
        <input
          className="outline-none px-3 "
          placeholder="Search a post"
          type="text"
        />
      </div>
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {/* <h3>Write</h3> */}
        {/* <h3>Login</h3> */}
        <div>
          <p className="cursor-pointer relative">
            <FaBars />
          </p>
          <Menu />
        </div>
        {/* <h3>Register</h3> */}
      </div>
    </div>
  );
};

export default Navbar;
