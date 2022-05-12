// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/versioning-policy|4.0.1
/**
 * How the system supports versioning for a resource.
 */
export var VersioningPolicyValueSetEnum;
(function (VersioningPolicyValueSetEnum) {
    /**
     * no-version: VersionId meta-property is not supported (server) or used (client).
     */
    VersioningPolicyValueSetEnum["NoVersionIdSupport"] = "no-version";
    /**
     * versioned: VersionId meta-property is supported (server) or used (client).
     */
    VersioningPolicyValueSetEnum["Versioned"] = "versioned";
    /**
     * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    VersioningPolicyValueSetEnum["VersionIdTrackedFully"] = "versioned-update";
})(VersioningPolicyValueSetEnum || (VersioningPolicyValueSetEnum = {}));
//# sourceMappingURL=VersioningPolicyValueSetEnum.js.map