"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersioningPolicy = void 0;
/**
 * How the system supports versioning for a resource.
 */
exports.VersioningPolicy = {
    /**
     * VersionId meta-property is not supported (server) or used (client).
     */
    versioning_policy_NoVersionIdSupport: {
        code: "no-version",
        display: "No VersionId Support",
        system: "http://hl7.org/fhir/versioning-policy"
    },
    /**
     * VersionId meta-property is supported (server) or used (client).
     */
    versioning_policy_Versioned: {
        code: "versioned",
        display: "Versioned",
        system: "http://hl7.org/fhir/versioning-policy"
    },
    /**
     * VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    versioning_policy_VersionIdTrackedFully: {
        code: "versioned-update",
        display: "VersionId tracked fully",
        system: "http://hl7.org/fhir/versioning-policy"
    },
};
//# sourceMappingURL=VersioningPolicy.js.map