/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HTTPError = {
    description: `HTTPError schema`,
    properties: {
        detail: {
            type: 'string',
            description: `Human readable error message`,
            isNullable: true,
        },
        errors: {
            type: 'array',
            contains: {
                properties: {
                    more: {
                        type: 'dictionary',
                        contains: {
                            description: `Additional information about the error`,
                            properties: {
                            },
                            isNullable: true,
                        },
                        isNullable: true,
                    },
                    name: {
                        type: 'string',
                        description: `For example, name of the parameter that caused the error`,
                    },
                    reason: {
                        type: 'string',
                        description: `Human readable error message`,
                    },
                },
                isNullable: true,
            },
            isNullable: true,
        },
        instance: {
            type: 'string',
            isNullable: true,
        },
        status: {
            type: 'number',
            description: `HTTP status code`,
            isNullable: true,
        },
        title: {
            type: 'string',
            description: `Short title of the error`,
            isNullable: true,
        },
        type: {
            type: 'string',
            description: `URL of the error type. Can be used to lookup the error in a documentation`,
            isNullable: true,
        },
    },
} as const;
