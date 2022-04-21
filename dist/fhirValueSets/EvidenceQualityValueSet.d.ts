import { Coding } from '../fhir.js';
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare const EvidenceQualityValueSet: {
    /**
     * high: High quality evidence.
     */
    readonly HighQuality: Coding;
    /**
     * low: Low quality evidence.
     */
    readonly LowQuality: Coding;
    /**
     * moderate: Moderate quality evidence.
     */
    readonly ModerateQuality: Coding;
    /**
     * very-low: Very low quality evidence.
     */
    readonly VeryLowQuality: Coding;
};
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare type EvidenceQualityValueSetType = typeof EvidenceQualityValueSet;
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare enum EvidenceQualityValueSetEnum {
    /**
     * high: High quality evidence.
     */
    HighQuality = "high",
    /**
     * low: Low quality evidence.
     */
    LowQuality = "low",
    /**
     * moderate: Moderate quality evidence.
     */
    ModerateQuality = "moderate",
    /**
     * very-low: Very low quality evidence.
     */
    VeryLowQuality = "very-low"
}
//# sourceMappingURL=EvidenceQualityValueSet.d.ts.map