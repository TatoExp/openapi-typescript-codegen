/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * HTTPError schema
 */
export type HTTPError = {
    /**
     * Human readable error message
     */
    detail?: string | null;
    errors?: Array<{
        /**
         * Additional information about the error
         */
        more?: Record<string, any> | null;
        /**
         * For example, name of the parameter that caused the error
         */
        name?: string;
        /**
         * Human readable error message
         */
        reason?: string;
    } | null> | null;
    instance?: string | null;
    /**
     * HTTP status code
     */
    status?: number | null;
    /**
     * Short title of the error
     */
    title?: string | null;
    /**
     * URL of the error type. Can be used to lookup the error in a documentation
     */
    type?: string | null;
};

