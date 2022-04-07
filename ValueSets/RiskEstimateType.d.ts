import { Coding } from '../strictmodels';
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare const RiskEstimateType: {
    /**
     * descriptive measure reported as total number of items.
     */
    risk_estimate_type_Count: Coding;
    /**
     * A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    risk_estimate_type_DerivedProportion: Coding;
    /**
     * descriptive measure reported as narrative.
     */
    risk_estimate_type_Descriptive: Coding;
    /**
     * continuous numerical measure reported as an average.
     */
    risk_estimate_type_Mean: Coding;
    /**
     * continuous numerical measure reported as the middle of the range.
     */
    risk_estimate_type_Median: Coding;
    /**
     * dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
     */
    risk_estimate_type_Proportion: Coding;
};
//# sourceMappingURL=RiskEstimateType.d.ts.map