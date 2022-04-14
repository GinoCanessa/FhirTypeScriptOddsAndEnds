"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EligibilityrequestPurpose = void 0;
/**
 * A code specifying the types of information being requested.
 */
exports.EligibilityrequestPurpose = {
    /**
     * The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    eligibilityrequest_purpose_CoverageAuthRequirements: {
        code: "auth-requirements",
        display: "Coverage auth-requirements",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose"
    },
    /**
     * The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    eligibilityrequest_purpose_CoverageBenefits: {
        code: "benefits",
        display: "Coverage benefits",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose"
    },
    /**
     * The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    eligibilityrequest_purpose_CoverageDiscovery: {
        code: "discovery",
        display: "Coverage Discovery",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose"
    },
    /**
     * A check that the specified coverages are in-force is requested.
     */
    eligibilityrequest_purpose_CoverageValidation: {
        code: "validation",
        display: "Coverage Validation",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose"
    },
};
//# sourceMappingURL=EligibilityrequestPurpose.js.map