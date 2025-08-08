/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StampCardType = {
    "description": "StampCardType schema",
    "properties": {
        "backgroundColor": {
            "type": "string"
        },
        "createdAt": {
            "format": "date-time",
            "type": "string"
        },
        "deletedAt": {
            "format": "date-time",
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "foregroundColor": {
            "type": "string"
        },
        "id": {
            "format": "uuid",
            "type": "string"
        },
        "labelColor": {
            "type": "string"
        },
        "logoText": {
            "nullable": true,
            "type": "string"
        },
        "logoUrl": {
            "nullable": true,
            "type": "string"
        },
        "milestones": {
            "items": {
                "properties": {
                    "action": {
                        "properties": {
                            "meta": {},
                            "type": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    },
                    "icon": {
                        "type": "string"
                    },
                    "stampRequirement": {
                        "type": "integer"
                    }
                },
                "required": [
                    "icon",
                    "stampRequirement"
                ],
                "type": "object",
                "x-fuego-required-marker": true
            },
            "type": "array"
        },
        "name": {
            "type": "string"
        },
        "updatedAt": {
            "format": "date-time",
            "type": "string"
        }
    },
    "required": [
        "backgroundColor",
        "description",
        "foregroundColor",
        "labelColor",
        "milestones",
        "name"
    ],
    "type": "object"
} as const;
