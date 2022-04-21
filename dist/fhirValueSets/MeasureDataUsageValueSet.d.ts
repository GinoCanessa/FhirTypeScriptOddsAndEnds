import { Coding } from '../fhir.js';
/**
 * The intended usage for supplemental data elements in the measure.
 */
export declare const MeasureDataUsageValueSet: {
    /**
     * risk-adjustment-factor: The data is intended to be used to calculate and apply a risk adjustment model for the measure.
     */
    readonly RiskAdjustmentFactor: Coding;
    /**
     * supplemental-data: The data is intended to be provided as additional information alongside the measure results.
     */
    readonly SupplementalData: Coding;
};
/**
 * The intended usage for supplemental data elements in the measure.
 */
export declare type MeasureDataUsageValueSetType = typeof MeasureDataUsageValueSet;
/**
 * The intended usage for supplemental data elements in the measure.
 */
export declare enum MeasureDataUsageValueSetEnum {
    /**
     * risk-adjustment-factor: The data is intended to be used to calculate and apply a risk adjustment model for the measure.
     */
    RiskAdjustmentFactor = "risk-adjustment-factor",
    /**
     * supplemental-data: The data is intended to be provided as additional information alongside the measure results.
     */
    SupplementalData = "supplemental-data"
}
//# sourceMappingURL=MeasureDataUsageValueSet.d.ts.map