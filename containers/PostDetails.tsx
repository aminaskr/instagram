// import { explorePosts } from "@/constants/ExplorePosts";
import React, { useEffect, useState } from "react";
import PostDetailsView from "@/components/PostDetailsView";
// import { getDate } from "@/constants/Comments";
import { postController } from "@/services/http";
import { userController } from "@/services/http";
import { commentController } from "@/services/http";
import { CommentRequestDto } from "@/services/generated/data-contracts";
import { getFriendlyDiff } from "@/utils/UserHelper";

const PostDetails = (props: { id: string | string[] }) => {
  const [post, setPost] = useState<any>(null);
  const [loggedUser, setLoggedUser] = useState<any>("");
  console.log(post);

  const postId = props.id;

  useEffect(() => {
    if (typeof postId === "string") {
      const query = { postId };
      postController.getPostById(postId, query).then((res) => {
        setPost(res.data);
      });
    }
    if (localStorage.getItem("currentUser") !== null) {
      let curr = JSON.parse(localStorage.getItem("currentUser")!);
      setLoggedUser(curr);
    }
  }, []);

  const handleLike = () => {
    // console.log("like promjena");
    if (typeof postId === "string") {
      const query = { postId };
      postController.getPostById(postId, query).then((res) => {
        setPost(res.data);
      });
    }
  };

  const handleFollow = (userId: string) => {
    userController.followUnfollowUser(post.user.id).then((res) => {
      // console.log(res);
      // setPost(...post, following: !post.user.following)
    });
  };

  const handleAddComment = (content: string) => {
    const data: CommentRequestDto = { content };
    commentController.createComment(post.id, data).then((res) => {
      console.log(res);
      if (typeof postId === "string") {
        const query = { postId };
        postController.getPostById(postId, query).then((res) => {
          setPost(res.data);
        });
      }
    });
  };

  return (
    post !== null && (
      <PostDetailsView
        caption={post.caption}
        postId={post.id}
        photoUrl={post.imageId}
        profilePhotoUrl={post.user.imageId}
        fullName={post.user.fullName}
        username={post.user.username}
        userId={post.user.id}
        isLiked={post.liked}
        likesCount={post.likesCount}
        handleLike={handleLike}
        handleFollow={handleFollow}
        commentsCount={post.commentsCount}
        handleAddComment={handleAddComment}
        iAmfollowing={post.user.following}
        loggedUser={loggedUser}
        createdAt={getFriendlyDiff(new Date(post.createdAt))}
      />
    )
  );
};

export default PostDetails;
