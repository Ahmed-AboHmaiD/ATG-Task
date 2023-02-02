import React from "react";
import { NavLink } from "react-router-dom";
import { MdGroupAdd, MdOutlineArrowDropDown } from "react-icons/md";
import { links } from "../utils/data";

const isNotActiveStyle = "pb-6 z-10";
const isActiveStyle = "border-b pb-6 z-10 text-black border-b-black";

const FeedNav = () => {
  return (
    <div className="hidden md:grid grid-cols-6 gap-5 relative before:absolute before:h-px before:bottom-[0.5px] before:w-full before:bg-gray_3 before:z-0">
      <div className="col-span-4">
        <ul className="flex items-center gap-4 text-gray_2 text-xs sm:text-sm md:text-base lg:text-md">
          <li className="pb-6 z-10 hover:text-black transition-all duration-75">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              All Posts (32)
            </NavLink>
          </li>
          {links.map((link) => (
            <li
              key={link.id}
              className="pb-6 z-10 hover:text-black transition-all duration-75"
            >
              <NavLink
                to={`/posts/${link.type}`}
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 flex items-center gap-small xl:gap-3">
        <button className=" bg-shareBg px-1 py-1 rounded-md flex items-center justify-start font-medium text-xs sm:text-[11.4px] md:text-[14px] lg:text-lg">
          <span className="flex-1">Write a post</span>
          <MdOutlineArrowDropDown className="inline text-lg" />
        </button>
        <button className="flex items-center bg-blue_1 text-white px-1 py-1 rounded-md font-medium text-xs sm:text-[11.4px] md:text-[14px] lg:text-lg">
          <MdGroupAdd className="inline text-lg mr-1" />
          <span className="flex-1">Join Groupe</span>
        </button>
      </div>
    </div>
  );
};

export default FeedNav;
