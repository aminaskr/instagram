/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { GetPostDto, PostRequestDto, PostResponseDto, PostUpdateRequestDto, UserDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PostController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags post-controller
   * @name GetPostsByUser
   * @request GET:/api/v1/posts/byUserId/{userId}
   * @secure
   */
  getPostsByUser = (userId: string, params: RequestParams = {}) =>
    this.request<GetPostDto[], any>({
      path: `/api/v1/posts/byUserId/${userId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name CreatePost
   * @request POST:/api/v1/posts/create
   * @secure
   */
  createPost = (data: PostRequestDto, params: RequestParams = {}) =>
    this.request<PostResponseDto, any>({
      path: `/api/v1/posts/create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name DeletePost
   * @request DELETE:/api/v1/posts/delete/{postId}
   * @secure
   */
  deletePost = (postId: string, params: RequestParams = {}) =>
    this.request<PostResponseDto, any>({
      path: `/api/v1/posts/delete/${postId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name GetAllPostsExplore
   * @request GET:/api/v1/posts/explore/getAll
   * @secure
   */
  getAllPostsExplore = (params: RequestParams = {}) =>
    this.request<GetPostDto[], any>({
      path: `/api/v1/posts/explore/getAll`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name GetPostById
   * @request GET:/api/v1/posts/getById/{postId}
   * @secure
   */
  getPostById = (
    postId: string,
    query: {
      postId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetPostDto, any>({
      path: `/api/v1/posts/getById/${postId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name GetAllPostsHome
   * @request GET:/api/v1/posts/home/getAll
   * @secure
   */
  getAllPostsHome = (params: RequestParams = {}) =>
    this.request<GetPostDto[], any>({
      path: `/api/v1/posts/home/getAll`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name GetLikesByPostId
   * @request GET:/api/v1/posts/likes/{postId}
   * @secure
   */
  getLikesByPostId = (postId: string, params: RequestParams = {}) =>
    this.request<UserDto[], any>({
      path: `/api/v1/posts/likes/${postId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name UpdatePost
   * @request PUT:/api/v1/posts/update/{postId}
   * @secure
   */
  updatePost = (postId: string, data: PostUpdateRequestDto, params: RequestParams = {}) =>
    this.request<PostResponseDto, any>({
      path: `/api/v1/posts/update/${postId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
