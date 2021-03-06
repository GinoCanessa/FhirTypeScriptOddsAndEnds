// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActPriority|2018-08-12

import { Coding } from '../fhir.js'

/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export const V3ActPriorityValueSet = {
  /**
   * A: As soon as possible, next highest priority after stat.
   */
  ASAP: new Coding({
    display: "ASAP",
    code: "A",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * CR: Filler should contact the placer as soon as results are available, even for preliminary results.  (Was "C" in HL7 version 2.3's reporting priority.)
   */
  CallbackResults: new Coding({
    display: "callback results",
    code: "CR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * CS: Filler should contact the placer (or target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
   */
  CallbackForScheduling: new Coding({
    display: "callback for scheduling",
    code: "CS",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * CSP: Filler should contact the placer to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
   */
  CallbackPlacerForScheduling: new Coding({
    display: "callback placer for scheduling",
    code: "CSP",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * CSR: Filler should contact the service recipient (target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
   */
  ContactRecipientForScheduling: new Coding({
    display: "contact recipient for scheduling",
    code: "CSR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * EL: Beneficial to the patient but not essential for survival.
   */
  Elective: new Coding({
    display: "elective",
    code: "EL",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * EM: An unforeseen combination of circumstances or the resulting state that calls for immediate action.
   */
  Emergency: new Coding({
    display: "emergency",
    code: "EM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * P: Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order is placed, a message can be generated indicating the time needed for the service so that it is not ordered in conflict with a scheduled operation.
   */
  Preop: new Coding({
    display: "preop",
    code: "P",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * PRN: An "as needed" order should be accompanied by a description of what constitutes a need. This description is represented by an observation service predicate as a precondition.
   */
  AsNeeded: new Coding({
    display: "as needed",
    code: "PRN",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * R: Routine service, do at usual work hours.
   */
  Routine: new Coding({
    display: "routine",
    code: "R",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * RR: A report should be prepared and sent as quickly as possible.
   */
  RushReporting: new Coding({
    display: "rush reporting",
    code: "RR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * S: With highest priority (e.g., emergency).
   */
  Stat: new Coding({
    display: "stat",
    code: "S",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * T: It is critical to come as close as possible to the requested time (e.g., for a through antimicrobial level).
   */
  TimingCritical: new Coding({
    display: "timing critical",
    code: "T",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * UD: Drug is to be used as directed by the prescriber.
   */
  UseAsDirected: new Coding({
    display: "use as directed",
    code: "UD",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
  /**
   * UR: Calls for prompt action.
   */
  Urgent: new Coding({
    display: "urgent",
    code: "UR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
  }),
} as const;

/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export type V3ActPriorityValueSetType = typeof V3ActPriorityValueSet;

/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
