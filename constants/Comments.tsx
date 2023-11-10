import React from "react";

export type Comment = {
  id: string;
  userPhoto: string;
  fullName: string;
  username: string;
  comment: string;
  createdAt: Date;
};

export const fetchedComments: Comment[] = [
  {
    id: "1",
    userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
    fullName: "William",
    username: "Smith",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    createdAt: new Date("2023-08-10"),
  },
  {
    id: "2",
    userPhoto: "/../public/images/Hijab-Dp15.jpg",
    fullName: "Mary",
    username: "Smith",
    comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    createdAt: new Date("2023-08-09"),
  },
  {
    id: "3",
    userPhoto: "/../public/images/Twitter-NFT-profile.jpg",
    fullName: "John",
    username: "Doe",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolor delectus deserunt earum voluptate doloremque",
    createdAt: new Date("2023-08-08"),
  },
];

export const getDate = (x: Date) => {
  const myDay = x.toDateString().split(" ")[2];
  const today = new Date().getDate();
  const diff = today - parseInt(myDay);
  return diff < 1 ? "today" : diff === 1 ? "1 d" : `${diff} d`;
};
