import { Coding } from '../fhir.js';
/**
 * The kind of dose or rate specified.
 */
export declare const DoseRateTypeValueSet: {
    /**
     * calculated: The dose specified is calculated by the prescriber or the system.
     */
    readonly Calculated: Coding;
    /**
     * ordered: The dose specified is as ordered by the prescriber.
     */
    readonly Ordered: Coding;
};
/**
 * The kind of dose or rate specified.
 */
export declare type DoseRateTypeValueSetType = typeof DoseRateTypeValueSet;
/**
 * The kind of dose or rate specified.
 */
export declare enum DoseRateTypeValueSetEnum {
    /**
     * calculated: The dose specified is calculated by the prescriber or the system.
     */
    Calculated = "calculated",
    /**
     * ordered: The dose specified is as ordered by the prescriber.
     */
    Ordered = "ordered"
}
//# sourceMappingURL=DoseRateTypeValueSet.d.ts.map