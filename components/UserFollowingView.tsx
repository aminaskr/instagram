import { UserDto } from "@/services/generated/data-contracts";
import { downloadImage } from "@/utils/UserHelper";
import Image from "next/image";
import { useEffect, useState } from "react";
import { userController } from "@/services/http";

const UserFollowingRow = (user: UserDto) => {
  const [profileImage, setProfileImage] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    if (user.imageId !== undefined) {
      downloadImage(user.imageId).then((res) => {
        setProfileImage(res);
      });
    }
  }, [user, user.imageId]);

  const handleClick = () => {
    if (user.id !== undefined) {
      userController.followUnfollowUser(user.id).then((res) => {
        console.log(res);
        setIsFollowing((prev) => !prev);
        setIsRemoved(true);
      });
    }
  };

  if (isRemoved) {
    return null;
  }

  return (
    <div
      key={user.id}
      className="user-row flex items-center justify-between p-2 duration-300 hover:bg-gray-800 w-80 max-w-md mx-auto"
    >
      <div className="flex items-center">
        <div className="avatar-content mr-2">
          {user.imageId && (
            <Image
              src={profileImage}
              alt="profileimg"
              className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full"
              height={80}
              width={80}
            />
          )}
        </div>
        <div className="user-body pl-4">
          <div className="title font-medium no-underline text-white text-base">
            {user.fullName}
          </div>
          <div className="skills">
            <span className="subtitle text-white text-xs">{user.username}</span>
          </div>
        </div>
      </div>
      {!isRemoved && (
        <div className="user-option">
          <button
            className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-2 py-1 rounded text-sm font-medium leading-6 tracking-tight px-1 border border-white text-white bg-black hover:bg-gray-300 duration-300"
            type="button"
            onClick={handleClick}
          >
            {isFollowing ? "" : "Remove"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserFollowingRow;
