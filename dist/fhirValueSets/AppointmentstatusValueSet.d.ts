import { Coding } from '../fhir';
/**
 * The free/busy status of an appointment.
 */
export declare const AppointmentstatusValueSet: {
    /**
     * The patient/patients has/have arrived and is/are waiting to be seen.
     */
    appointmentstatus_Arrived: Coding;
    /**
     * All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.
     */
    appointmentstatus_Booked: Coding;
    /**
     * The appointment has been cancelled.
     */
    appointmentstatus_Cancelled: Coding;
    /**
     * When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).
     */
    appointmentstatus_CheckedIn: Coding;
    /**
     * This instance should not have been part of this patient's medical record.
     */
    appointmentstatus_EnteredInError: Coding;
    /**
     * The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.
     */
    appointmentstatus_Fulfilled: Coding;
    /**
     * Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).
     */
    appointmentstatus_NoShow: Coding;
    /**
     * Some or all of the participant(s) have not finalized their acceptance of the appointment request.
     */
    appointmentstatus_Pending: Coding;
    /**
     * None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.
     */
    appointmentstatus_Proposed: Coding;
    /**
     * The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available.
     * A specific time might or might not be pre-allocated.
     */
    appointmentstatus_Waitlisted: Coding;
};
//# sourceMappingURL=AppointmentstatusValueSet.d.ts.map