// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Describes the state of a metric calibration.
 */
export const MetricCalibrationStateValueSet = {
    /**
     * The metric has been calibrated.
     */
    metric_calibration_state_Calibrated: Coding.FromStrict({
        code: "calibrated",
        display: "Calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state"
    }),
    /**
     * The metric needs to be calibrated.
     */
    metric_calibration_state_CalibrationRequired: Coding.FromStrict({
        code: "calibration-required",
        display: "Calibration Required",
        system: "http://hl7.org/fhir/metric-calibration-state"
    }),
    /**
     * The metric has not been calibrated.
     */
    metric_calibration_state_NotCalibrated: Coding.FromStrict({
        code: "not-calibrated",
        display: "Not Calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state"
    }),
    /**
     * The state of calibration of this metric is unspecified.
     */
    metric_calibration_state_Unspecified: Coding.FromStrict({
        code: "unspecified",
        display: "Unspecified",
        system: "http://hl7.org/fhir/metric-calibration-state"
    }),
};
//# sourceMappingURL=MetricCalibrationStateValueSet.js.map