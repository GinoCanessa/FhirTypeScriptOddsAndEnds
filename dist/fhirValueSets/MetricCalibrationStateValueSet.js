// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-calibration-state|4.0.1
import { Coding } from '../fhir.js';
/**
 * Describes the state of a metric calibration.
 */
export const MetricCalibrationStateValueSet = {
    /**
     * calibrated: The metric has been calibrated.
     */
    Calibrated: new Coding({
        display: "Calibrated",
        code: "calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * calibration-required: The metric needs to be calibrated.
     */
    CalibrationRequired: new Coding({
        display: "Calibration Required",
        code: "calibration-required",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * not-calibrated: The metric has not been calibrated.
     */
    NotCalibrated: new Coding({
        display: "Not Calibrated",
        code: "not-calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * unspecified: The state of calibration of this metric is unspecified.
     */
    Unspecified: new Coding({
        display: "Unspecified",
        code: "unspecified",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
};
/**
 * Describes the state of a metric calibration.
 */
//# sourceMappingURL=MetricCalibrationStateValueSet.js.map