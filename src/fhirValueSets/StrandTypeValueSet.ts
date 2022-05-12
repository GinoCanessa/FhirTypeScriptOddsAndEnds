// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/strand-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * Type for strand.
 */
export const StrandTypeValueSet = {
  /**
   * crick: Crick strand of reference sequence.
   */
  CrickStrandOfReferenceSeq: new Coding({
    display: "Crick strand of referenceSeq",
    code: "crick",
    system: "http://hl7.org/fhir/strand-type",
  }),
  /**
   * watson: Watson strand of reference sequence.
   */
  WatsonStrandOfReferenceSeq: new Coding({
    display: "Watson strand of referenceSeq",
    code: "watson",
    system: "http://hl7.org/fhir/strand-type",
  }),
} as const;

/**
 * Type for strand.
 */
export type StrandTypeValueSetType = typeof StrandTypeValueSet;

/**
 * Type for strand.
 */
