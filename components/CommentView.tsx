import React, { useEffect, useState } from "react";
import Image from "next/image";
import { downloadImage } from "@/utils/UserHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export type CommentViewProps = {
  userId: string;
  userPhoto: string;
  fullName: string;
  username: string;
  comment: string;
  deleteComment: () => void;
  createdAt: string;
};

const CommentView = ({
  userId,
  userPhoto,
  fullName,
  username,
  comment,
  deleteComment,
  createdAt,
}: CommentViewProps) => {
  const [userImage, setUserImage] = useState("");
  const [loggedUserId, setLoggedUserId] = useState<any>("");
  // console.log(createdAt);

  useEffect(() => {
    downloadImage(userPhoto).then((res) => {
      setUserImage(res);
    });
    if (localStorage.getItem("currentUser") !== null) {
      let curr = JSON.parse(localStorage.getItem("currentUser")!);
      setLoggedUserId(curr.id);
    }
  }, []);

  return (
    <div className="flex items-center w-[95%] py-1 text-white text-sm">
      {userImage && (
        <>
          <Image
            src={userImage}
            priority
            alt="about"
            width={100}
            height={100}
            className="w-8 h-8 my-3 mr-3 rounded-full cursor-pointer"
            style={{ objectFit: "cover" }}
          />
          <div className="w-5/6">
            <div className="mb-2 leading-[18px]">
              <span className="mr-3 font-bold cursor-pointer">{username}</span>
              <span>{comment}</span>
            </div>
            <div className="text-xs">
              <span className="font-thin mr-5">{createdAt}</span>
              <span className="font-light cursor-pointer mr-4">Reply</span>
              {/* <span className=" cursor-pointer">Delete</span> */}
              {loggedUserId === userId && (
                <FontAwesomeIcon
                  onClick={deleteComment}
                  icon={faTrashAlt}
                  className="text-gray-400 cursor-pointer"
                  size="lg"
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CommentView;
