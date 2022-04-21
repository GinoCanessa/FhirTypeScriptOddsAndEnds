// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/observation-range-category|4.0.1

import { Coding } from '../fhir.js'

/**
 * Codes identifying the category of observation range.
 */
export const ObservationRangeCategoryValueSet = {
  /**
   * absolute: Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
   */
  AbsoluteRange: new Coding({
    display: "absolute range",
    code: "absolute",
    system: "http://hl7.org/fhir/observation-range-category",
  }),
  /**
   * critical: Critical Range for Ordinal and Continuous Observations.
   */
  CriticalRange: new Coding({
    display: "critical range",
    code: "critical",
    system: "http://hl7.org/fhir/observation-range-category",
  }),
  /**
   * reference: Reference (Normal) Range for Ordinal and Continuous Observations.
   */
  ReferenceRange: new Coding({
    display: "reference range",
    code: "reference",
    system: "http://hl7.org/fhir/observation-range-category",
  }),
} as const;

/**
 * Codes identifying the category of observation range.
 */
export type ObservationRangeCategoryValueSetType = typeof ObservationRangeCategoryValueSet;

/**
 * Codes identifying the category of observation range.
 */
export enum ObservationRangeCategoryValueSetEnum {
  /**
   * absolute: Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
   */
  AbsoluteRange = "absolute",
  /**
   * critical: Critical Range for Ordinal and Continuous Observations.
   */
  CriticalRange = "critical",
  /**
   * reference: Reference (Normal) Range for Ordinal and Continuous Observations.
   */
  ReferenceRange = "reference",
}
