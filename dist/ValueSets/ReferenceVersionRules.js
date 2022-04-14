"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceVersionRules = void 0;
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
exports.ReferenceVersionRules = {
    /**
     * The reference may be either version independent or version specific.
     */
    reference_version_rules_EitherSpecificOrIndependent: {
        code: "either",
        display: "Either Specific or independent",
        system: "http://hl7.org/fhir/reference-version-rules"
    },
    /**
     * The reference must be version independent.
     */
    reference_version_rules_VersionIndependent: {
        code: "independent",
        display: "Version independent",
        system: "http://hl7.org/fhir/reference-version-rules"
    },
    /**
     * The reference must be version specific.
     */
    reference_version_rules_VersionSpecific: {
        code: "specific",
        display: "Version Specific",
        system: "http://hl7.org/fhir/reference-version-rules"
    },
};
//# sourceMappingURL=ReferenceVersionRules.js.map