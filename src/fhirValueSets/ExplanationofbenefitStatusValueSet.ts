// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/explanationofbenefit-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * A code specifying the state of the resource instance.
 */
export const ExplanationofbenefitStatusValueSet = {
  /**
   * active: The resource instance is currently in-force.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/explanationofbenefit-status",
  }),
  /**
   * cancelled: The resource instance is withdrawn, rescinded or reversed.
   */
  Cancelled: new Coding({
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/explanationofbenefit-status",
  }),
  /**
   * draft: A new resource instance the contents of which is not complete.
   */
  Draft: new Coding({
    display: "Draft",
    code: "draft",
    system: "http://hl7.org/fhir/explanationofbenefit-status",
  }),
  /**
   * entered-in-error: The resource instance was entered in error.
   */
  EnteredInError: new Coding({
    display: "Entered In Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/explanationofbenefit-status",
  }),
} as const;

/**
 * A code specifying the state of the resource instance.
 */
export type ExplanationofbenefitStatusValueSetType = typeof ExplanationofbenefitStatusValueSet;

/**
 * A code specifying the state of the resource instance.
 */
