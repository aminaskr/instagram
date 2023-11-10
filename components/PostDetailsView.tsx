import Image from "next/image";
import React, {
  LegacyRef,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "../styles/post.module.css";
import Comment from "@/containers/Comment";
import Like from "@/containers/Like";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

import { auth } from "@/services/firebase";
import { downloadImage, getFriendlyDiff } from "@/utils/UserHelper";
import {
  CommentDto,
  CommentRequestDto,
  UserDto,
  UserProfileDto,
} from "@/services/generated/data-contracts";
import { commentController } from "@/services/http";

export type PostDetailsProps = {
  caption: string;
  postId: string;
  photoUrl: string;
  profilePhotoUrl: string;
  fullName: string;
  username: string;
  userId: string;
  isLiked: boolean;
  likesCount: number;
  handleLike: () => void;
  handleFollow: (userId: string) => void;
  commentsCount: number;
  handleAddComment: (comment: string) => void;
  iAmfollowing: boolean;
  loggedUser: UserProfileDto;
  createdAt: string;
};

const PostDetailsView = ({
  caption,
  postId,
  photoUrl,
  profilePhotoUrl,
  fullName,
  username,
  userId,
  isLiked,
  likesCount,
  handleLike,
  handleFollow,
  commentsCount,
  handleAddComment,
  iAmfollowing,
  loggedUser,
  createdAt,
}: PostDetailsProps) => {
  const [postPhoto, setPostPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [loggedUserprofilePhoto, setLoggedUserProfilePhoto] = useState("");
  const [comments, setComments] = useState<any>("");

  const [addComment, setAddComment] = useState<any>("");

  const inputRef = useRef<any>();
  // console.log(caption);

  useEffect(() => {
    downloadImage(profilePhotoUrl).then((res) => {
      setProfilePhoto(res);
    });
    downloadImage(photoUrl).then((res) => {
      setPostPhoto(res);
    });
    commentController.getCommentsByPostId(postId).then((res) => {
      setComments(res.data);
    });
    if (loggedUser.profilePhotoId !== undefined) {
      downloadImage(loggedUser.profilePhotoId).then((res) => {
        setLoggedUserProfilePhoto(res);
      });
    }
  }, [commentsCount]);

  return (
    <div className="bg-black w-full flex flex-col justify-center sm:px-6 lg:px-12 pt-8 pb-16">
      <div
        className="relative grid grid-cols-1  md:grid-cols-3  text-white"
        style={{ border: "1px solid rgba(200,200,200,0.3)" }}
      >
        <div className="md:hidden flex items-center m-4 font-semibold">
          {profilePhoto && (
            <Image
              src={profilePhoto}
              priority
              alt="profile image"
              width={100}
              height={100}
              className="object-cover rounded-full cursor-pointer  w-8 h-8 mr-5"
            />
          )}

          <div className="text-sm  text-white cursor-pointer">{username}</div>
          {loggedUser.id !== userId ? (
            <>
              <div className="mx-2">
                <span className={styles.dot}></span>
              </div>

              <div
                onClick={() => handleFollow(userId)}
                className={`text-sm hover:text-white cursor-pointer ${
                  !iAmfollowing && "text-blue-500"
                }`}
              >
                {!iAmfollowing ? "Follow" : "Unfollow"}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="h-full md:h-screen md:col-span-2">
          {postPhoto && (
            <Image
              src={postPhoto}
              priority
              alt="image"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {/* komentari */}
        <div className="max-h-[82vh] w-full">
          <div className="hidden md:flex items-center my-4 mx-6 font-semibold">
            {profilePhoto && (
              <Image
                src={profilePhoto}
                priority
                alt="profile image"
                width={100}
                height={100}
                className="object-cover rounded-full cursor-pointer  w-8 h-8 mr-5"
              />
            )}

            <div className="text-sm  text-white cursor-pointer">{username}</div>

            {loggedUser.id !== userId ? (
              <>
                <div className="mx-2">
                  <span className={styles.dot}></span>
                </div>

                <div
                  onClick={() => handleFollow(userId)}
                  className={`text-sm hover:text-white cursor-pointer ${
                    !iAmfollowing && "text-blue-500"
                  }`}
                >
                  {!iAmfollowing ? "Follow" : "Unfollow"}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              borderBottom: "1px solid rgba(200,200,200,0.2)",
            }}
          ></div>
          <div className="md:hidden w-full pb-3">
            <div className="flex justify-between m-4">
              <div className="flex gap-4">
                <Like
                  isLiked={isLiked}
                  handleLike={handleLike}
                  postId={postId}
                />
                <FontAwesomeIcon
                  onClick={() => inputRef.current.focus()}
                  icon={faComment}
                  size="xl"
                  className="text-white hover:text-gray-400 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faShare}
                  size="xl"
                  className="text-white hover:text-gray-400 cursor-pointer"
                />
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                size="xl"
                className="text-white hover:text-gray-400 cursor-pointer "
              />
            </div>
            <div className="mx-4 text-sm font-semibold mb-0.5">
              {likesCount === 0
                ? "Be first to like this"
                : likesCount === 1
                ? "1 like"
                : `${likesCount} likes`}
            </div>
            <div className="mx-4 text-xs font-extralight text-gray-400">
              {createdAt} ago
            </div>
          </div>

          <div className="max-h-[65%] md:max-h-[78%] overflow-scroll mx-2 ">
            <div className="flex items-center my-2 font-semibold">
              {profilePhoto && (
                <Image
                  src={profilePhoto}
                  priority
                  alt="profile image"
                  width={100}
                  height={100}
                  className="object-cover rounded-full cursor-pointer  w-8 h-8 mr-5"
                />
              )}
              <div className="text-sm cursor-pointer mr-4">{username}</div>
              <div className="text-sm">{caption}</div>
            </div>
            {comments.length >= 1 ? (
              comments.map(
                (comment: CommentDto) =>
                  comment.user !== undefined && (
                    <div key={comment.id} className="min-h-max my-2">
                      <Comment
                        id={comment.id}
                        user={comment.user}
                        content={comment.content}
                        createdAt={comment.createdAt}
                        // commentId={comment.id}
                        //   id={comment.user.id}
                        //   userPhoto={comment.user.imageId}
                        //   fullName={comment.user.fullName}
                        //   username={comment.user.username}
                        //   comment={comment.content}
                        //   createdAt={new Date(comment.createdAt)}
                      />
                    </div>
                  )
              )
            ) : (
              <div className="flex flex-col gap-2 text-center my-12">
                <span className="lg:text-2xl font-bold">No Comments yet.</span>
                <span className="text-sm">Start the conversation.</span>
              </div>
            )}
          </div>
          <div className="md:hidden flex mx-2 my-2 ">
            {loggedUserprofilePhoto && (
              <Image
                src={loggedUserprofilePhoto}
                priority
                alt="loggedUser profile image"
                width={100}
                height={100}
                className="object-cover rounded-full cursor-pointer  w-8 h-8 mr-3"
              />
            )}
            <input
              ref={inputRef}
              value={addComment}
              onChange={(e) => setAddComment(e.target.value)}
              className="bg-black text-sm outline-none w-4/5"
              type="text"
              placeholder="Add a comment..."
            />
            {addComment && (
              <button
                onClick={() => {
                  handleAddComment(addComment), setAddComment("");
                }}
                className="text-blue-400 hover:text-white pl-1"
              >
                Post
              </button>
            )}
          </div>

          <div className="hidden md:block absolute bottom-3 w-full md:w-1/3">
            <div
              style={{
                borderBottom: "1px solid rgba(200,200,200,0.2)",
              }}
            ></div>
            <div className="flex justify-between m-4">
              <div className="flex gap-4">
                <Like
                  isLiked={isLiked}
                  handleLike={handleLike}
                  postId={postId}
                />
                <FontAwesomeIcon
                  onClick={() => inputRef.current.focus()}
                  icon={faComment}
                  size="xl"
                  className="text-white hover:text-gray-400 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faShare}
                  size="xl"
                  className="text-white hover:text-gray-400 cursor-pointer"
                />
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                size="xl"
                className="text-white hover:text-gray-400 cursor-pointer "
              />
            </div>
            <div className="mx-4 text-sm font-semibold mb-0.5">
              {likesCount === 0
                ? "Be first to like this"
                : likesCount === 1
                ? "1 like"
                : `${likesCount} likes`}
            </div>
            <div className="mx-4 text-xs font-extralight text-gray-400">
              {createdAt} ago
            </div>
            <div className="flex mx-4 mt-6">
              {loggedUserprofilePhoto && (
                <Image
                  src={loggedUserprofilePhoto}
                  priority
                  alt="loggedUser profile image"
                  width={100}
                  height={100}
                  className="object-cover rounded-full cursor-pointer  w-8 h-8 mr-3"
                />
              )}
              <input
                ref={inputRef}
                value={addComment}
                onChange={(e) => setAddComment(e.target.value)}
                className="bg-black text-sm outline-none w-3/4"
                type="text"
                placeholder="Add a comment..."
              />
              {addComment && (
                <button
                  onClick={() => {
                    handleAddComment(addComment), setAddComment("");
                  }}
                  className="text-blue-400 hover:text-white pl-1"
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </div>
        {/* kraj komentara */}
      </div>
    </div>
  );
};

export default PostDetailsView;
