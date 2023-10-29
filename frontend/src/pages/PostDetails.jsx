import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            post.title
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p className="cursor-pointer">
              <BiEdit />
            </p>
            <p className="cursor-pointer">
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>post.username</p>
          <div className="flex space-x-2">
            <p>post.updatedAt</p>
            <p>post.updatedAt</p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1698490761929-faf982c7f6af?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full  mx-auto mt-8"
          alt=""
        />
        <p className="mx-auto mt-8">post.desc</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <h1>ai</h1>
            <h1>tech</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
