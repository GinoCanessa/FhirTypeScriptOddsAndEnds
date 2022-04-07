import { Coding } from '../strictmodels';
/**
 * A code specifying the types of information being requested.
 */
export declare const EligibilityrequestPurpose: {
    /**
     * The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    eligibilityrequest_purpose_CoverageAuthRequirements: Coding;
    /**
     * The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    eligibilityrequest_purpose_CoverageBenefits: Coding;
    /**
     * The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    eligibilityrequest_purpose_CoverageDiscovery: Coding;
    /**
     * A check that the specified coverages are in-force is requested.
     */
    eligibilityrequest_purpose_CoverageValidation: Coding;
};
//# sourceMappingURL=EligibilityrequestPurpose.d.ts.map