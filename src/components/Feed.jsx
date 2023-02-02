import React, { useEffect, useState } from "react";
import FeedNav from "./FeedNav";
import FeedPost from "./FeedPost";
import FeedSideBar from "./FeedSideBar";

const Feed = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleIsJoined = (isJoined) => {
    setIsJoined(!isJoined);
  };

  const fetchData = async () => {
    const res = await fetch(
      "https://ahmed-abohmaid.github.io/ATG-Task/utils/data.json"
    );
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    fetchData().then((data) => setPosts(data));
  }, []);


  return (
    <>
      <div className="container pt-12 mx-auto max-w-full">
        <FeedNav />
      </div>
      <div className="container pt-5 mx-auto max-w-full">
        <div className="grid grid-cols-7 gap-5">
          <div className="md:col-span-4 col-span-7">
            {posts.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </div>
          <div className="hidden md:block col-span-3 ml-auto">
            <FeedSideBar joined={isJoined} setJoined={handleIsJoined} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
