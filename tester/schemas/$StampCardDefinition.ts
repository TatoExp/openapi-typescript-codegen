/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StampCardDefinition = {
    "description": "StampCardDefinition schema",
    "properties": {
        "memberId": {
            "format": "uuid",
            "nullable": true,
            "type": "string"
        },
        "typeId": {
            "format": "uuid",
            "type": "string"
        }
    },
    "required": [
        "typeId"
    ],
    "type": "object"
} as const;
