/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StampCardTypePatch = {
    "description": "StampCardTypePatch schema",
    "properties": {
        "backgroundColor": {
            "nullable": true,
            "type": "string"
        },
        "description": {
            "nullable": true,
            "type": "string"
        },
        "foregroundColor": {
            "nullable": true,
            "type": "string"
        },
        "labelColor": {
            "nullable": true,
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
                "type": "object"
            },
            "nullable": true,
            "type": "array"
        },
        "name": {
            "nullable": true,
            "type": "string"
        }
    },
    "type": "object"
} as const;
