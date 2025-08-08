/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Member } from '../models/Member';
import type { MemberDefinition } from '../models/MemberDefinition';
import type { MemberPatch } from '../models/MemberPatch';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MembersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List members
     * No description provided
     * @returns Member OK
     * @throws ApiError
     */
    public list({
        accept,
        skip,
        limit,
        firstName,
        lastName,
        authIdentifier,
    }: {
        accept?: string,
        skip?: number,
        limit?: number,
        firstName?: string,
        lastName?: string,
        authIdentifier?: string,
    }): Promise<Array<Member>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/members/',
            headers: {
                'Accept': accept,
            },
            query: {
                'skip': skip,
                'limit': limit,
                'firstName': firstName,
                'lastName': lastName,
                'authIdentifier': authIdentifier,
            },
            errors: {
                400: `Bad Request _(validation or deserialization error)_`,
                500: `Internal Server Error _(panics)_`,
            },
        });
    }
    /**
     * Create member
     * No description provided
     * @returns Member OK
     * @throws ApiError
     */
    public create({
        requestBody,
        accept,
    }: {
        /**
         * Request body for payloads.MemberDefinition
         */
        requestBody: MemberDefinition,
        accept?: string,
    }): Promise<Member> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/members/',
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
     * @returns Member OK
     * @throws ApiError
     */
    public retrieve({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): Promise<Member> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/members/{id}',
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
     * Update member
     * No description provided
     * @returns Member OK
     * @throws ApiError
     */
    public update({
        id,
        requestBody,
        accept,
    }: {
        id: string,
        /**
         * Request body for payloads.MemberPatch
         */
        requestBody: MemberPatch,
        accept?: string,
    }): Promise<Member> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/members/{id}',
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
