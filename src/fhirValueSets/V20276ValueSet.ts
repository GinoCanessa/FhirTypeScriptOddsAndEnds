// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0276|2.9

import { Coding } from '../fhir.js'

/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export const V20276ValueSet = {
  /**
   * Code: CHECKUP
   */
  ARoutineCheckUpSuchAsAnAnnualPhysical: new Coding({
    display: "A routine check-up, such as an annual physical",
    code: "CHECKUP",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  }),
  /**
   * Code: EMERGENCY
   */
  EmergencyAppointment: new Coding({
    display: "Emergency appointment",
    code: "EMERGENCY",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  }),
  /**
   * Code: FOLLOWUP
   */
  AFollowUpVisitFromAPreviousAppointment: new Coding({
    display: "A follow up visit from a previous appointment",
    code: "FOLLOWUP",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  }),
  /**
   * Code: ROUTINE
   */
  RoutineAppointmentDefaultIfNotValued: new Coding({
    display: "Routine appointment - default if not valued",
    code: "ROUTINE",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  }),
  /**
   * Code: WALKIN
   */
  APreviouslyUnscheduledWalkInVisit: new Coding({
    display: "A previously unscheduled walk-in visit",
    code: "WALKIN",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  }),
} as const;

/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export type V20276ValueSetType = typeof V20276ValueSet;

/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
