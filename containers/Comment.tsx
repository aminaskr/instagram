import React from "react";
import { getDate } from "@/constants/Comments";
import CommentView from "@/components/CommentView";
import { getFriendlyDiff } from "@/utils/UserHelper";
import { commentController } from "@/services/http";
import { CommentDto } from "@/services/generated/data-contracts";

const Comment = ({ id, user, content, createdAt }: CommentDto) => {
  const deleteComment = () => {
    if (id !== undefined) {
      const commentId = id;
      commentController.deleteComment(commentId).then((res) => {
        console.log(res.data);
      });
    }
  };

  // console.log(createdAt);

  return (
    <>
      <CommentView
        userId={user?.id!}
        userPhoto={user?.imageId!}
        fullName={user?.fullName!}
        username={user?.username!}
        comment={content!}
        deleteComment={deleteComment}
        createdAt={getFriendlyDiff(new Date(createdAt!))}
      />
    </>
  );
};

export default Comment;
