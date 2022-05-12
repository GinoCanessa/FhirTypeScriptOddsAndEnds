// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-action|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes sample Consent Action codes.
 */
export const ConsentActionValueSet = {
  /**
   * access: Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)
   */
  Access: new Coding({
    display: "Access",
    code: "access",
    system: "http://terminology.hl7.org/CodeSystem/consentaction",
  }),
  /**
   * collect: Gather retrieved information for storage
   */
  Collect: new Coding({
    display: "Collect",
    code: "collect",
    system: "http://terminology.hl7.org/CodeSystem/consentaction",
  }),
  /**
   * correct: Allow retrieval of a patient's information for the purpose of update or rectify
   */
  AccessAndCorrect: new Coding({
    display: "Access and Correct",
    code: "correct",
    system: "http://terminology.hl7.org/CodeSystem/consentaction",
  }),
  /**
   * disclose: Transfer retrieved information
   */
  Disclose: new Coding({
    display: "Disclose",
    code: "disclose",
    system: "http://terminology.hl7.org/CodeSystem/consentaction",
  }),
  /**
   * use: Utilize the retrieved information
   */
  Use: new Coding({
    display: "Use",
    code: "use",
    system: "http://terminology.hl7.org/CodeSystem/consentaction",
  }),
} as const;

/**
 * This value set includes sample Consent Action codes.
 */
export type ConsentActionValueSetType = typeof ConsentActionValueSet;

/**
 * This value set includes sample Consent Action codes.
 */
