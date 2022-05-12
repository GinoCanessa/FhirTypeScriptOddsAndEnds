/**
 * How the system supports versioning for a resource.
 */
export declare enum VersioningPolicyValueSetEnum {
    /**
     * no-version: VersionId meta-property is not supported (server) or used (client).
     */
    NoVersionIdSupport = "no-version",
    /**
     * versioned: VersionId meta-property is supported (server) or used (client).
     */
    Versioned = "versioned",
    /**
     * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    VersionIdTrackedFully = "versioned-update"
}
//# sourceMappingURL=VersioningPolicyValueSetEnum.d.ts.map