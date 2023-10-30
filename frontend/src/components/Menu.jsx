
import { Link } from "react-router-dom";
import ToDoContext from "../context/mainContext";
import { useContext } from "react";
const Menu = () => {
  const {setUser} = useContext(ToDoContext)
  return (
    <div className="bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
      <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
        <Link to="/profile/123456" >Profile</Link> 
      </h3>

      <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
        <Link to="/myblogs/12333">My blogs</Link>
      </h3>

      <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
        <button onClick={() => setUser(null)}>Logout</button>
      </h3>
    </div>
  );
};

export default Menu;
