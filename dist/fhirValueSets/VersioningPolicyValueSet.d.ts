import { Coding } from '../fhir';
/**
 * How the system supports versioning for a resource.
 */
export declare const VersioningPolicyValueSet: {
    /**
     * VersionId meta-property is not supported (server) or used (client).
     */
    versioning_policy_NoVersionIdSupport: Coding;
    /**
     * VersionId meta-property is supported (server) or used (client).
     */
    versioning_policy_Versioned: Coding;
    /**
     * VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    versioning_policy_VersionIdTrackedFully: Coding;
};
//# sourceMappingURL=VersioningPolicyValueSet.d.ts.map