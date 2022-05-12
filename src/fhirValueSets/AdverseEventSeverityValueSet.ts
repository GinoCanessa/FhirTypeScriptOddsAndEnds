// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adverse-event-severity|4.0.1

import { Coding } from '../fhir.js'

/**
 * The severity of the adverse event itself, in direct relation to the subject.
 */
export const AdverseEventSeverityValueSet = {
  /**
   * Code: mild
   */
  Mild: new Coding({
    display: "Mild",
    code: "mild",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-severity",
  }),
  /**
   * Code: moderate
   */
  Moderate: new Coding({
    display: "Moderate",
    code: "moderate",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-severity",
  }),
  /**
   * Code: severe
   */
  Severe: new Coding({
    display: "Severe",
    code: "severe",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-severity",
  }),
} as const;

/**
 * The severity of the adverse event itself, in direct relation to the subject.
 */
export type AdverseEventSeverityValueSetType = typeof AdverseEventSeverityValueSet;

/**
 * The severity of the adverse event itself, in direct relation to the subject.
 */
