/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StampCard = {
    "description": "StampCard schema",
    "properties": {
        "createdAt": {
            "format": "date-time",
            "type": "string"
        },
        "deletedAt": {
            "format": "date-time",
            "type": "string"
        },
        "id": {
            "format": "uuid",
            "type": "string"
        },
        "memberId": {
            "format": "uuid",
            "type": "string"
        },
        "stamps": {
            "maximum": 255,
            "minimum": 0,
            "type": "integer"
        },
        "typeId": {
            "format": "uuid",
            "type": "string"
        },
        "updatedAt": {
            "format": "date-time",
            "type": "string"
        }
    },
    "type": "object"
} as const;
