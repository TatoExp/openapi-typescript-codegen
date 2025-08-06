/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * StampCardTypePatch schema
 */
export type StampCardTypePatch = {
    backgroundColor?: string | null;
    description?: string | null;
    foregroundColor?: string | null;
    labelColor?: string | null;
    logoText?: string | null;
    logoUrl?: string | null;
    milestones?: Array<{
        action?: {
            meta?: any;
            type?: string;
        };
        icon: string;
        stampRequirement: number;
    }> | null;
    name?: string | null;
};

