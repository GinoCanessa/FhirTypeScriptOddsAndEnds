// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-intent|4.0.1

import { Coding } from '../fhir.js'

/**
 * MedicationRequest Intent Codes
 */
export const MedicationrequestIntentValueSet = {
  /**
   * filler-order: The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
   */
  FillerOrder: new Coding({
    display: "Filler Order",
    code: "filler-order",
    system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  }),
  /**
   * instance-order: The request represents an instance for the particular order, for example a medication administration record.
   */
  InstanceOrder: new Coding({
    display: "Instance Order",
    code: "instance-order",
    system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  }),
  /**
   * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.
   */
  Option: new Coding({
    display: "Option",
    code: "option",
    system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  }),
  /**
   * order: The request represents a request/demand and authorization for action
   */
  Order: new Coding({
    display: "Order",
    code: "order",
    system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  }),
  /**
   * original-order: The request represents the original authorization for the medication request.
   */
  OriginalOrder: new Coding({
    display: "Original Order",
    code: "original-order",
    system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  }),
  /**
   * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
   */
  Plan: new Coding({
    display: "Plan",
    code: "plan",
    system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  }),
  /**
   * proposal: The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
   */
  Proposal: new Coding({
    display: "Proposal",
    code: "proposal",
    system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  }),
  /**
   * reflex-order: The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..
   */
  ReflexOrder: new Coding({
    display: "Reflex Order",
    code: "reflex-order",
    system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  }),
} as const;

/**
 * MedicationRequest Intent Codes
 */
export type MedicationrequestIntentValueSetType = typeof MedicationrequestIntentValueSet;

/**
 * MedicationRequest Intent Codes
 */
