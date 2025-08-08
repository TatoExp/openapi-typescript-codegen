/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StampCardType } from '../models/StampCardType';
import type { StampCardTypePatch } from '../models/StampCardTypePatch';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StampCardTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List StampCardType
     * No description provided
     * @returns StampCardType OK
     * @throws ApiError
     */
    public list({
        accept,
        skip,
        limit,
        name,
        description,
    }: {
        accept?: string,
        skip?: number,
        limit?: number,
        name?: string,
        description?: string,
    }): Promise<Array<StampCardType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/stamp_card_types/',
            headers: {
                'Accept': accept,
            },
            query: {
                'skip': skip,
                'limit': limit,
                'name': name,
                'description': description,
            },
            errors: {
                400: `Bad Request _(validation or deserialization error)_`,
                500: `Internal Server Error _(panics)_`,
            },
        });
    }
    /**
     * Create StampCardType
     * No description provided
     * @returns StampCardType OK
     * @throws ApiError
     */
    public create({
        requestBody,
        accept,
    }: {
        /**
         * Request body for entities.StampCardType
         */
        requestBody: StampCardType,
        accept?: string,
    }): Promise<StampCardType> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/stamp_card_types/',
            headers: {
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request _(validation or deserialization error)_`,
                500: `Internal Server Error _(panics)_`,
            },
        });
    }
    /**
     * Get by ID
     * No description provided
     * @returns StampCardType OK
     * @throws ApiError
     */
    public retrieve({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): Promise<StampCardType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/stamp_card_types/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            errors: {
                400: `Bad Request _(validation or deserialization error)_`,
                500: `Internal Server Error _(panics)_`,
            },
        });
    }
    /**
     * Update stamp card type
     * No description provided
     * @returns StampCardType OK
     * @throws ApiError
     */
    public update({
        id,
        requestBody,
        accept,
    }: {
        id: string,
        /**
         * Request body for payloads.StampCardTypePatch
         */
        requestBody: StampCardTypePatch,
        accept?: string,
    }): Promise<StampCardType> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/stamp_card_types/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request _(validation or deserialization error)_`,
                500: `Internal Server Error _(panics)_`,
            },
        });
    }
}
