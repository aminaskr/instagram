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

import { CommentDto, CommentRequestDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CommentController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags comment-controller
   * @name GetCommentsByPostId
   * @request GET:/api/v1/comments/GetCommentsbyPostId/{postId}
   * @secure
   */
  getCommentsByPostId = (postId: string, params: RequestParams = {}) =>
    this.request<CommentDto[], any>({
      path: `/api/v1/comments/GetCommentsbyPostId/${postId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags comment-controller
   * @name CreateComment
   * @request POST:/api/v1/comments/create/{postId}
   * @secure
   */
  createComment = (postId: string, data: CommentRequestDto, params: RequestParams = {}) =>
    this.request<CommentDto, any>({
      path: `/api/v1/comments/create/${postId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags comment-controller
   * @name DeleteComment
   * @request DELETE:/api/v1/comments/delete/{commentId}
   * @secure
   */
  deleteComment = (commentId: string, params: RequestParams = {}) =>
    this.request<CommentDto, any>({
      path: `/api/v1/comments/delete/${commentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
