/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AssetsService } from './services/AssetsService';
import { MembersService } from './services/MembersService';
import { StampCardsService } from './services/StampCardsService';
import { StampCardTypesService } from './services/StampCardTypesService';
import { TenantsService } from './services/TenantsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class PlutoCoreSDK {
    public readonly assets: AssetsService;
    public readonly members: MembersService;
    public readonly stampCards: StampCardsService;
    public readonly stampCardTypes: StampCardTypesService;
    public readonly tenants: TenantsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '0.0.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.assets = new AssetsService(this.request);
        this.members = new MembersService(this.request);
        this.stampCards = new StampCardsService(this.request);
        this.stampCardTypes = new StampCardTypesService(this.request);
        this.tenants = new TenantsService(this.request);
    }
}

