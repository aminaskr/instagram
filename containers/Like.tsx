import React, { useEffect, useState } from "react";
import LikeView from "@/components/LikeView";
import { likeController } from "@/services/http";
import toast, { Toaster } from "react-hot-toast";

export type LikeProps = {
  isLiked: boolean;
  handleLike: () => void;
  postId: string;
};

function Like({ isLiked, handleLike, postId }: LikeProps) {
  const [isLikedState, setIsLikedState] = useState(false);

  useEffect(() => {
    setIsLikedState(isLiked);
  }, [isLiked]);

  const onLikeChangeHandlere = async () => {
    try {
      setIsLikedState((prevIsLiked) => !prevIsLiked);

      const response = await likeController.likeOrDislikePost(postId);
      handleLike();

      if (response.status !== 200) {
        toast.error(
          "Failed to like/dislike post. Status code: " + response.status
        );
        setIsLikedState((prevIsLiked) => !prevIsLiked);
      }
    } catch (error) {
      toast.error("Error liking/disliking post: " + error);
      setIsLikedState((prevIsLiked) => !prevIsLiked);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <LikeView isLiked={isLikedState} handleLike={onLikeChangeHandlere} />
    </>
  );
}

export default Like;
