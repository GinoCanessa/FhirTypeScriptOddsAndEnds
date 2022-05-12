import { Coding } from '../fhir.js';
/**
 * Describes the category of the metric.
 */
export declare const MetricCategoryValueSet: {
    /**
     * calculation: DeviceObservations generated for this DeviceMetric are calculated.
     */
    readonly Calculation: Coding;
    /**
     * measurement: DeviceObservations generated for this DeviceMetric are measured.
     */
    readonly Measurement: Coding;
    /**
     * setting: DeviceObservations generated for this DeviceMetric is a setting that will influence the behavior of the Device.
     */
    readonly Setting: Coding;
    /**
     * unspecified: The category of this DeviceMetric is unspecified.
     */
    readonly Unspecified: Coding;
};
/**
 * Describes the category of the metric.
 */
export declare type MetricCategoryValueSetType = typeof MetricCategoryValueSet;
/**
 * Describes the category of the metric.
 */
//# sourceMappingURL=MetricCategoryValueSet.d.ts.map