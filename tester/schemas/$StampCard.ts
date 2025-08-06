/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StampCard = {
    description: `StampCard schema`,
    properties: {
        createdAt: {
            type: 'string',
            format: 'date-time',
        },
        deletedAt: {
            type: 'string',
            format: 'date-time',
        },
        id: {
            type: 'string',
            format: 'uuid',
        },
        memberId: {
            type: 'string',
            format: 'uuid',
        },
        stamps: {
            type: 'number',
            maximum: 255,
        },
        typeId: {
            type: 'string',
            format: 'uuid',
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
        },
    },
} as const;
