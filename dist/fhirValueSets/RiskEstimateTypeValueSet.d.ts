import { Coding } from '../fhir.js';
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare const RiskEstimateTypeValueSet: {
    /**
     * count: descriptive measure reported as total number of items.
     */
    readonly Count: Coding;
    /**
     * derivedProportion: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    readonly DerivedProportion: Coding;
    /**
     * descriptive: descriptive measure reported as narrative.
     */
    readonly Descriptive: Coding;
    /**
     * mean: continuous numerical measure reported as an average.
     */
    readonly Mean: Coding;
    /**
     * median: continuous numerical measure reported as the middle of the range.
     */
    readonly Median: Coding;
    /**
     * proportion: dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
     */
    readonly Proportion: Coding;
};
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare type RiskEstimateTypeValueSetType = typeof RiskEstimateTypeValueSet;
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare enum RiskEstimateTypeValueSetEnum {
    /**
     * count: descriptive measure reported as total number of items.
     */
    Count = "count",
    /**
     * derivedProportion: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    DerivedProportion = "derivedProportion",
    /**
     * descriptive: descriptive measure reported as narrative.
     */
    Descriptive = "descriptive",
    /**
     * mean: continuous numerical measure reported as an average.
     */
    Mean = "mean",
    /**
     * median: continuous numerical measure reported as the middle of the range.
     */
    Median = "median",
    /**
     * proportion: dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
     */
    Proportion = "proportion"
}
//# sourceMappingURL=RiskEstimateTypeValueSet.d.ts.map