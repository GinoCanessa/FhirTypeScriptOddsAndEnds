// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-state-codes|4.0.1

import { Coding } from '../fhir.js'

/**
 * Indicates the state of the consent.
 */
export const ConsentStateCodesValueSet = {
  /**
   * active: The consent is to be followed and enforced.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/consent-state-codes",
  }),
  /**
   * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
   */
  Pending: new Coding({
    display: "Pending",
    code: "draft",
    system: "http://hl7.org/fhir/consent-state-codes",
  }),
  /**
   * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored.
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/consent-state-codes",
  }),
  /**
   * inactive: The consent is terminated or replaced.
   */
  Inactive: new Coding({
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/consent-state-codes",
  }),
  /**
   * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
   */
  Proposed: new Coding({
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/consent-state-codes",
  }),
  /**
   * rejected: The consent has been rejected by one or more of the parties.
   */
  Rejected: new Coding({
    display: "Rejected",
    code: "rejected",
    system: "http://hl7.org/fhir/consent-state-codes",
  }),
} as const;

/**
 * Indicates the state of the consent.
 */
export type ConsentStateCodesValueSetType = typeof ConsentStateCodesValueSet;

/**
 * Indicates the state of the consent.
 */
