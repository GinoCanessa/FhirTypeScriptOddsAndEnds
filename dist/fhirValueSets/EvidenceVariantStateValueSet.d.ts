import { Coding } from '../fhir.js';
/**
 * Used for results by exposure in variant states such as low-risk, medium-risk and high-risk states.
 */
export declare const EvidenceVariantStateValueSet: {
    /**
     * high-risk: high risk estimate.
     */
    readonly HighRisk: Coding;
    /**
     * low-risk: low risk estimate.
     */
    readonly LowRisk: Coding;
    /**
     * medium-risk: medium risk estimate.
     */
    readonly MediumRisk: Coding;
};
/**
 * Used for results by exposure in variant states such as low-risk, medium-risk and high-risk states.
 */
export declare type EvidenceVariantStateValueSetType = typeof EvidenceVariantStateValueSet;
/**
 * Used for results by exposure in variant states such as low-risk, medium-risk and high-risk states.
 */
export declare enum EvidenceVariantStateValueSetEnum {
    /**
     * high-risk: high risk estimate.
     */
    HighRisk = "high-risk",
    /**
     * low-risk: low risk estimate.
     */
    LowRisk = "low-risk",
    /**
     * medium-risk: medium risk estimate.
     */
    MediumRisk = "medium-risk"
}
//# sourceMappingURL=EvidenceVariantStateValueSet.d.ts.map