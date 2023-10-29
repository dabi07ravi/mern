
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import ProfilePosts from "../components/ProfilePosts";

const MyBlogs = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        <ProfilePosts />
        <ProfilePosts />
        <ProfilePosts />
        <ProfilePosts />
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogs;
