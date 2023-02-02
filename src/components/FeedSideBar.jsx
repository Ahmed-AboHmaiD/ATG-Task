import React from "react";

const FeedSideBar = () => {
  return (
    <div>
      <div className="hidden sm:flex w-52 md:w-330 lg:w-360 justify-start items-center px-3 rounded-full border-none outline-none focus-within:shadow-sm text-gray_1 bg-searchBg">
        <div className="inline-block"></div>
        <input
          type="search"
          name="search"
          className="p-2 rounded-full md:w-360 w-190 outline-none bg-searchBg"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
    </div>
  );
};

export default FeedSideBar;
