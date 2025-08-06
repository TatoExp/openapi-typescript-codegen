/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StampCardType = {
    description: `StampCardType schema`,
    properties: {
        backgroundColor: {
            type: 'string',
            isRequired: true,
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
        },
        deletedAt: {
            type: 'string',
            format: 'date-time',
        },
        description: {
            type: 'string',
            isRequired: true,
        },
        foregroundColor: {
            type: 'string',
            isRequired: true,
        },
        id: {
            type: 'string',
            format: 'uuid',
        },
        labelColor: {
            type: 'string',
            isRequired: true,
        },
        logoText: {
            type: 'string',
            isRequired: true,
        },
        logoUrl: {
            type: 'string',
            isRequired: true,
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
            isRequired: true,
        },
        name: {
            type: 'string',
            isRequired: true,
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
        },
    },
} as const;
