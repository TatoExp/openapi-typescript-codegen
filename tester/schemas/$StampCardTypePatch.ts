/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StampCardTypePatch = {
    description: `StampCardTypePatch schema`,
    properties: {
        backgroundColor: {
            type: 'string',
            isNullable: true,
        },
        description: {
            type: 'string',
            isNullable: true,
        },
        foregroundColor: {
            type: 'string',
            isNullable: true,
        },
        labelColor: {
            type: 'string',
            isNullable: true,
        },
        logoText: {
            type: 'string',
            isNullable: true,
        },
        logoUrl: {
            type: 'string',
            isNullable: true,
        },
        milestones: {
            type: 'array',
            contains: {
                properties: {
                    action: {
                        properties: {
                            meta: {
                                properties: {
                                },
                            },
                            type: {
                                type: 'string',
                            },
                        },
                    },
                    icon: {
                        type: 'string',
                        isRequired: true,
                    },
                    stampRequirement: {
                        type: 'number',
                        isRequired: true,
                    },
                },
            },
            isNullable: true,
        },
        name: {
            type: 'string',
            isNullable: true,
        },
    },
} as const;
