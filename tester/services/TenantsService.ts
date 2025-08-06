/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tenant } from '../models/Tenant';
import type { TenantDefinition } from '../models/TenantDefinition';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TenantsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Tenants
     * This endpoint will get all tenants the authenticated user is allowed to access
     * @returns Tenant OK
     * @throws ApiError
     */
    public list({
        accept,
    }: {
        accept?: string,
    }): Promise<Array<Tenant>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/tenants/',
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
     * Create Tenant
     * No description provided
     * @returns Tenant OK
     * @throws ApiError
     */
    public create({
        requestBody,
        accept,
    }: {
        /**
         * Request body for payloads.TenantDefinition
         */
        requestBody: TenantDefinition,
        accept?: string,
    }): Promise<Tenant> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/tenants/',
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
}
