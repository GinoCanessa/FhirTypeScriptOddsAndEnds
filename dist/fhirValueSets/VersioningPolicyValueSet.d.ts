import { Coding } from '../fhir.js';
/**
 * How the system supports versioning for a resource.
 */
export declare const VersioningPolicyValueSet: {
    /**
     * no-version: VersionId meta-property is not supported (server) or used (client).
     */
    readonly NoVersionIdSupport: Coding;
    /**
     * versioned: VersionId meta-property is supported (server) or used (client).
     */
    readonly Versioned: Coding;
    /**
     * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    readonly VersionIdTrackedFully: Coding;
};
/**
 * How the system supports versioning for a resource.
 */
export declare type VersioningPolicyValueSetType = typeof VersioningPolicyValueSet;
/**
 * How the system supports versioning for a resource.
 */
//# sourceMappingURL=VersioningPolicyValueSet.d.ts.map