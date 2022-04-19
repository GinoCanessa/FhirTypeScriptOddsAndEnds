import { Coding } from '../fhir';
/**
 * Describes the category of the metric.
 */
export declare const MetricCategoryValueSet: {
    /**
     * DeviceObservations generated for this DeviceMetric are calculated.
     */
    metric_category_Calculation: Coding;
    /**
     * DeviceObservations generated for this DeviceMetric are measured.
     */
    metric_category_Measurement: Coding;
    /**
     * DeviceObservations generated for this DeviceMetric is a setting that will influence the behavior of the Device.
     */
    metric_category_Setting: Coding;
    /**
     * The category of this DeviceMetric is unspecified.
     */
    metric_category_Unspecified: Coding;
};
//# sourceMappingURL=MetricCategoryValueSet.d.ts.map