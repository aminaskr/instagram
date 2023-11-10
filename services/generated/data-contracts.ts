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

export interface CommentDto {
  content?: string;
  /** @format date-time */
  createdAt?: string;
  id?: string;
  user?: UserDto;
}

export interface CommentRequestDto {
  content: string;
}

export interface GetPostDto {
  caption?: string;
  /** @format int32 */
  commentsCount?: number;
  /** @format date-time */
  createdAt?: string;
  id?: string;
  imageId?: string;
  liked?: boolean;
  /** @format int32 */
  likesCount?: number;
  user?: UserDto;
}

export interface ImageResponseDto {
  fileName?: string;
  id?: string;
  type?: "JPEG" | "PNG";
}

export interface PostRequestDto {
  caption: string;
  imageId: string;
}

export interface PostResponseDto {
  caption?: string;
  id?: string;
}

export interface PostUpdateRequestDto {
  newCaption: string;
}

export interface UserDto {
  email?: string;
  following?: boolean;
  fullName?: string;
  id?: string;
  imageId?: string;
  username?: string;
}

export interface UserProfileDto {
  description?: string;
  /** @format int32 */
  followersCount?: number;
  /** @format int32 */
  followingCount?: number;
  fullName?: string;
  id?: string;
  /** @format int32 */
  postsCount?: number;
  profilePhotoId?: string;
  username?: string;
}

export interface UserRegistrationRequestDto {
  email: string;
  fullName: string;
  username: string;
}
