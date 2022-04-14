"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricCategory = void 0;
/**
 * Describes the category of the metric.
 */
exports.MetricCategory = {
    /**
     * DeviceObservations generated for this DeviceMetric are calculated.
     */
    metric_category_Calculation: {
        code: "calculation",
        display: "Calculation",
        system: "http://hl7.org/fhir/metric-category"
    },
    /**
     * DeviceObservations generated for this DeviceMetric are measured.
     */
    metric_category_Measurement: {
        code: "measurement",
        display: "Measurement",
        system: "http://hl7.org/fhir/metric-category"
    },
    /**
     * DeviceObservations generated for this DeviceMetric is a setting that will influence the behavior of the Device.
     */
    metric_category_Setting: {
        code: "setting",
        display: "Setting",
        system: "http://hl7.org/fhir/metric-category"
    },
    /**
     * The category of this DeviceMetric is unspecified.
     */
    metric_category_Unspecified: {
        code: "unspecified",
        display: "Unspecified",
        system: "http://hl7.org/fhir/metric-category"
    },
};
//# sourceMappingURL=MetricCategory.js.map