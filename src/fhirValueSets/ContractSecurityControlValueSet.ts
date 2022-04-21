// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-security-control|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set contract specific codes for security control.
 */
export const ContractSecurityControlValueSet = {
  /**
   * policy: To be completed
   */
  Policy: new Coding({
    display: "Policy",
    code: "policy",
    system: "http://hl7.org/fhir/contract-security-control",
  }),
} as const;

/**
 * This value set contract specific codes for security control.
 */
export type ContractSecurityControlValueSetType = typeof ContractSecurityControlValueSet;

/**
 * This value set contract specific codes for security control.
 */
export enum ContractSecurityControlValueSetEnum {
  /**
   * policy: To be completed
   */
  Policy = "policy",
}
