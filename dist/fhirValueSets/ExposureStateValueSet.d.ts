import { Coding } from '../fhir.js';
/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export declare const ExposureStateValueSet: {
    /**
     * exposure: used when the results by exposure is describing the results for the primary exposure of interest.
     */
    readonly Exposure: Coding;
    /**
     * exposure-alternative: used when the results by exposure is describing the results for the alternative exposure state, control state or comparator state.
     */
    readonly ExposureAlternative: Coding;
};
/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export declare type ExposureStateValueSetType = typeof ExposureStateValueSet;
/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export declare enum ExposureStateValueSetEnum {
    /**
     * exposure: used when the results by exposure is describing the results for the primary exposure of interest.
     */
    Exposure = "exposure",
    /**
     * exposure-alternative: used when the results by exposure is describing the results for the alternative exposure state, control state or comparator state.
     */
    ExposureAlternative = "exposure-alternative"
}
//# sourceMappingURL=ExposureStateValueSet.d.ts.map