"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricCalibrationType = void 0;
/**
 * Describes the type of a metric calibration.
 */
exports.MetricCalibrationType = {
    /**
     * Gain metric calibration method.
     */
    metric_calibration_type_Gain: {
        code: "gain",
        display: "Gain",
        system: "http://hl7.org/fhir/metric-calibration-type"
    },
    /**
     * Offset metric calibration method.
     */
    metric_calibration_type_Offset: {
        code: "offset",
        display: "Offset",
        system: "http://hl7.org/fhir/metric-calibration-type"
    },
    /**
     * Two-point metric calibration method.
     */
    metric_calibration_type_TwoPoint: {
        code: "two-point",
        display: "Two Point",
        system: "http://hl7.org/fhir/metric-calibration-type"
    },
    /**
     * Metric calibration method has not been identified.
     */
    metric_calibration_type_Unspecified: {
        code: "unspecified",
        display: "Unspecified",
        system: "http://hl7.org/fhir/metric-calibration-type"
    },
};
//# sourceMappingURL=MetricCalibrationType.js.map