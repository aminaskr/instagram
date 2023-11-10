import React from "react";
import Modal from "react-responsive-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { customStyles } from "@/containers/CreatePost";

type CreatePostProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  file: any;
  setSelectedFile: React.Dispatch<React.SetStateAction<FileList | null>>;
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
  handleShare: () => void;
};

const CreatePostView = (props: CreatePostProps) => {
  const { setIsOpen, file, setSelectedFile, caption, setCaption, handleShare } =
    props;
  return (
    <Modal
      open={true}
      onClose={() => setIsOpen((prev) => !prev)}
      center
      styles={{
        overlay: customStyles.overlay,
        modal: customStyles.modal,
        closeIcon: customStyles.icon,
      }}
    >
      <div className=" text-white text-center">
        {file ? (
          <div>
            <Image
              src={file}
              width={100}
              height={100}
              className="w-[360px] h-[320px] md:w-[400px] md:h-[360px] object-cover "
              alt="photo"
            />
            <input
              type="text"
              placeholder="Write a caption.."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="text-center placeholder-white w-full outline-none py-1"
              style={{ background: "rgb(35 35 35)" }}
            />
            <div
              style={{
                borderBottom: "1px solid rgba(200,200,200,0.07)",
              }}
            ></div>
            <button
              onClick={handleShare}
              className="bg-blue-500 hover:bg-blue-600 duration-150 my-4  py-1 px-8   rounded-lg font-semibold text-md cursor-pointer"
            >
              Share
            </button>
          </div>
        ) : (
          <>
            <div className="my-2 font-semibold">Create new post</div>
            <div
              style={{
                borderBottom: "1px solid rgba(200,200,200,0.1)",
              }}
            ></div>
            <div className="my-28 px-8 md:px-16 flex flex-col gap-5">
              <FontAwesomeIcon icon={faPhotoFilm} size="4x" />
              <span className="text-xl">Drag photos and videos here</span>
              <label
                htmlFor="post"
                className="bg-blue-500 hover:bg-blue-600 duration-150  py-2 px-4 m-auto rounded-lg font-semibold text-sm cursor-pointer"
              >
                Select From Computer
              </label>
              <input
                id="post"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files)}
                className="hidden"
              />
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default CreatePostView;
