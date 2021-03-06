// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose|4.0.1
import { Coding } from '../fhir.js';
/**
 * A code specifying the types of information being requested.
 */
export const EligibilityresponsePurposeValueSet = {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    CoverageAuthRequirements: new Coding({
        display: "Coverage auth-requirements",
        code: "auth-requirements",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose",
    }),
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    CoverageBenefits: new Coding({
        display: "Coverage benefits",
        code: "benefits",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose",
    }),
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    CoverageDiscovery: new Coding({
        display: "Coverage Discovery",
        code: "discovery",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose",
    }),
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    CoverageValidation: new Coding({
        display: "Coverage Validation",
        code: "validation",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose",
    }),
};
/**
 * A code specifying the types of information being requested.
 */
//# sourceMappingURL=EligibilityresponsePurposeValueSet.js.map