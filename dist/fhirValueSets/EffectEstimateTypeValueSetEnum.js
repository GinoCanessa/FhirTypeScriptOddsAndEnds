// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/effect-estimate-type|4.0.1
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export var EffectEstimateTypeValueSetEnum;
(function (EffectEstimateTypeValueSetEnum) {
    /**
     * absolute-ARD: absolute risk difference (a type of absolute effect estimate).
     */
    EffectEstimateTypeValueSetEnum["AbsoluteRiskDifference"] = "absolute-ARD";
    /**
     * absolute-MeanDiff: mean difference (a type of absolute effect estimate).
     */
    EffectEstimateTypeValueSetEnum["MeanDifference"] = "absolute-MeanDiff";
    /**
     * absolute-MedianDiff: median difference (a type of absolute effect estimate).
     */
    EffectEstimateTypeValueSetEnum["MedianDifference"] = "absolute-MedianDiff";
    /**
     * absolute-SMD: standardized mean difference (a type of absolute effect estimate).
     */
    EffectEstimateTypeValueSetEnum["StandardizedMeanDifference"] = "absolute-SMD";
    /**
     * relative-HR: hazard ratio (a type of relative effect estimate).
     */
    EffectEstimateTypeValueSetEnum["HazardRatio"] = "relative-HR";
    /**
     * relative-OR: odds ratio (a type of relative effect estimate).
     */
    EffectEstimateTypeValueSetEnum["OddsRatio"] = "relative-OR";
    /**
     * relative-RR: relative risk (a type of relative effect estimate).
     */
    EffectEstimateTypeValueSetEnum["RelativeRisk"] = "relative-RR";
})(EffectEstimateTypeValueSetEnum || (EffectEstimateTypeValueSetEnum = {}));
//# sourceMappingURL=EffectEstimateTypeValueSetEnum.js.map