import { UserDto } from "@/services/generated/data-contracts";
import { postController } from "@/services/http";
import { downloadImage } from "@/utils/UserHelper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type PostLikesFollowingsProps = {
  like: UserDto;
  showLikesModal: boolean;
  loggedUser: UserDto;
  handleFollow: (id: string) => void;
};

const PostLikesFollowings = ({
  like,
  showLikesModal,
  loggedUser,
  handleFollow,
}: PostLikesFollowingsProps) => {
  const [postLike, setPostLike] = useState<any>("");

  useEffect(() => {
    if (showLikesModal) {
      downloadImage(like.imageId!).then((res) => {
        setPostLike({ ...like, imageId: res });
      });
    } else {
      setPostLike(like);
    }
  }, []);

  return (
    postLike &&
    postLike.imageId.includes("blob") && (
      <div className="flex items-center justify-between py-2 px-4    ">
        <div className="flex items-center">
          <Image
            src={postLike.imageId}
            alt="profileimg"
            className="w-12 h-12  object-cover rounded-full"
            height={80}
            width={80}
          />

          <div className="pl-4">
            <div className="font-medium  text-white text-md">
              {postLike.username}
            </div>
            <div className="font-light  text-zinc-400 text-sm">
              {postLike.fullName}
            </div>
          </div>
        </div>
        {loggedUser.id === postLike.id ? (
          ""
        ) : (
          <button
            onClick={() => handleFollow(postLike.id)}
            className="cursor-pointer outline-none  px-5 py-1 rounded-lg text-sm font-medium leading-6 bg-blue-500 hover:bg-blue-600 duration-150  text-white"
          >
            {like.following ? "Unfollow" : "Follow"}
          </button>
        )}
      </div>
    )
  );
};

export default PostLikesFollowings;
