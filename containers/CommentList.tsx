import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { Comment as CommentType } from "@/constants/Posts";
// import { fetchedComments as commentList } from "../constants/Comments";
import Link from "next/link";
import { commentController } from "@/services/http";
import { CommentDto } from "@/services/generated/data-contracts";

const CommentList = (props: { commentsCount: number; postId: string }) => {
  // console.log(props.comments);
  const commentsCount = props.commentsCount;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<any>("");
  // console.log(comments);

  useEffect(() => {
    commentController.getCommentsByPostId(props.postId).then((res) => {
      setComments(res.data);
    });
  }, []);

  return commentsCount <= 2 ? (
    <>
      {comments &&
        comments.map((comment: CommentDto) => (
          <div key={comment.id} className="min-h-max">
            <Comment
              id={comment.id}
              user={comment.user}
              content={comment.content}
              createdAt={comment.createdAt}
            />
          </div>
        ))}
    </>
  ) : !showComments ? (
    <div
      className="text-stone-400 text-sm cursor-pointer w-36"
      onClick={() => setShowComments(true)}
    >
      View all {commentsCount} comments
    </div>
  ) : (
    <>
      {comments &&
        comments.map((comment: CommentDto) => (
          <div key={comment.id} className="min-h-max">
            <Comment
              id={comment.id}
              user={comment.user}
              content={comment.content}
              createdAt={comment.createdAt}
            />
          </div>
        ))}
      <div
        className="text-stone-400 text-xs mt-3 cursor-pointer w-24"
        onClick={() => setShowComments(false)}
      >
        Hide comments
      </div>
    </>
  );
};

export default CommentList;
