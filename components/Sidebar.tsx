import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/images/instagram-text-white.png";
import logoIcon from "../public/images/Instagram-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../public/images/prof1.jpeg";
import type { ReactNode } from "react";
import MenuItem from "./MenuItem";
import CreatePost from "@/containers/CreatePost";
import Logout from "@/containers/Logout";

type childrenProps = {
  children: ReactNode;
};

const Sidebar = ({ children }: childrenProps) => {
  const [createModal, setCreateModal] = useState(false);
  const [moreModal, setMoreModal] = useState(false);

  return (
    <div className="flex flex-row">
      <div
        className="fixed bottom-0  flex justify-around items-center border-t md:border-r border-[rgba(200,200,200,0.2)] md:inline w-full z-50 h-12 bg-black md:sticky md:w-[74px] xl:w-[19%] md:h-screen md:top-0 pl-6 xl:pr-24 md:pt-10"
        // style={{ borderRight: "1px solid rgba(200,200,200,0.2)" }}
      >
        <Image
          priority
          width={100}
          height={100}
          alt="logo"
          src={logo}
          className="mb-12 w-[103px] xl:block hidden"
        />
        <Image
          priority
          width={100}
          height={100}
          alt="logoIcon"
          src={logoIcon}
          className="mb-14 w-6 hidden md:block xl:hidden hover:scale-110 transition duration-300 hover:bg-red-700 rounded-md"
        />
        <MenuItem title="Home" icon={faHome} path="/home" />
        <MenuItem title="Explore" icon={faCompass} path="/explore" />
        {/* <MenuItem title="Create" icon={faPlusSquare} path="/create" /> */}
        <div
          onClick={() => setCreateModal(true)}
          className="flex items-center gap-3 text-white font-light  cursor-pointer md:mb-8 mr-6 md:mr-0"
        >
          <FontAwesomeIcon icon={faPlusSquare} size="xl" />
          <p className="hidden xl:block pl-1.5">Create</p>
        </div>
        <Link href="/myprofile">
          <div className="flex items-center gap-3 md:mb-8 text-white font-light ">
            <Image
              width={100}
              height={100}
              alt="profile"
              src={profilePic}
              style={{ borderRadius: "50%", width: "22px", height: "22px" }}
            />
            <p className="hidden xl:block pl-1.5">Profile</p>
          </div>
        </Link>
        <div
          onClick={() => setMoreModal(true)}
          className="flex items-center gap-4 md:absolute bottom-5  text-white font-light cursor-pointer"
        >
          <FontAwesomeIcon icon={faNavicon} size="xl" className="w-6" />
          <p className="hidden xl:block">More</p>
        </div>
      </div>

      {children}
      {createModal && <CreatePost setIsOpen={setCreateModal} />}
      {moreModal && <Logout setIsOpen={setMoreModal} />}
    </div>
  );
};

export default Sidebar;
