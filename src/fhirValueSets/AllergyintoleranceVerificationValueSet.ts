// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergyintolerance-verification|4.0.1

import { Coding } from '../fhir.js'

/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export const AllergyintoleranceVerificationValueSet = {
  /**
   * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
   */
  Confirmed: new Coding({
    display: "Confirmed",
    code: "confirmed",
    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
  }),
  /**
   * entered-in-error: The statement was entered in error and is not valid.
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
  }),
  /**
   * refuted: A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.
   */
  Refuted: new Coding({
    display: "Refuted",
    code: "refuted",
    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
  }),
  /**
   * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
   */
  Unconfirmed: new Coding({
    display: "Unconfirmed",
    code: "unconfirmed",
    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
  }),
} as const;

/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export type AllergyintoleranceVerificationValueSetType = typeof AllergyintoleranceVerificationValueSet;

/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
