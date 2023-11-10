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

import { HttpClient, RequestParams } from "./http-client";

export class LikeController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags like-controller
   * @name LikeOrDislikePost
   * @request POST:/api/v1/likes/{postId}/like
   * @secure
   */
  likeOrDislikePost = (postId: string, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/v1/likes/${postId}/like`,
      method: "POST",
      secure: true,
      ...params,
    });
}
