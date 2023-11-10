import { Comment } from "./Posts";
import asd from "../public/images/Twitter-NFT-profile.jpg";

export type ExplorePost = {
  postId: string;
  photoUrl: string;
  profilePhoto: string;
  firstName: string;
  lastName: string;
  isLiked: boolean;
  likes: number;
  comments: Comment[];
  createdAt: Date;
};

export const explorePosts: ExplorePost[] = [
  {
    postId: "1",
    photoUrl: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
    profilePhoto: "/../public/images/Hijab-Dp15.jpg",
    firstName: "John Doe",
    lastName: "",
    isLiked: false,
    likes: 0,
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-16"),
      },
      {
        id: "2",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "3",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment: "Lorem, ipsum dolor sit amet consectetur ",
        createdAt: new Date("2023-08-14"),
      },
      {
        id: "4",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "5",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "6",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "7",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
    ],
    createdAt: new Date("2023-08-20"),
  },
  {
    postId: "2",
    photoUrl: "/../public/images/Hijab-Dp15.jpg",
    profilePhoto: "/../public/images/1.jpg",
    firstName: "Mary",
    lastName: "Jackson",
    isLiked: true,
    likes: 348,
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "2",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment: "Lorem, ipsum dolor sit amet consectetur ",
        createdAt: new Date("2023-08-14"),
      },
    ],
    createdAt: new Date("2023-08-19"),
  },
  {
    postId: "3",
    photoUrl: "/../public/images/Twitter-NFT-profile.jpg",
    profilePhoto: "/../public/images/2.jpg",
    firstName: "William",
    lastName: "Snow",
    isLiked: false,
    likes: 1188,
    comments: [],
    createdAt: new Date("2023-08-20"),
  },
  {
    postId: "4",
    photoUrl: "/../public/images/Hijab-Dp15.jpg",
    profilePhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
    firstName: "William",
    lastName: "Smith",
    isLiked: false,
    likes: 924,
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-16"),
      },
      {
        id: "2",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "3",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment: "Lorem, ipsum dolor sit amet consectetur ",
        createdAt: new Date("2023-08-14"),
      },
      {
        id: "4",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "5",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "6",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "7",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
    ],
    createdAt: new Date("2023-08-18"),
  },
  {
    postId: "5",
    photoUrl: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
    profilePhoto: "/../public/images/prof1.jpeg",
    firstName: "Jack",
    lastName: "Cooper",
    isLiked: true,
    likes: 0,
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-16"),
      },
      {
        id: "2",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
    ],
    createdAt: new Date("2023-08-20"),
  },
  {
    postId: "6",
    photoUrl: "/../public/images/Twitter-NFT-profile.jpg",
    profilePhoto: "/../public/images/instagram-text-white.png",
    firstName: "Sam",
    lastName: "Smith",
    isLiked: true,
    likes: 106,
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-16"),
      },
      {
        id: "2",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-15"),
      },
      {
        id: "3",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment: "Lorem, ipsum dolor sit amet consectetur ",
        createdAt: new Date("2023-08-14"),
      },
    ],
    createdAt: new Date("2023-08-18"),
  },
  {
    postId: "7",
    photoUrl: "/../public/images/Hijab-Dp15.jpg",
    profilePhoto: "/../public/images/Twitter-NFT-profile.jpg",
    firstName: "Mario",
    lastName: "Lee",
    isLiked: false,
    likes: 29,
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-16"),
      },
    ],
    createdAt: new Date("2023-08-20"),
  },
];

export const formatNum = (number: number): string | number => {
  if (number < 1000) {
    return number;
  } else {
    return (number / 1000).toFixed(1) + "K";
  }
};
