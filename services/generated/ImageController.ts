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

import { ImageResponseDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ImageController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags image-controller
   * @name DownloadImage
   * @request GET:/api/v1/images/download/{id}
   * @secure
   */
  downloadImage = (id: string, params: RequestParams = {}) =>
    this.request<File, any>({
      path: `/api/v1/images/download/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags image-controller
   * @name UploadImage
   * @request POST:/api/v1/images/upload
   * @secure
   */
  uploadImage = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImageResponseDto, any>({
      path: `/api/v1/images/upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
}
