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

import { UserDto, UserProfileDto, UserRegistrationRequestDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user-controller
   * @name GetFollowersByUserId
   * @request GET:/api/v1/users/followers/{userId}
   * @secure
   */
  getFollowersByUserId = (userId: string, params: RequestParams = {}) =>
    this.request<UserDto[], any>({
      path: `/api/v1/users/followers/${userId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name GetFollowingByUserId
   * @request GET:/api/v1/users/following/{userId}
   * @secure
   */
  getFollowingByUserId = (userId: string, params: RequestParams = {}) =>
    this.request<UserDto[], any>({
      path: `/api/v1/users/following/${userId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name GetMyProfile
   * @request GET:/api/v1/users/myProfile
   * @secure
   */
  getMyProfile = (params: RequestParams = {}) =>
    this.request<UserProfileDto, any>({
      path: `/api/v1/users/myProfile`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name GetUserProfile
   * @request GET:/api/v1/users/profile/{userId}
   * @secure
   */
  getUserProfile = (userId: string, params: RequestParams = {}) =>
    this.request<UserProfileDto, any>({
      path: `/api/v1/users/profile/${userId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name RegisterUser
   * @request POST:/api/v1/users/register
   * @secure
   */
  registerUser = (data: UserRegistrationRequestDto, params: RequestParams = {}) =>
    this.request<UserDto, any>({
      path: `/api/v1/users/register`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name FollowUnfollowUser
   * @request POST:/api/v1/users/{userId}/follow
   * @secure
   */
  followUnfollowUser = (userId: string, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/v1/users/${userId}/follow`,
      method: "POST",
      secure: true,
      ...params,
    });
}
