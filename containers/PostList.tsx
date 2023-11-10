import React, { useEffect, useState } from "react";
// import { posts } from "@/constants/Posts";
import Post from "./Post";
import { postController } from "@/services/http";

const PostList = () => {
  const [homePosts, setHomePosts] = useState<any>([]);
  const [noData, setNoData] = useState(false);

  console.log(homePosts);

  useEffect(() => {
    postController.getAllPostsHome().then((res) => {
      if (res.data.length === 0) {
        setNoData(true);
      }

      setHomePosts(res.data);
    });
  }, []);

  const getPosts = () => {
    postController.getAllPostsHome().then((res) => {
      // console.log("promjena posts");
      if (res.data.length === 0) {
        setNoData(true);
      }
      setHomePosts(res.data);
    });
  };

  return homePosts.length > 0 ? (
    <div className=" pt-4 pb-10 md:pb-0 md:px-20 px-4 lg:px-36 xl:px-20 m-auto sm:w-5/6 xl:w-4/6  ">
      {homePosts.map((post: any) => (
        <div key={post.id}>
          <Post
            userId={post.user.id}
            fullName={post.user.fullName}
            username={post.user.username}
            profilePhotoUrl={post.user.imageId}
            postPhotoUrl={post.imageId}
            postDate={new Date(post.createdAt)}
            likesCount={post.likesCount}
            description={post.caption}
            isLiked={post.liked}
            getPosts={getPosts}
            postId={post.id}
            commentsCount={post.commentsCount}
          />
        </div>
      ))}
    </div>
  ) : noData ? (
    <div className="flex flex-col gap-3 h-screen text-white text-center pt-10">
      <span className="text-xl md:text-3xl font-semibold">No Posts yet.</span>
      <span className="text-md md:text-xl font-light text-gray-200">
        You need to follow users to see their posts.
      </span>
    </div>
  ) : (
    <div className="h-screen text-white text-xl md:text-3xl text-center pt-10">
      Loading Posts..
    </div>
  );
};

export default PostList;
