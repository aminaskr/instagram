import PostView from "../components/PostView";
import { Comment } from "@/constants/Posts";
import { useEffect, useState } from "react";
import { postController, userController } from "@/services/http";
import { UserDto } from "@/services/generated/data-contracts";
import { downloadImage, getFriendlyDiff } from "@/utils/UserHelper";

type PostProps = {
  userId: string;
  fullName: string;
  username: string;
  profilePhotoUrl: string;
  postPhotoUrl: string;
  postDate: Date;
  likesCount: number;
  description: string;
  isLiked: boolean;
  getPosts: () => void;
  postId: string;
  commentsCount: number;
};

const Post = ({
  userId,
  fullName,
  username,
  profilePhotoUrl,
  postPhotoUrl,
  postDate,
  likesCount,
  description,
  isLiked,
  getPosts,
  postId,
  commentsCount,
}: PostProps) => {
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const [postPhoto, setPostPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [loggedUser, setLoggedUser] = useState<any>("");
  const [updateFollowings, setUpdateFollowings] = useState(false);

  useEffect(() => {
    downloadImage(postPhotoUrl).then((res) => {
      setPostPhoto(res);
    });
    downloadImage(profilePhotoUrl).then((res) => {
      setProfilePhoto(res);
    });
    if (localStorage.getItem("currentUser") !== null) {
      let curr = JSON.parse(localStorage.getItem("currentUser")!);
      setLoggedUser(curr);
    }
  }, []);

  const handleLike = () => {
    // console.log("like promjena");
    postController.getAllPostsHome().then((res) => {
      console.log(res);
      getPosts();
    });
  };

  const handleFollow = (id: string) => {
    // console.log("follow promjena");
    userController.followUnfollowUser(id).then((res) => {
      console.log(res);
      setUpdateFollowings((prev) => !prev);
      getPosts();
    });
  };

  return (
    <>
      {profilePhoto ? (
        <PostView
          fullName={fullName}
          username={username}
          profilePhotoUrl={profilePhoto}
          postPhotoUrl={postPhoto}
          postDate={getFriendlyDiff(postDate)}
          postId={postId}
          likesCount={likesCount}
          description={description}
          isLiked={isLiked}
          handleLike={handleLike}
          handleFollow={handleFollow}
          loggedUser={loggedUser}
          commentsCount={commentsCount}
          showMoreDesc={showMoreDesc}
          setShowMoreDesc={setShowMoreDesc}
          updateFollowings={updateFollowings}
        />
      ) : (
        <div className="bg-black w-screen text-xl text-white"></div>
      )}
    </>
  );
};

export default Post;
