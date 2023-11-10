import React, { useEffect, useState } from "react";
// import { explorePosts } from "@/constants/ExplorePosts";
import PostExplore from "@/components/PostExplore";
import { postController } from "@/services/http";

const ExploreList = () => {
  const [explorePosts, setExplorePosts] = useState<any>([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    postController.getAllPostsExplore().then((res) => {
      // console.log(res);
      if (res.data.length === 0) {
        setNoData(true);
      }
      setExplorePosts(res.data);
    });
  }, []);

  return explorePosts.length > 0 ? (
    <div className="grid grid-cols-3 gap-1 pt-6 pb-12 md:mx-6 xl:p-6 lg:px-20 ">
      {explorePosts.map((post: any) => (
        <div key={post.id}>
          <PostExplore
            id={post.id}
            photo={post.imageId}
            numOfLikes={post.likesCount}
            numOfComments={post.commentsCount}
          />
        </div>
      ))}
    </div>
  ) : noData ? (
    <div className="h-screen text-white text-center text-xl md:text-3xl font-semibold pt-10">
      No Posts yet.
    </div>
  ) : (
    <div className="text-white text-center text-xl md:text-3xl pt-10">
      Loading Posts..
    </div>
  );
};

export default ExploreList;
