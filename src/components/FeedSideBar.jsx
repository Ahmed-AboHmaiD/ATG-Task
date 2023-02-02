import React from "react";

const FeedSideBar = () => {
  return (
    <div>
      <div className="flex justify-start items-center px-3 border-none outline-none focus-within:shadow-sm bg-white">
        <div className="inline-block"></div>
        <input
          type="search"
          name="search"
          className="p-2 outline-none bg-white"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
    </div>
  );
};

export default FeedSideBar;
