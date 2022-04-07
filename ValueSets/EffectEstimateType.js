/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export var EffectEstimateType = {
    /**
     * absolute risk difference (a type of absolute effect estimate).
     */
    effect_estimate_type_AbsoluteRiskDifference: {
        code: "absolute-ARD",
        display: "absolute risk difference",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type"
    },
    /**
     * mean difference (a type of absolute effect estimate).
     */
    effect_estimate_type_MeanDifference: {
        code: "absolute-MeanDiff",
        display: "mean difference",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type"
    },
    /**
     * median difference (a type of absolute effect estimate).
     */
    effect_estimate_type_MedianDifference: {
        code: "absolute-MedianDiff",
        display: "median difference",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type"
    },
    /**
     * standardized mean difference (a type of absolute effect estimate).
     */
    effect_estimate_type_StandardizedMeanDifference: {
        code: "absolute-SMD",
        display: "standardized mean difference",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type"
    },
    /**
     * hazard ratio (a type of relative effect estimate).
     */
    effect_estimate_type_HazardRatio: {
        code: "relative-HR",
        display: "hazard ratio",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type"
    },
    /**
     * odds ratio (a type of relative effect estimate).
     */
    effect_estimate_type_OddsRatio: {
        code: "relative-OR",
        display: "odds ratio",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type"
    },
    /**
     * relative risk (a type of relative effect estimate).
     */
    effect_estimate_type_RelativeRisk: {
        code: "relative-RR",
        display: "relative risk",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type"
    }
};
