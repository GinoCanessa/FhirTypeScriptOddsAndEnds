import { Coding } from '../fhir.js';
/**
 * Describes the type of a metric calibration.
 */
export declare const MetricCalibrationTypeValueSet: {
    /**
     * gain: Gain metric calibration method.
     */
    readonly Gain: Coding;
    /**
     * offset: Offset metric calibration method.
     */
    readonly Offset: Coding;
    /**
     * two-point: Two-point metric calibration method.
     */
    readonly TwoPoint: Coding;
    /**
     * unspecified: Metric calibration method has not been identified.
     */
    readonly Unspecified: Coding;
};
/**
 * Describes the type of a metric calibration.
 */
export declare type MetricCalibrationTypeValueSetType = typeof MetricCalibrationTypeValueSet;
/**
 * Describes the type of a metric calibration.
 */
//# sourceMappingURL=MetricCalibrationTypeValueSet.d.ts.map