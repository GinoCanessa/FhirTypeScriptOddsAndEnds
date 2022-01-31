// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export const PrecisionEstimateType = {
  /**
   * confidence interval.
   */
  precision_estimate_type_ConfidenceInterval: {
    code: "CI",
    display: "confidence interval",
    system: "http://terminology.hl7.org/CodeSystem/precision-estimate-type"
  } as Coding,
  /**
   * interquartile range.
   */
  precision_estimate_type_InterquartileRange: {
    code: "IQR",
    display: "interquartile range",
    system: "http://terminology.hl7.org/CodeSystem/precision-estimate-type"
  } as Coding,
  /**
   * standard deviation.
   */
  precision_estimate_type_StandardDeviation: {
    code: "SD",
    display: "standard deviation",
    system: "http://terminology.hl7.org/CodeSystem/precision-estimate-type"
  } as Coding,
  /**
   * standard error.
   */
  precision_estimate_type_StandardError: {
    code: "SE",
    display: "standard error",
    system: "http://terminology.hl7.org/CodeSystem/precision-estimate-type"
  } as Coding,
};
