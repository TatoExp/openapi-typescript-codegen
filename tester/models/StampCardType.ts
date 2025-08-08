/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * StampCardType schema
 */
export type StampCardType = {
    backgroundColor: string;
    createdAt?: string;
    deletedAt?: string;
    description: string;
    foregroundColor: string;
    id?: string;
    labelColor: string;
    logoText?: string | null;
    logoUrl?: string | null;
    milestones: Array<{
        action?: {
            meta?: any;
            type?: string;
        };
        icon: string;
        stampRequirement: number;
    }>;
    name: string;
    updatedAt?: string;
};

