// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * How the system supports versioning for a resource.
 */
export const VersioningPolicyValueSet = {
    /**
     * VersionId meta-property is not supported (server) or used (client).
     */
    versioning_policy_NoVersionIdSupport: new Coding({
        code: "no-version",
        display: "No VersionId Support",
        system: "http://hl7.org/fhir/versioning-policy"
    }),
    /**
     * VersionId meta-property is supported (server) or used (client).
     */
    versioning_policy_Versioned: new Coding({
        code: "versioned",
        display: "Versioned",
        system: "http://hl7.org/fhir/versioning-policy"
    }),
    /**
     * VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    versioning_policy_VersionIdTrackedFully: new Coding({
        code: "versioned-update",
        display: "VersionId tracked fully",
        system: "http://hl7.org/fhir/versioning-policy"
    }),
};
//# sourceMappingURL=VersioningPolicyValueSet.js.map