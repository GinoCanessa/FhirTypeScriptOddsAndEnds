// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-validation-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * Status of the validation of the target against the primary source
 */
export const VerificationresultValidationStatusValueSet = {
  /**
   * Code: failed
   */
  Failed: new Coding({
    display: "Failed",
    code: "failed",
    system: "http://terminology.hl7.org/CodeSystem/validation-status",
  }),
  /**
   * Code: successful
   */
  Successful: new Coding({
    display: "Successful",
    code: "successful",
    system: "http://terminology.hl7.org/CodeSystem/validation-status",
  }),
  /**
   * unknown: The validations status has not been determined yet
   */
  Unknown: new Coding({
    display: "Unknown",
    code: "unknown",
    system: "http://terminology.hl7.org/CodeSystem/validation-status",
  }),
} as const;

/**
 * Status of the validation of the target against the primary source
 */
export type VerificationresultValidationStatusValueSetType = typeof VerificationresultValidationStatusValueSet;

/**
 * Status of the validation of the target against the primary source
 */
