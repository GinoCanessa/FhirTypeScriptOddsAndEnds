import { Coding } from '../fhir';
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export declare const EffectEstimateTypeValueSet: {
    /**
     * absolute risk difference (a type of absolute effect estimate).
     */
    effect_estimate_type_AbsoluteRiskDifference: Coding;
    /**
     * mean difference (a type of absolute effect estimate).
     */
    effect_estimate_type_MeanDifference: Coding;
    /**
     * median difference (a type of absolute effect estimate).
     */
    effect_estimate_type_MedianDifference: Coding;
    /**
     * standardized mean difference (a type of absolute effect estimate).
     */
    effect_estimate_type_StandardizedMeanDifference: Coding;
    /**
     * hazard ratio (a type of relative effect estimate).
     */
    effect_estimate_type_HazardRatio: Coding;
    /**
     * odds ratio (a type of relative effect estimate).
     */
    effect_estimate_type_OddsRatio: Coding;
    /**
     * relative risk (a type of relative effect estimate).
     */
    effect_estimate_type_RelativeRisk: Coding;
};
//# sourceMappingURL=EffectEstimateTypeValueSet.d.ts.map