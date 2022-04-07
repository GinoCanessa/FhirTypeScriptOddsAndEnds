import { Coding } from '../strictmodels';
/**
 * A code specifying the types of information being requested.
 */
export declare const EligibilityresponsePurpose: {
    /**
     * The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    eligibilityresponse_purpose_CoverageAuthRequirements: Coding;
    /**
     * The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    eligibilityresponse_purpose_CoverageBenefits: Coding;
    /**
     * The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    eligibilityresponse_purpose_CoverageDiscovery: Coding;
    /**
     * A check that the specified coverages are in-force is requested.
     */
    eligibilityresponse_purpose_CoverageValidation: Coding;
};
//# sourceMappingURL=EligibilityresponsePurpose.d.ts.map