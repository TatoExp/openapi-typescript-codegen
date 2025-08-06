/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignedUrlResponse } from '../models/SignedUrlResponse';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AssetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Upload Asset
     * Generates a presigned upload URL for assets.
     * @returns SignedUrlResponse OK
     * @throws ApiError
     */
    public getUploadUrl({
        accept,
        fileName,
    }: {
        accept?: string,
        fileName?: string,
    }): Promise<SignedUrlResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/assets/upload',
            headers: {
                'Accept': accept,
            },
            query: {
                'fileName': fileName,
            },
            errors: {
                400: `Bad Request _(validation or deserialization error)_`,
                500: `Internal Server Error _(panics)_`,
            },
        });
    }
}
