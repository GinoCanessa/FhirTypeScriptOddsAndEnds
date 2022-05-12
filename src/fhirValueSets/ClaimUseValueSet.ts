// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-use|4.0.1

import { Coding } from '../fhir.js'

/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export const ClaimUseValueSet = {
  /**
   * claim: The treatment is complete and this represents a Claim for the services.
   */
  Claim: new Coding({
    display: "Claim",
    code: "claim",
    system: "http://hl7.org/fhir/claim-use",
  }),
  /**
   * preauthorization: The treatment is proposed and this represents a Pre-authorization for the services.
   */
  Preauthorization: new Coding({
    display: "Preauthorization",
    code: "preauthorization",
    system: "http://hl7.org/fhir/claim-use",
  }),
  /**
   * predetermination: The treatment is proposed and this represents a Pre-determination for the services.
   */
  Predetermination: new Coding({
    display: "Predetermination",
    code: "predetermination",
    system: "http://hl7.org/fhir/claim-use",
  }),
} as const;

/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export type ClaimUseValueSetType = typeof ClaimUseValueSet;

/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
