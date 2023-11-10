import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { formatNum } from "@/constants/ExplorePosts";
import Link from "next/link";
import { downloadImage } from "@/utils/UserHelper";

export type PostExploreProps = {
  id: string;
  photo: string;
  numOfLikes: number;
  numOfComments: number;
};

const PostExplore = ({
  id,
  photo,
  numOfLikes,
  numOfComments,
}: PostExploreProps) => {
  const [postPhoto, setPostPhoto] = useState("");
  // console.log(postPhoto);

  useEffect(() => {
    downloadImage(photo).then((res) => {
      setPostPhoto(res);
    });
  }, []);

  return (
    <Link href={`/posts/${id}`}>
      <div className="h-[60vh] w-full cursor-pointer relative group">
        {postPhoto && (
          <Image
            priority
            src={postPhoto}
            alt="about"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        )}

        <div className="opacity-0 bg-[rgba(23,23,23,0.5)] group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <div className="absolute top-0 left-0 w-full h-full hover:scale-110 transition duration-300 flex justify-center gap-4 items-center opacity-0 hover:opacity-100">
          {numOfLikes > 0 && (
            <div className="flex justify-evenly items-center md:w-16 text-white font-bold text-xs md:text-lg">
              <span>
                <FontAwesomeIcon icon={faHeart} className="mr-0.5" />
              </span>
              <span>{formatNum(numOfLikes)}</span>
            </div>
          )}

          {numOfComments > 0 && (
            <div className="flex justify-evenly items-center md:w-16 text-white font-bold text-xs md:text-lg">
              <span>
                <FontAwesomeIcon icon={faComment} className="mr-0.5" />
              </span>
              <span>{formatNum(numOfComments)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PostExplore;
