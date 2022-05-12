// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adverse-event-causality-method|4.0.1

import { Coding } from '../fhir.js'

/**
 * TODO.
 */
export const AdverseEventCausalityMethodValueSet = {
  /**
   * Code: Bayesian
   */
  Bayesian: new Coding({
    display: "Bayesian",
    code: "Bayesian",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-method",
  }),
  /**
   * Code: Checklist
   */
  Checklist: new Coding({
    display: "Checklist",
    code: "Checklist",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-method",
  }),
  /**
   * Code: ProbabilityScale
   */
  ProbabilityScale: new Coding({
    display: "Probability Scale",
    code: "ProbabilityScale",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-method",
  }),
} as const;

/**
 * TODO.
 */
export type AdverseEventCausalityMethodValueSetType = typeof AdverseEventCausalityMethodValueSet;

/**
 * TODO.
 */
