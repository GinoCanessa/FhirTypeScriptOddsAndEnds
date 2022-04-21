import { Coding } from '../fhir.js';
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare const AllergyIntoleranceCriticalityValueSet: {
    /**
     * high: Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
     */
    readonly HighRisk: Coding;
    /**
     * low: Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
     */
    readonly LowRisk: Coding;
    /**
     * unable-to-assess: Unable to assess the worst case result of a future exposure.
     */
    readonly UnableToAssessRisk: Coding;
};
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare type AllergyIntoleranceCriticalityValueSetType = typeof AllergyIntoleranceCriticalityValueSet;
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare enum AllergyIntoleranceCriticalityValueSetEnum {
    /**
     * high: Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
     */
    HighRisk = "high",
    /**
     * low: Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
     */
    LowRisk = "low",
    /**
     * unable-to-assess: Unable to assess the worst case result of a future exposure.
     */
    UnableToAssessRisk = "unable-to-assess"
}
//# sourceMappingURL=AllergyIntoleranceCriticalityValueSet.d.ts.map