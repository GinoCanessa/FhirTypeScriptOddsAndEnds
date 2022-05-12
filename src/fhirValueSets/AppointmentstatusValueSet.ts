// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/appointmentstatus|4.0.1

import { Coding } from '../fhir.js'

/**
 * The free/busy status of an appointment.
 */
export const AppointmentstatusValueSet = {
  /**
   * arrived: The patient/patients has/have arrived and is/are waiting to be seen.
   */
  Arrived: new Coding({
    display: "Arrived",
    code: "arrived",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * booked: All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.
   */
  Booked: new Coding({
    display: "Booked",
    code: "booked",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * cancelled: The appointment has been cancelled.
   */
  Cancelled: new Coding({
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * checked-in: When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).
   */
  CheckedIn: new Coding({
    display: "Checked In",
    code: "checked-in",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError: new Coding({
    display: "Entered in error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * fulfilled: The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.
   */
  Fulfilled: new Coding({
    display: "Fulfilled",
    code: "fulfilled",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * noshow: Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).
   */
  NoShow: new Coding({
    display: "No Show",
    code: "noshow",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * pending: Some or all of the participant(s) have not finalized their acceptance of the appointment request.
   */
  Pending: new Coding({
    display: "Pending",
    code: "pending",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * proposed: None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.
   */
  Proposed: new Coding({
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
  /**
   * waitlist: The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available.
   * A specific time might or might not be pre-allocated.
   */
  Waitlisted: new Coding({
    display: "Waitlisted",
    code: "waitlist",
    system: "http://hl7.org/fhir/appointmentstatus",
  }),
} as const;

/**
 * The free/busy status of an appointment.
 */
export type AppointmentstatusValueSetType = typeof AppointmentstatusValueSet;

/**
 * The free/busy status of an appointment.
 */
