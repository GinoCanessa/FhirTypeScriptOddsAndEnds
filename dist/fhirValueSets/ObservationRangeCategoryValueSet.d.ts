import { Coding } from '../fhir.js';
/**
 * Codes identifying the category of observation range.
 */
export declare const ObservationRangeCategoryValueSet: {
    /**
     * absolute: Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
     */
    readonly AbsoluteRange: Coding;
    /**
     * critical: Critical Range for Ordinal and Continuous Observations.
     */
    readonly CriticalRange: Coding;
    /**
     * reference: Reference (Normal) Range for Ordinal and Continuous Observations.
     */
    readonly ReferenceRange: Coding;
};
/**
 * Codes identifying the category of observation range.
 */
export declare type ObservationRangeCategoryValueSetType = typeof ObservationRangeCategoryValueSet;
/**
 * Codes identifying the category of observation range.
 */
export declare enum ObservationRangeCategoryValueSetEnum {
    /**
     * absolute: Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
     */
    AbsoluteRange = "absolute",
    /**
     * critical: Critical Range for Ordinal and Continuous Observations.
     */
    CriticalRange = "critical",
    /**
     * reference: Reference (Normal) Range for Ordinal and Continuous Observations.
     */
    ReferenceRange = "reference"
}
//# sourceMappingURL=ObservationRangeCategoryValueSet.d.ts.map