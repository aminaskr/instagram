import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { downloadImage } from "@/utils/UserHelper";
import { UserDto, UserProfileDto } from "@/services/generated/data-contracts";
import { userController } from "@/services/http";
import ExploreList from "@/containers/ExploreList";
import UserFollowerView from "./UserFollowersView";
import UserFollowingView from "./UserFollowingView";

const ProfileView = (user: UserProfileDto & UserDto) => {
  const [followersModalOpen, setFollowersModalOpen] = useState(false);
  const [followingModalOpen, setFollowingModalOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [followersList, setFollowersList] = useState<UserDto[]>([]);
  const [followingList, setFollowingList] = useState<UserDto[]>([]);

  const openFollowersModal = () => {
    setFollowersModalOpen(true);
  };

  const closeFollowersModal = () => {
    setFollowersModalOpen(false);
  };

  const openFollowingModal = () => {
    setFollowingModalOpen(true);
  };

  const closeFollowingModal = () => {
    setFollowingModalOpen(false);
  };

  useEffect(() => {
    if (user.profilePhotoId !== undefined) {
      downloadImage(user.profilePhotoId).then((res) => {
        setProfilePhoto(res);
      });
    }
  }, [user.profilePhotoId]);
  useEffect(() => {
    userController
      .getFollowersByUserId("ce7df395-8690-48ab-8ee9-121b90250889")
      .then((result) => {
        setFollowersList(result.data);
      });
    userController
      .getFollowingByUserId("ce7df395-8690-48ab-8ee9-121b90250889")
      .then((result) => {
        setFollowingList(result.data);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 mb-10">
        <div className="bg-green p-3 rounded flex items-start justify-center">
          {profilePhoto && (
            <Image
              src={profilePhoto}
              alt="profileimg"
              className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-pink-600 p-1"
              height={150}
              width={150}
            />
          )}
        </div>
        <div className="p-3 text-gray-600 col-span-2">
          <div className="flex items-center">
            <h1 className="inline-block text-white text-3xl align-bottom block">
              {user.fullName}
            </h1>
            <button className="bg-gray ml-3 text-white font-semibold py-1 px-2 border border-white rounded text-sm">
              Edit Profile
            </button>
          </div>
          <div className="flex flex space-x-8 mb-4 py-5 max-w-sm hidden  text-white lg:flex">
            <div className="basis 1/3">
              <strong>{user.postsCount}</strong> posts
            </div>
            <div className="basis 1/3">
              <button onClick={openFollowingModal}>
                <strong>{user.followersCount}</strong> followers
              </button>
            </div>
            <div className="basis 1/3">
              <button onClick={openFollowersModal}>
                <strong>{user.followingCount}</strong> following
              </button>
            </div>
            <Modal
              open={followersModalOpen}
              onClose={closeFollowersModal}
              center
              styles={{
                overlay: {
                  background: "rgba(0, 0, 0, 0.8)",
                },
                modal: {
                  background: "black",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <div className="flex flex-col items-center justify-center min-w-screen p-4 bg-black">
                <a href="#">
                  <div className="text-center py-1">
                    <h2 className="text-xl font-semibold text-white">
                      Following
                    </h2>
                    <div className="bg-gray-800 h-0.5 w-80 mx-auto mt-1"></div>
                  </div>
                  {followingList.map((user) => (
                    <UserFollowerView key={user.id} {...user} />
                  ))}
                </a>
              </div>
            </Modal>
            <Modal
              open={followingModalOpen}
              onClose={closeFollowingModal}
              center
              styles={{
                overlay: {
                  background: "rgba(0, 0, 0, 0.8)",
                },
                modal: {
                  background: "black",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <div className="flex flex-col items-center justify-center min-w-screen p-4 bg-black">
                <a href="#">
                  <div className="text-center py-1">
                    <h2 className="text-xl font-semibold text-white">
                      Following
                    </h2>
                    <div className="bg-gray-800 h-0.5 w-80 mx-auto mt-1"></div>
                  </div>
                  {followersList.map((user) => (
                    <UserFollowingView {...user} />
                  ))}
                </a>
              </div>
            </Modal>
          </div>
          <h3 className="font-bold text-white">{user.description} </h3>
        </div>
      </div>
      <div className="flex flex-row text-2xl items-center justify-center border-t uppercase text-gray-400 tracking-widest h-16 lg:text-xs">
        <a
          href="#"
          className="text-white border-t border-white flex justify-center items-center h-full mr-16 cursor-pointer"
        >
          <FontAwesomeIcon icon={faTableCells} />
          <span className="hidden ml-2 lg:inline-block">Posts</span>
        </a>
        <a
          href="#"
          className="flex justify-center items-center h-full mr-16 cursor-pointer text-white"
        >
          <FontAwesomeIcon icon={faBookmark} />
          <span className="hidden ml-2 lg:inline-block">Saved</span>
        </a>
      </div>

      <ExploreList />
    </>
  );
};

export default ProfileView;
