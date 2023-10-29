/* eslint-disable react/prop-types */

const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1698491973446-14ef657c1e99?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            this is the title of my blog
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@blog username</p>
          <div className="flex space-x-2 text-sm">
            <p>blog posted date</p>
            <p>blog posted time</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          blog posted description
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
