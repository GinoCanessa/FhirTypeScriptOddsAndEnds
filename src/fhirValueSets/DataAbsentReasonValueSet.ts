// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/data-absent-reason|4.0.1

import { Coding } from '../fhir.js'

/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export const DataAbsentReasonValueSet = {
  /**
   * as-text: The content of the data is represented in the resource narrative.
   */
  AsText: new Coding({
    display: "As Text",
    code: "as-text",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * asked-declined: The source was asked but declined to answer.
   */
  AskedButDeclined: new Coding({
    display: "Asked But Declined",
    code: "asked-declined",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * asked-unknown: The source was asked but does not know the value.
   */
  AskedButUnknown: new Coding({
    display: "Asked But Unknown",
    code: "asked-unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * error: Some system or workflow process error means that the information is not available.
   */
  Error: new Coding({
    display: "Error",
    code: "error",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * masked: The information is not available due to security, privacy or related reasons.
   */
  Masked: new Coding({
    display: "Masked",
    code: "masked",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * negative-infinity: The numeric value is excessively low and unrepresentable due to a floating point processing error.
   */
  NegativeInfinityNINF: new Coding({
    display: "Negative Infinity (NINF)",
    code: "negative-infinity",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * not-a-number: The numeric value is undefined or unrepresentable due to a floating point processing error.
   */
  NotANumberNaN: new Coding({
    display: "Not a Number (NaN)",
    code: "not-a-number",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * not-applicable: There is no proper value for this element (e.g. last menstrual period for a male).
   */
  NotApplicable: new Coding({
    display: "Not Applicable",
    code: "not-applicable",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * not-asked: The workflow didn't lead to this value being known.
   */
  NotAsked: new Coding({
    display: "Not Asked",
    code: "not-asked",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
   */
  NotPerformed: new Coding({
    display: "Not Performed",
    code: "not-performed",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * not-permitted: The value is not permitted in this context (e.g. due to profiles, or the base data types).
   */
  NotPermitted: new Coding({
    display: "Not Permitted",
    code: "not-permitted",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * positive-infinity: The numeric value is excessively high and unrepresentable due to a floating point processing error.
   */
  PositiveInfinityPINF: new Coding({
    display: "Positive Infinity (PINF)",
    code: "positive-infinity",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * temp-unknown: There is reason to expect (from the workflow) that the value may become known.
   */
  TemporarilyUnknown: new Coding({
    display: "Temporarily Unknown",
    code: "temp-unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * unknown: The value is expected to exist but is not known.
   */
  Unknown: new Coding({
    display: "Unknown",
    code: "unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
  /**
   * unsupported: The source system wasn't capable of supporting this element.
   */
  Unsupported: new Coding({
    display: "Unsupported",
    code: "unsupported",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  }),
} as const;

/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export type DataAbsentReasonValueSetType = typeof DataAbsentReasonValueSet;

/**
 * Used to specify why the normally expected content of the data element is missing.
 */
