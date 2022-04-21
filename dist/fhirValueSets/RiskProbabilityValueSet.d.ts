import { Coding } from '../fhir.js';
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare const RiskProbabilityValueSet: {
    /**
     * certain: The specified outcome is effectively guaranteed.
     */
    readonly Certain: Coding;
    /**
     * high: The specified outcome is more likely to occur than not.
     */
    readonly HighLikelihood: Coding;
    /**
     * low: The specified outcome is possible but unlikely.
     */
    readonly LowLikelihood: Coding;
    /**
     * moderate: The specified outcome has a reasonable likelihood of occurrence.
     */
    readonly ModerateLikelihood: Coding;
    /**
     * negligible: The specified outcome is exceptionally unlikely.
     */
    readonly NegligibleLikelihood: Coding;
};
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare type RiskProbabilityValueSetType = typeof RiskProbabilityValueSet;
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare enum RiskProbabilityValueSetEnum {
    /**
     * certain: The specified outcome is effectively guaranteed.
     */
    Certain = "certain",
    /**
     * high: The specified outcome is more likely to occur than not.
     */
    HighLikelihood = "high",
    /**
     * low: The specified outcome is possible but unlikely.
     */
    LowLikelihood = "low",
    /**
     * moderate: The specified outcome has a reasonable likelihood of occurrence.
     */
    ModerateLikelihood = "moderate",
    /**
     * negligible: The specified outcome is exceptionally unlikely.
     */
    NegligibleLikelihood = "negligible"
}
//# sourceMappingURL=RiskProbabilityValueSet.d.ts.map