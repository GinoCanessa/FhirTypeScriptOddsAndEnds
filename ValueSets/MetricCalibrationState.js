/**
 * Describes the state of a metric calibration.
 */
export var MetricCalibrationState = {
    /**
     * The metric has been calibrated.
     */
    metric_calibration_state_Calibrated: {
        code: "calibrated",
        display: "Calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state"
    },
    /**
     * The metric needs to be calibrated.
     */
    metric_calibration_state_CalibrationRequired: {
        code: "calibration-required",
        display: "Calibration Required",
        system: "http://hl7.org/fhir/metric-calibration-state"
    },
    /**
     * The metric has not been calibrated.
     */
    metric_calibration_state_NotCalibrated: {
        code: "not-calibrated",
        display: "Not Calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state"
    },
    /**
     * The state of calibration of this metric is unspecified.
     */
    metric_calibration_state_Unspecified: {
        code: "unspecified",
        display: "Unspecified",
        system: "http://hl7.org/fhir/metric-calibration-state"
    }
};
