import { Coding } from '../fhir.js';
/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export declare const PrecisionEstimateTypeValueSet: {
    /**
     * CI: confidence interval.
     */
    readonly ConfidenceInterval: Coding;
    /**
     * IQR: interquartile range.
     */
    readonly InterquartileRange: Coding;
    /**
     * SD: standard deviation.
     */
    readonly StandardDeviation: Coding;
    /**
     * SE: standard error.
     */
    readonly StandardError: Coding;
};
/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export declare type PrecisionEstimateTypeValueSetType = typeof PrecisionEstimateTypeValueSet;
/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export declare enum PrecisionEstimateTypeValueSetEnum {
    /**
     * CI: confidence interval.
     */
    ConfidenceInterval = "CI",
    /**
     * IQR: interquartile range.
     */
    InterquartileRange = "IQR",
    /**
     * SD: standard deviation.
     */
    StandardDeviation = "SD",
    /**
     * SE: standard error.
     */
    StandardError = "SE"
}
//# sourceMappingURL=PrecisionEstimateTypeValueSet.d.ts.map