import React from "react";
import FeedNav from "./FeedNav";
import { posts } from "../utils/data";
import FeedPost from "./FeedPost";

const Feed = () => {
  return (
    <>
      <div className="container pt-12 mx-auto max-w-full">
        <FeedNav />
      </div>
      <div className="container pt-5 mx-auto max-w-full">
        <div className="grid grid-cols-6">
          <div className="md:col-span-4 col-span-6">
            {posts.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </div>
          <div className="hidden md:block col-span-2"></div>
        </div>
      </div>
    </>
  );
};

export default Feed;
