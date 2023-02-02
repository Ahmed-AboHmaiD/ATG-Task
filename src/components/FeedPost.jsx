import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { GiShare } from "react-icons/gi";
import { BsCalendarEvent, BsBag } from "react-icons/bs";
import PostAbout from "./PostAbout";

const FeedPost = ({
  post: {
    img,
    userImg,
    userName,
    name,
    title,
    info,
    views,
    button,
    info_2,
    location,
    type,
  },
}) => {
  return (
    <div className="border mb-3 shadow-sm">
      <div>{img && <img src={img} alt={title} className="w-full" />}</div>
      <div className="p-4">
        <p>{name}</p>
        <div>
          <div className="grid grid-cols-6 font-bold my-3">
            <div className="text-lg col-span-5">{title}</div>
            <div className="text-lg col-span-1 ml-auto cursor-pointer">
              <BsThreeDots />
            </div>
          </div>
          {info ? (
            <p className="text-gray_1 overflow-hidden text-ellipsis whitespace-nowrap w-80 md:w-96 lg:whitespace-normal lg:w-auto">{info}</p>
          ) : (
            (type === "events" || type === "jobs") && (
              <PostAbout
                button={button}
                info={info_2}
                location={location}
                Event={BsCalendarEvent}
                Job={BsBag}
              />
            )
          )}
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex items-center flex-1">
            <div>
              <img src={userImg} alt={userName} />
            </div>
            <div className="ml-3">
              <p>{userName}</p>
              <div className="text-gray_4 text-sm md:hidden block">
                <span>{views} views</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-gray_4 md:block hidden">
              <GrView className="inline mr-2" />
              <span>{views} views</span>
            </div>
            <div className="ml-7 bg-shareBg p-2 rounded-md flex items-center">
              <GiShare className="text-lg" />
              <p className="md:hidden block ml-2 text-sm">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
