import Image from "next/image";
import styles from "../styles/post.module.css";
import Like from "@/containers/Like";
import CommentList from "@/containers/CommentList";
import { Comment } from "@/constants/Posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { customStyles } from "@/containers/CreatePost";
import { UserDto } from "@/services/generated/data-contracts";
import Link from "next/link";
import { downloadImage } from "@/utils/UserHelper";
import { postController, userController } from "@/services/http";
import PostLikesFollowings from "@/containers/PostLikesFollowings";

type PostViewProps = {
  fullName: string;
  username: string;
  profilePhotoUrl: string;
  postPhotoUrl: string;
  postDate: string;
  postId: string;
  likesCount: number;
  description: string;
  showMoreDesc: boolean;
  setShowMoreDesc: Dispatch<SetStateAction<boolean>>;
  isLiked: boolean;
  handleLike: () => void;
  handleFollow: (id: string) => void;
  loggedUser: UserDto;
  commentsCount: number;
  updateFollowings: boolean;
};

const PostView = ({
  fullName,
  username,
  profilePhotoUrl,
  postPhotoUrl,
  postDate,
  postId,
  likesCount,
  description,
  showMoreDesc,
  setShowMoreDesc,
  isLiked,
  handleLike,
  handleFollow,
  loggedUser,
  commentsCount,
  updateFollowings,
}: PostViewProps) => {
  const [showLikesModal, setShowLikesModal] = useState(false);
  const [postLikes, setPostLikes] = useState<any>("");

  useEffect(() => {
    postController.getLikesByPostId(postId).then((res) => {
      setPostLikes(res.data);
    });
  }, [updateFollowings]);

  return (
    <>
      <div className="bg-black inline-block py-3">
        <div className="flex items-center m-1 mb-2">
          {profilePhotoUrl && (
            <Image
              src={profilePhotoUrl}
              alt="Profile photo"
              width={100}
              height={100}
              className="object-cover rounded-full cursor-pointer overflow-hidden w-10 h-10 transform hover:scale-110 transition duration-500 ease-in-out"
            />
          )}

          <div className="transform hover:scale-110 transition duration-500 ease-in-out ml-2 items-center flex">
            <a className="text-sm font-sans font-semibold text-custom-gray1 tracking-tighter cursor-pointer overflow-hidden">
              {username}
            </a>
          </div>
          <div className="ml-2 flex items-center">
            <span className={styles.dot}></span>
          </div>
          <p className="text-custom-gray2 font-sans tracking-tighter text-12 ml-2">
            {postDate}
          </p>
        </div>
        {postPhotoUrl && (
          <Link href={`/posts/${postId}`}>
            <Image
              priority
              src={postPhotoUrl}
              alt="Post photo"
              width={300}
              height={300}
              className="object-cover rounded-sm w-screen"
            />
          </Link>
        )}
      </div>

      <div className="flex justify-between mb-3 mt-1">
        <div className="flex gap-4">
          <Like isLiked={isLiked} handleLike={handleLike} postId={postId} />
          <Link href={`/posts/${postId}`}>
            <FontAwesomeIcon
              icon={faComment}
              size="xl"
              className="text-white hover:text-gray-400 cursor-pointer"
            />
          </Link>

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

      <button
        disabled={likesCount === 0}
        onClick={() => setShowLikesModal(true)}
        className="text-white text-sm mb-1 cursor-pointer w-max"
      >
        {likesCount === 0
          ? "Be first to like this"
          : likesCount === 1
          ? `${likesCount} like`
          : `${likesCount} likes`}
      </button>
      {/*  */}
      {showLikesModal && (
        <>
          <Modal
            open={true}
            onClose={() => setShowLikesModal((prev) => !prev)}
            center
            styles={{
              overlay: customStyles.overlay,
              modal: customStyles.modal,
              closeIcon: customStyles.icon,
            }}
          >
            <div className=" flex flex-col max-h-[270px] min-h-[125px]  w-80 md:w-96 ">
              <div className="text-center py-1 w-full">
                <h2 className=" font-semibold text-white mb-3">Likes</h2>
                <div
                  style={{
                    borderBottom: "1px solid rgba(200,200,200,0.1)",
                  }}
                ></div>
              </div>

              <div className="overflow-scroll">
                {postLikes &&
                  postLikes.map((like: UserDto) => (
                    <div key={like.id}>
                      <PostLikesFollowings
                        like={like}
                        showLikesModal={showLikesModal}
                        loggedUser={loggedUser}
                        handleFollow={handleFollow}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </Modal>
        </>
      )}
      {/*  */}

      <div className="text-white text-sm mb-3">
        <span className="mr-2 font-bold cursor-pointer">{username}</span>

        <span>
          {!showMoreDesc && description.length > 65 ? (
            <>
              {description.substring(0, 65)}...
              <div
                onClick={() => setShowMoreDesc(true)}
                className="text-stone-400 cursor-pointer w-max"
              >
                more
              </div>
            </>
          ) : (
            description
          )}
        </span>
      </div>

      <CommentList commentsCount={commentsCount} postId={postId} />
      <div
        style={{
          borderBottom: "1px solid rgba(200,200,200,0.2)",
          marginBottom: "6px",
          marginTop: "14px",
        }}
      ></div>
    </>
  );
};

export default PostView;
