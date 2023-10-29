/* eslint-disable react/prop-types */


const ProfilePosts = ({ p }) => {
  // console.log(p)
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1698341495465-a3627dbdff48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          post title
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@ username</p>
          <div className="flex space-x-2">
            <p>dateeeeeeeeeeeee</p>
            <p>time</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          post description
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
