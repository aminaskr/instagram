import React from "react";
import Modal from "react-responsive-modal";
import { customStyles } from "./CreatePost";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { auth } from "@/services/firebase";
import { signOut } from "firebase/auth";

const Logout = (props: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  const logout = () => {
    signOut(auth).then((res) => {
      localStorage.removeItem("currentUser");

      // console.log(res);
      // router.push("/login");
    });
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={() => props.setIsOpen((prev) => !prev)}
        styles={{
          overlay: customStyles.overlay,
          modal: myStyles,
          closeIcon: customStyles.icon,
        }}
      >
        <div className="flex flex-col justify-around text-white px-6 h-36 w-60">
          <div className="flex items-center gap-5 cursor-pointer">
            <FontAwesomeIcon icon={faGear} size="lg" />
            <p className="xl:text-lg">Settings</p>
          </div>
          <div className="flex items-center gap-5 cursor-pointer">
            <FontAwesomeIcon icon={faBookmark} size="lg" />
            <p className="xl:text-lg ml-1">Saved</p>
          </div>
          <div
            onClick={logout}
            className="flex items-center gap-5 cursor-pointer"
          >
            <FontAwesomeIcon icon={faSignOut} size="lg" />
            <p className="xl:text-lg">Log out</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const myStyles = {
  position: "absolute",
  left: "0",
  bottom: "60px",
  background: "rgb(40 40 40)",
  padding: "0",
  margin: "0",
  borderRadius: "3%",
};

export default Logout;
