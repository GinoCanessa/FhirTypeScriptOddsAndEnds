"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EligibilityresponsePurpose = void 0;
/**
 * A code specifying the types of information being requested.
 */
exports.EligibilityresponsePurpose = {
    /**
     * The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    eligibilityresponse_purpose_CoverageAuthRequirements: {
        code: "auth-requirements",
        display: "Coverage auth-requirements",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose"
    },
    /**
     * The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    eligibilityresponse_purpose_CoverageBenefits: {
        code: "benefits",
        display: "Coverage benefits",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose"
    },
    /**
     * The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    eligibilityresponse_purpose_CoverageDiscovery: {
        code: "discovery",
        display: "Coverage Discovery",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose"
    },
    /**
     * A check that the specified coverages are in-force is requested.
     */
    eligibilityresponse_purpose_CoverageValidation: {
        code: "validation",
        display: "Coverage Validation",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose"
    },
};
//# sourceMappingURL=EligibilityresponsePurpose.js.map