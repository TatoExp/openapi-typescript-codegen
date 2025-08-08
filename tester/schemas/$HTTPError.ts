/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HTTPError = {
    "description": "HTTPError schema",
    "properties": {
        "detail": {
            "description": "Human readable error message",
            "nullable": true,
            "type": "string"
        },
        "errors": {
            "items": {
                "nullable": true,
                "properties": {
                    "more": {
                        "additionalProperties": {
                            "description": "Additional information about the error",
                            "nullable": true
                        },
                        "description": "Additional information about the error",
                        "nullable": true,
                        "type": "object"
                    },
                    "name": {
                        "description": "For example, name of the parameter that caused the error",
                        "type": "string"
                    },
                    "reason": {
                        "description": "Human readable error message",
                        "type": "string"
                    }
                },
                "type": "object"
            },
            "nullable": true,
            "type": "array"
        },
        "instance": {
            "nullable": true,
            "type": "string"
        },
        "status": {
            "description": "HTTP status code",
            "example": 403,
            "nullable": true,
            "type": "integer"
        },
        "title": {
            "description": "Short title of the error",
            "nullable": true,
            "type": "string"
        },
        "type": {
            "description": "URL of the error type. Can be used to lookup the error in a documentation",
            "nullable": true,
            "type": "string"
        }
    },
    "type": "object"
} as const;
