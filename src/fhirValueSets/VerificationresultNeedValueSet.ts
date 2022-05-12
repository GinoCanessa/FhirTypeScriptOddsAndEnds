// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-need|4.0.1

import { Coding } from '../fhir.js'

/**
 * The frequency with which the target must be validated
 */
export const VerificationresultNeedValueSet = {
  /**
   * initial: ***TODO***
   */
  Initial: new Coding({
    display: "Initial",
    code: "initial",
    system: "http://terminology.hl7.org/CodeSystem/need",
  }),
  /**
   * none: ***TODO***
   */
  None: new Coding({
    display: "None",
    code: "none",
    system: "http://terminology.hl7.org/CodeSystem/need",
  }),
  /**
   * periodic: ***TODO***
   */
  Periodic: new Coding({
    display: "Periodic",
    code: "periodic",
    system: "http://terminology.hl7.org/CodeSystem/need",
  }),
} as const;

/**
 * The frequency with which the target must be validated
 */
export type VerificationresultNeedValueSetType = typeof VerificationresultNeedValueSet;

/**
 * The frequency with which the target must be validated
 */
