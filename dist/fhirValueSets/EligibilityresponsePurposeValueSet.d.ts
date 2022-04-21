import { Coding } from '../fhir.js';
/**
 * A code specifying the types of information being requested.
 */
export declare const EligibilityresponsePurposeValueSet: {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    readonly CoverageAuthRequirements: Coding;
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    readonly CoverageBenefits: Coding;
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    readonly CoverageDiscovery: Coding;
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    readonly CoverageValidation: Coding;
};
/**
 * A code specifying the types of information being requested.
 */
export declare type EligibilityresponsePurposeValueSetType = typeof EligibilityresponsePurposeValueSet;
/**
 * A code specifying the types of information being requested.
 */
export declare enum EligibilityresponsePurposeValueSetEnum {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    CoverageAuthRequirements = "auth-requirements",
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    CoverageBenefits = "benefits",
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    CoverageDiscovery = "discovery",
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    CoverageValidation = "validation"
}
//# sourceMappingURL=EligibilityresponsePurposeValueSet.d.ts.map