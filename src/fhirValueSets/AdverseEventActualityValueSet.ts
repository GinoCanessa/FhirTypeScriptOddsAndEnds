// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adverse-event-actuality|4.0.1

import { Coding } from '../fhir.js'

/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export const AdverseEventActualityValueSet = {
  /**
   * actual: The adverse event actually happened regardless of whether anyone was affected or harmed.
   */
  AdverseEvent: new Coding({
    display: "Adverse Event",
    code: "actual",
    system: "http://hl7.org/fhir/adverse-event-actuality",
  }),
  /**
   * potential: A potential adverse event.
   */
  PotentialAdverseEvent: new Coding({
    display: "Potential Adverse Event",
    code: "potential",
    system: "http://hl7.org/fhir/adverse-event-actuality",
  }),
} as const;

/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export type AdverseEventActualityValueSetType = typeof AdverseEventActualityValueSet;

/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
