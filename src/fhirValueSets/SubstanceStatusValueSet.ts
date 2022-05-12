// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * A code to indicate if the substance is actively used.
 */
export const SubstanceStatusValueSet = {
  /**
   * active: The substance is considered for use or reference.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/substance-status",
  }),
  /**
   * entered-in-error: The substance was entered in error.
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/substance-status",
  }),
  /**
   * inactive: The substance is considered for reference, but not for use.
   */
  Inactive: new Coding({
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/substance-status",
  }),
} as const;

/**
 * A code to indicate if the substance is actively used.
 */
export type SubstanceStatusValueSetType = typeof SubstanceStatusValueSet;

/**
 * A code to indicate if the substance is actively used.
 */
