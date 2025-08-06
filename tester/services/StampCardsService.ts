/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StampCard } from '../models/StampCard';
import type { StampCardDefinition } from '../models/StampCardDefinition';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StampCardsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List stamp cards
     * No description provided
     * @returns StampCard OK
     * @throws ApiError
     */
    public list({
        accept,
        skip,
        limit,
        typeId,
        memberId,
    }: {
        accept?: string,
        skip?: number,
        limit?: number,
        typeId?: string,
        memberId?: string,
    }): Promise<Array<StampCard>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/stamp_cards/',
            headers: {
                'Accept': accept,
            },
            query: {
                'skip': skip,
                'limit': limit,
                'typeId': typeId,
                'memberId': memberId,
            },
            errors: {
                400: `Bad Request _(validation or deserialization error)_`,
                500: `Internal Server Error _(panics)_`,
            },
        });
    }
    /**
     * Issue a stamp card
     * No description provided
     * @returns StampCard OK
     * @throws ApiError
     */
    public create({
        requestBody,
        accept,
    }: {
        /**
         * Request body for payloads.StampCardDefinition
         */
        requestBody: StampCardDefinition,
        accept?: string,
    }): Promise<StampCard> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/stamp_cards/',
            headers: {
                'Accept': accept,
            },
            body: requestBody,
            mediaType: '*/*',
            errors: {
                400: `Bad Request _(validation or deserialization error)_`,
                500: `Internal Server Error _(panics)_`,
            },
        });
    }
    /**
     * Retrieve a stamp card
     * No description provided
     * @returns StampCard OK
     * @throws ApiError
     */
    public retrieve({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): Promise<StampCard> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/stamp_cards/{id}',
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
}
