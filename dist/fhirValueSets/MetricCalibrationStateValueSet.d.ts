import { Coding } from '../fhir.js';
/**
 * Describes the state of a metric calibration.
 */
export declare const MetricCalibrationStateValueSet: {
    /**
     * calibrated: The metric has been calibrated.
     */
    readonly Calibrated: Coding;
    /**
     * calibration-required: The metric needs to be calibrated.
     */
    readonly CalibrationRequired: Coding;
    /**
     * not-calibrated: The metric has not been calibrated.
     */
    readonly NotCalibrated: Coding;
    /**
     * unspecified: The state of calibration of this metric is unspecified.
     */
    readonly Unspecified: Coding;
};
/**
 * Describes the state of a metric calibration.
 */
export declare type MetricCalibrationStateValueSetType = typeof MetricCalibrationStateValueSet;
/**
 * Describes the state of a metric calibration.
 */
//# sourceMappingURL=MetricCalibrationStateValueSet.d.ts.map