export type Comment = {
  id: string;
  userPhoto: string;
  firstName: string;
  lastName: string;
  comment: string;
  createdAt: Date;
};

export type Post = {
  postId: string;
  firstName: string;
  lastName: string;
  profilePhotoUrl: string;
  postPhotoUrl: string;
  postDate: Date;
  likes: number;
  postDesc: string;
  comments: Comment[];
  isLiked: boolean;
};

export const posts: Post[] = [
  {
    postId: "1",
    firstName: "m.",
    lastName: "karamujo",
    profilePhotoUrl: "/../public/images/1.jpg",
    postPhotoUrl: "/../public/images/1.jpg",
    postDate: new Date("2023-08-07"),
    likes: 1,
    postDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio vero ducimus necessitatibus omnis esse expedita nobis nisi dignissimos in odit minus, unde corporis adipisci repellat voluptatibus! Corporis, quam ad",
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet.",
        createdAt: new Date("2023-08-10"),
      },
      {
        id: "2",
        userPhoto: "/../public/images/Hijab-Dp15.jpg",
        firstName: "Mary",
        lastName: "Smith",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        createdAt: new Date("2023-08-09"),
      },
    ],
    isLiked: false,
  },
  {
    postId: "2",
    firstName: "Sara",
    lastName: "Wilson",
    profilePhotoUrl: "/../public/images/2.jpg",
    postPhotoUrl: "/../public/images/Hijab-Dp15.jpg",
    postDate: new Date("2023-08-05"),
    likes: 3,
    postDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo",
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        createdAt: new Date("2023-08-10"),
      },
      {
        id: "2",
        userPhoto: "/../public/images/Hijab-Dp15.jpg",
        firstName: "Mary",
        lastName: "Smith",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        createdAt: new Date("2023-08-09"),
      },
      {
        id: "3",
        userPhoto: "/../public/images/Twitter-NFT-profile.jpg",
        firstName: "John",
        lastName: "Doe",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolor delectus deserunt earum voluptate doloremque",
        createdAt: new Date("2023-08-08"),
      },
    ],
    isLiked: false,
  },
  {
    postId: "3",
    firstName: "John",
    lastName: "Doe",
    profilePhotoUrl: "/../public/images/Twitter-NFT-profile.jpg",
    postPhotoUrl: "/../public/images/Twitter-NFT-profile.jpg",
    postDate: new Date("2023-08-02"),
    likes: 5,
    postDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, impedit consectetur.",
    comments: [
      {
        id: "1",
        userPhoto: "/../public/images/samuel-raita-ridxdghg7pw-unsplash.jpg",
        firstName: "William",
        lastName: "Smith",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi autem quaerat iure!Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        createdAt: new Date("2023-08-10"),
      },
    ],
    isLiked: true,
  },
];
