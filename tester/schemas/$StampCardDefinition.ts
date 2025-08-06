/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StampCardDefinition = {
    description: `StampCardDefinition schema`,
    properties: {
        memberId: {
            type: 'string',
            isNullable: true,
            format: 'uuid',
        },
        typeId: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
    },
} as const;
