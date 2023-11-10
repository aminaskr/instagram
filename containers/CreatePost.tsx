import React, { useEffect, useState } from "react";
import CreatePostView from "@/components/CreatePostView";
import { imageController } from "@/services/http";
import { postController } from "@/services/http";

const CreatePost = (props: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const setIsOpen = props.setIsOpen;
  const [caption, setCaption] = useState("");
  const [filePost, setfilePost] = useState<any>(null);

  const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    const reader = new FileReader();
    if (selectedFile) {
      console.log(selectedFile);

      reader.readAsDataURL(selectedFile[0]);
      setfilePost(selectedFile[0]);
      // console.log(filePost);

      reader.onload = (readerEvent) => {
        setFile(readerEvent.target?.result);
        // console.log(file);
      };
    }
  }, [selectedFile]);

  const handleShare = () => {
    const dataImg = {
      file: filePost,
    };

    imageController
      .uploadImage(dataImg)
      .then((res) => {
        console.log(res);

        if (res.data.id) {
          const postData = {
            caption: caption,
            imageId: res.data.id,
          };
          postController.createPost(postData).then((res) => {
            console.log(res);
            window.location.reload();
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <CreatePostView
      setIsOpen={setIsOpen}
      file={file}
      setSelectedFile={setSelectedFile}
      caption={caption}
      setCaption={setCaption}
      handleShare={handleShare}
    />
  );
};

export default CreatePost;
///////////////////////////

export const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.66)",
  },
  modal: {
    background: "rgb(40 40 40)",
    padding: "0px",
    borderRadius: "3%",
  },
  icon: {
    display: "none",
  },
};
