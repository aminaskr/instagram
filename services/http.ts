import {
  RawAxiosRequestHeaders,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";

import { auth } from "./firebase";
import { HttpClient } from "./generated/http-client";
import { LikeController } from "./generated/LikeController";
import { UserController } from "./generated/UserController";
import { ImageController } from "./generated/ImageController";
import { PostController } from "./generated/PostController";
import { CommentController } from "./generated/CommentController";


const axiosConfig = {
  baseURL: "http://165.22.72.158:8080",
  paramsSerializer: {
    indexes: null,
  },
  onUploadProgress: undefined,
};

const init = <T extends HttpClient>(controller: T): T => {
  controller.instance.interceptors.request.use(async (config: any) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const idToken = await currentUser.getIdToken(false);
      (config.headers as RawAxiosRequestHeaders).Authorization =
        "Bearer " + idToken;
    }
    return config;
  });

  controller.instance.interceptors.response.use(
    async (response: any) => {
      return response;
    },
    async (error: any) => {
      if (error.response != null && error.response.status === 401) {
        await auth.signOut();
        // @ts-ignore
        window.location = "/";
      }

      return error;
    }
  );
  return controller;
};
export const likeController = init(new LikeController(axiosConfig));
export const userController = init(new UserController(axiosConfig));
export const imageController = init(new ImageController(axiosConfig));
export const postController = init(new PostController(axiosConfig));
export const commentController = init(new CommentController(axiosConfig));

