// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export const DataAbsentReasonValueSet = {
  /**
   * The content of the data is represented in the resource narrative.
   */
  data_absent_reason_AsText: new Coding({
    code: "as-text",
    display: "As Text",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The source was asked but declined to answer.
   */
  data_absent_reason_AskedButDeclined: new Coding({
    code: "asked-declined",
    display: "Asked But Declined",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The source was asked but does not know the value.
   */
  data_absent_reason_AskedButUnknown: new Coding({
    code: "asked-unknown",
    display: "Asked But Unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * Some system or workflow process error means that the information is not available.
   */
  data_absent_reason_Error: new Coding({
    code: "error",
    display: "Error",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The information is not available due to security, privacy or related reasons.
   */
  data_absent_reason_Masked: new Coding({
    code: "masked",
    display: "Masked",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The numeric value is excessively low and unrepresentable due to a floating point processing error.
   */
  data_absent_reason_NegativeInfinityNINF: new Coding({
    code: "negative-infinity",
    display: "Negative Infinity (NINF)",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The numeric value is undefined or unrepresentable due to a floating point processing error.
   */
  data_absent_reason_NotANumberNaN: new Coding({
    code: "not-a-number",
    display: "Not a Number (NaN)",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * There is no proper value for this element (e.g. last menstrual period for a male).
   */
  data_absent_reason_NotApplicable: new Coding({
    code: "not-applicable",
    display: "Not Applicable",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The workflow didn't lead to this value being known.
   */
  data_absent_reason_NotAsked: new Coding({
    code: "not-asked",
    display: "Not Asked",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The value is not available because the observation procedure (test, etc.) was not performed.
   */
  data_absent_reason_NotPerformed: new Coding({
    code: "not-performed",
    display: "Not Performed",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The value is not permitted in this context (e.g. due to profiles, or the base data types).
   */
  data_absent_reason_NotPermitted: new Coding({
    code: "not-permitted",
    display: "Not Permitted",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The numeric value is excessively high and unrepresentable due to a floating point processing error.
   */
  data_absent_reason_PositiveInfinityPINF: new Coding({
    code: "positive-infinity",
    display: "Positive Infinity (PINF)",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * There is reason to expect (from the workflow) that the value may become known.
   */
  data_absent_reason_TemporarilyUnknown: new Coding({
    code: "temp-unknown",
    display: "Temporarily Unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The value is expected to exist but is not known.
   */
  data_absent_reason_Unknown: new Coding({
    code: "unknown",
    display: "Unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
  /**
   * The source system wasn't capable of supporting this element.
   */
  data_absent_reason_Unsupported: new Coding({
    code: "unsupported",
    display: "Unsupported",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason"
  }),
};
