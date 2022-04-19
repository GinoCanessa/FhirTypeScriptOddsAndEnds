// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Describes the type of a metric calibration.
 */
export const MetricCalibrationTypeValueSet = {
  /**
   * Gain metric calibration method.
   */
  metric_calibration_type_Gain: new Coding({
    code: "gain",
    display: "Gain",
    system: "http://hl7.org/fhir/metric-calibration-type"
  }),
  /**
   * Offset metric calibration method.
   */
  metric_calibration_type_Offset: new Coding({
    code: "offset",
    display: "Offset",
    system: "http://hl7.org/fhir/metric-calibration-type"
  }),
  /**
   * Two-point metric calibration method.
   */
  metric_calibration_type_TwoPoint: new Coding({
    code: "two-point",
    display: "Two Point",
    system: "http://hl7.org/fhir/metric-calibration-type"
  }),
  /**
   * Metric calibration method has not been identified.
   */
  metric_calibration_type_Unspecified: new Coding({
    code: "unspecified",
    display: "Unspecified",
    system: "http://hl7.org/fhir/metric-calibration-type"
  }),
};
