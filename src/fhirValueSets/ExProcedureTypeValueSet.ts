// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ex-procedure-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes example Procedure Type codes.
 */
export const ExProcedureTypeValueSet = {
  /**
   * primary: The first procedure in a series required to produce and overall patient outcome.
   */
  PrimaryProcedure: new Coding({
    display: "Primary procedure",
    code: "primary",
    system: "http://terminology.hl7.org/CodeSystem/ex-procedure-type",
  }),
  /**
   * secondary: The second procedure in a series required to produce and overall patient outcome.
   */
  SecondaryProcedure: new Coding({
    display: "Secondary procedure",
    code: "secondary",
    system: "http://terminology.hl7.org/CodeSystem/ex-procedure-type",
  }),
} as const;

/**
 * This value set includes example Procedure Type codes.
 */
export type ExProcedureTypeValueSetType = typeof ExProcedureTypeValueSet;

/**
 * This value set includes example Procedure Type codes.
 */
